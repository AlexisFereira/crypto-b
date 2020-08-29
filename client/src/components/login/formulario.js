import React, {useRef, useState} from "react";
import styled from "@emotion/styled";
import Btn from "./../UI/Btn";
import {useTranslation} from "react-i18next";
import Field from "./../UI/field";
import {connect} from "react-redux";
import {SeTDataDash} from "../store/actions/actionsCreators";
import {withRouter} from "react-router-dom";
import getWeb3 from "../../getWeb3";
import Cryptobillions from "../../contracts/Cryptobillions";
import {VerificaId} from "../../crypto";
import axios from "axios";
import ShowModal from "../UI/ShowModal/ShowModal";

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

    let hanldeModal = x => SetM({...modal,x});
    const TheRef = useRef(null);

    let onSubmitAuth = async ()=>{
        SetS({...state,loadingAuth:true});
        try{
            const web3 = await getWeb3();
            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();

            // Get the contract instance.
            const networkId       = await web3.eth.net.getId();
            const deployedNetwork = Cryptobillions.networks[networkId];
            const instance        = new web3.eth.Contract( Cryptobillions.abi, deployedNetwork && deployedNetwork.address);
            const nonce           = await web3.eth.getTransactionCount(accounts[0]);
            // return await instance.methods;

            // valida si es un id o un add y consultalo
            if(accounts[0]){
                try{
                    // valida el id
                    let id = await instance.methods.users(accounts[0]).call();

                    // consulta le id
                    await VerificaId(await id.id)
                        .then(result =>{
                            console.log(result);
                            // if(){
                            //
                            // }
                            // else{
                            //
                            // }

                         })
                        .catch(()=>{
                            SetS({
                                ...state,
                                loadingAuth:false,
                                error:true,
                            });
                            hanldeModal({
                                status:true,
                                title:"La dirección on ID ingresado no existen.",
                                icon:"cancel",
                            })
                        })
                }
                catch (e) {

                }
            }
            // consulta normal si es un address
            else{
                SetS({...state,loadingAuth:true});
                hanldeModal({
                    status:true,
                    title: "0000"
                });

                alert("No hay una billetera conectada.")
            }
            // console.log(options)
        }
        catch (e) {
            console.log(e);
            SetS({...state,loadingAuth:true});
            hanldeModal({
                status:true,
                title:"La dirección on ID ingresado no existen.",
                icon:"cancel",
            })

        }
    };

    let onSubmit = async ()=> {
        if(state.address === "" ){
            SetS({...state,loading:false,disabled:true,error:true});
            return "";
        }
        else{
            SetS({...state,loading:true});
            try{
                await  axios({
                    method: 'get',
                    url: `https://api-cryptobillions.herokuapp.com/api/v1/account/${state.address}`
                })
                    .then(result=>{
                        if(result.status === 200 ){
                            SetS({
                                ...state,
                                loading:false,
                                error:false
                            });
                            return props.history.push("/dashboard/?user="+ state.address)
                        }else {
                            SetS({
                                ...state,
                                loading:false,
                                error:false
                            });
                        }
                    })
                    .catch(()=>{
                        SetS({
                            ...state,
                            loading:false,
                            error:true,
                            modal:"1"
                        });


                    });
            }
            catch (e) {
                console.log(e)
            }
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
                    value={state.address}
                    onChange={e =>{
                        let value  = e.target.value.replace(/[^0-9a-zA-Z]/g,"").substring(0,24);
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
                >
                    {t('Entern_manually')}
                </Btn>
            </form>

            <ShowModal
                show={modal === "1"}
                onConfirm={()=> hanldeModal({status:""})}
                icon={modal.icon}
                title={modal.title}
                description={modal.description}
            />
        </Container>
    )
}
const MSTprops = state => ({ dashboard : state.Dashboard});
const MDTprops = {SeTDataDash};

export default connect(MSTprops,MDTprops)(withRouter(React.memo(Formulario)));
