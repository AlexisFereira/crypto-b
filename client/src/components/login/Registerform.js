import React, { useState , useEffect} from "react";
import Btn from "./../UI/Btn";
import {useTranslation} from "react-i18next";
import Field from "./../UI/field";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {SeTDataDash} from "../store/actions/actionsCreators";
import {ContainerFom} from "./styles";
import ShowModal from "../UI/ShowModal/ShowModal";
import Fade from "./../UI/Fade";
import axios from "axios";
import {Crypto,VerificaId} from "../../crypto";

function RegisterForm(props) {


    // if(!props.landing.canRegister){
    //     props.history.push("/")
    // }


    const {t} = useTranslation();

    const [state,SetS] = useState({
        error:false,
        address:"",
        loading:false,
        web3:{},
        disabled:false
    });
    const [modal,SetM] = useState({
        status:false,
        title:"",
        description:"",
        callBack:null,
        icon:""
    });



    //https://cryptobillions.io/register/?minihas=eb044cc2
    //https://cryptobillions.io/register/?minihas=48babd74

    let hanldeModal = x => SetM({...modal,...x});
    const handleState = x => SetS({...state,...x});



    let onSubmit = async ()=>{
        SetS({...state,loading:true});
        if(state.address === ""){
            handleState({disabled:true,error:true});
            return ""
        } try{
                let address = state.address;
                let id = state.address;

                //VALIDA SI ES UN ID
                if(address.length < 44){
                    address = await Crypto(null,[address],"idToAddress");
                }
                //VALIDA SI EXISTE
                let registrado = await VerificaId(id);
                   if(registrado.status){

                       // DEJALO PASAR
                       let registro = await Crypto({
                           feeLimit: 1000000000,
                           callValue: 1200000000,
                       },[
                           address  // direcion del wallet referido
                       ],"register");
                        if(registro.result){
                            // llevalo al dashbaord
                        }
                        else{
                            // no se realizao la transacción
                            SetS({...state,loading:false});
                        }
                   }
                   else{
                       SetS({...state,loading:false});
                   }
        }
        catch (e) {
            SetS({...state,loading:false});
            console.log(e)
        }

    };
    const handleAddres = e=>{
        let {value} = e.target;
        if(value !== "" && state.error){
            handleState({
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

    let query =  new URLSearchParams(props.history.location.search);

    let consultaMHASh = async ()=>{

        if(query.get("minihash")){
            handleState({disabled:true});
            await axios({
                method:"get",
                url:`http://api-test.cryptobillions.io/api/v1/accounth/${query.get("minihash")}`,
            }).then(async  result => {
                if(result.status){
                    console.log(result.data.wallet)
                    await handleState({address:result.data.wallet});
                }
            });
        }
    };

    useEffect(()=>{
        consultaMHASh()
    },[]);

    useEffect(()=>{
        if(query.get("minihash") && state.address){
            onSubmit();
        }
    },[state.address]);

    return (
       <Fade>
           <ContainerFom className={"p-2 p-lg-4 br-8 "}>
               <div className="title text-center mb-md-5">
                   {t('register')}
               </div>
               <form
                   className={"text-center p-3"}
                   onSubmit={ e=>{
                       e.preventDefault();
                       onSubmit()
                   }}
               >

                   <Field
                       placeholder={t('Enter_ETH')}
                       className={"mb-3"}
                       error={state.error}
                       value={state.address}
                       onChange={e => {
                           let value  = e.target.value.replace(/[^0-9a-zA-Z]/g,"").substring(0,42);
                           let obj = {target:{value}};
                           handleAddres(obj)
                       }}
                       disabled={state.loading}
                   />
                   <Btn
                       loading={state.loading}
                       mw={"250px"}
                       className={"mx-auto"}
                       disabled={state.disabled}
                   >
                       {t('register')}
                   </Btn>
               </form>
               <ShowModal
                   show={modal.status}
                   onConfirm={()=> hanldeModal({status:false})}
                   icon={modal.icon}
                   title={modal.title}
                   description={modal.description}
               />
           </ContainerFom>
       </Fade>
    )
}
const MSTprops = state => ({ state : state.Dashboard,landing:state.Landing});
const MDTprops = {SeTDataDash};

export default connect(MSTprops,MDTprops)(withRouter(React.memo(RegisterForm)));
