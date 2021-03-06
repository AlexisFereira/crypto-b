import React, {useRef, useState} from "react";
import styled from "@emotion/styled";
import Btn from "./../UI/Btn";
import {useTranslation} from "react-i18next";
import Field from "./../UI/field";
import {connect} from "react-redux";
import {SeTDataDash} from "../store/actions/actionsCreators";
import {withRouter} from "react-router-dom";
import ShowModal from "../UI/ShowModal/ShowModal";
import Fade from "./../UI/Fade";
import {Crypto, getDataFromWallet, VerificaId} from "../../crypto";

const Container = styled.div`
    position:relative;
    width:100%;
    max-width:350px;
    border-radius:8px;
    margin-top:50px;
    background: rgb(9,49,98);
    background: linear-gradient(183deg, rgba(9,49,98,0) 50%, rgba(9,49,98,1) 100%);
    
    .title{
        font-weight:300;
        font-size:40px;
        color:white;
     }
     
     @media all and (max-width:768px){
        margin-top:0;
     }
`;

function Formulario(props) {
    const {t} = useTranslation();

    const [state,SetS] = useState({
        error:false,
        address:"",
        loading:false,
        loadingAuth:false
    });

    const [modal,SetM] = useState({
        status:false,
        title:"",
        description:"",
        callBack:null,
        icon:""
    });

    let hanldeModal = x => SetM({...modal,...x});
    let handler = x => SetS({...modal,...x});

    const TheRef = useRef(null);

    let onSubmitAuth = async ()=>{
        SetS({...state,loadingAuth:true});
        try{
           let UserTron = await Crypto(null,null,"getUserAddress");
            console.log(typeof  UserTron)
            if(UserTron && typeof UserTron === "string"){
                // Verifica si existe
                let exists = await getDataFromWallet(UserTron);
                if(exists.status){
                        await sessionStorage.setItem("logueado", UserTron);
                        await props.SeTDataDash({onlyView : false,logueado: UserTron});
                        props.history.push("/dashboard")
                    }else{
                        SetS({...state,loadingAuth:false});
                    }
                }
                else{
                    hanldeModal({
                        status:true,
                        title:"Error de wallet",
                        description: <span>No se encontró ninguna billetera conectada a su TRONLINK.</span>,
                        icon:"cancel",
                    })
                    handler({loading:false})
                }
            }
        catch (e) {
            SetS({...state,loadingAuth:false});
            hanldeModal({
                status:true,
                title:"Error de wallet",
                description: <span>No se encontró ninguna billetera conectada a su meta mask.(<small>{e.message}</small>)</span>,
                icon:"cancel",
            })

        }
    };

    let onSubmit = async ()=> {

        let address = state.address;

        if(state.address === "" ){
            handler({
                loading:false,
                disabled:true,
                error:"Ingrese un id o Dirección de wallet.",
            });
            return "";
        }
        handler({loading:true});

        if(address.length >= 34 ){
            address = await Crypto(null,[address],"addressId");
            address = await Crypto(null, [address.id._hex],"toDecimal");
        }


        try {
           let validacion = await VerificaId(address);

            if(validacion.status){
                let logueado = {wallet:validacion.data.user_b58};
                sessionStorage.setItem("onlyview",JSON.stringify(logueado));
                props.SeTDataDash({onlyView:true});
                props.history.push('/dashboard')

            }else{
                handler({
                    loading:false,
                    error:"Wallet no encontrado."
                })
            }
        }
        catch (e) {

        }
    };

    const handleAddres = e=>{
        let {value} = e.target;
        if(value !== "" && state.error){
            SetS({...state,
                error:false,
                address:value,
                disabled:false
            })
        }
        else{
            SetS({...state,
                address:value
            })
        }
    };

    return (
     <Fade>
         <Container className={"p-2 p-lg-4 br-8 "}>
             <div className="title text-center mb-md-5">
                 {t('login')}
             </div>

             <form
                 className={"text-center p-3"}
                 ref={TheRef}
                 onSubmit={e=>{
                     e.preventDefault();
                     onSubmit();
                 }}
             >
                 <div className={"wc mb-5"}>
                     <small className={"cw mb-2 d-block"}>
                         <b>{t('Automatic_login')}</b>
                     </small>
                     <Btn
                         btntype={"button"}
                         mw={"250px"}
                         className={"mx-auto"}
                         type={"line"}
                         gold
                         disabled={state.loading}
                         onClick={()=> onSubmitAuth()}
                         loading={state.loadingAuth}
                     >
                         {t('Login_automatically')}
                     </Btn>
                 </div>
                 <Field
                     placeholder={t('Enter_ETH')}
                     className={"mb-3"}
                     error={state.error}
                     value={state.address || ""}
                     onChange={e =>{
                         let value  = e.target.value.replace(/[^0-9a-zA-Z]/g,"").substring(0,50);
                         let obj = {target:{value}};
                         handleAddres(obj)
                     }}
                     disabled={state.loading || state.loadingAuth}
                 />
                 <Btn
                     mw={"250px"}
                     disabled={state.loadingAuth || state.disabled }
                     className={"mx-auto"}
                     loading={state.loading}
                     caption={t("prewiew_only")}
                 >
                     {t('Entern_manually')}
                 </Btn>
             </form>

             <ShowModal
                 show={modal.status}
                 onConfirm={()=> hanldeModal({status:false})}
                 icon={modal.icon}
                 title={modal.title}
                 description={modal.description}
             />
         </Container>
     </Fade>
    )
}
const MSTprops = state => ({ dashboard : state.Dashboard});
const MDTprops = {SeTDataDash};

export default connect(MSTprops,MDTprops)(withRouter(React.memo(Formulario)));
