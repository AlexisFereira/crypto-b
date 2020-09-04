import React, { useState} from "react";
import Btn from "./../UI/Btn";
import {useTranslation} from "react-i18next";
import Field from "./../UI/field";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {SeTDataDash} from "../store/actions/actionsCreators";
import {ContainerFom} from "./styles";
import getWeb3 from "../../getWeb3";
import Cryptobillions from "../../contracts/Cryptobillions";
import {VerificaId} from "../../crypto";
import ShowModal from "../UI/ShowModal/ShowModal";
import Fade from "./../UI/Fade";
import axios from "axios";

function RegisterForm(props) {
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

    let hanldeModal = x => SetM({...modal,...x});
    const handleState = x => SetS({...state,...x});

    // registrationEx
    // users
    // idToAddress
    // buyNewLevel

    // 0x3F38d06b136ae62815170C70D21896e9DbE7051B


    let onSubmit = async ()=>{
        SetS({...state,loading:true});
        if(state.address === ""){
            handleState({disabled:true,error:true});
            return ""
        }
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
            let options=  {
                nonce,
                gasPrice:web3.utils.toWei("50", "gwei"),
                gas:2000000,
                from: accounts[0],
                to:"0x39526b94b37380C38baE779546d5a99b47f1A858", // la direccion del contrato
                value: web3.utils.toWei("0.09", "ether"),
                data: web3.eth.abi.encodeFunctionSignature('whitdrawETH()')
            };

            // valida si es un id o un add
            if(state.address.length < 18 && instance){
                let existe = false;
               try{
                   let x = await instance.methods.idToAddress(state.address).call();
                   let referido = await instance.methods.users(x).call();
                   let userToRegister  = await instance.methods.users(accounts[0]).call();

                   if(userToRegister.id === "0"){
                       // consulta le id
                       await VerificaId(await referido.id)
                           .then(async result =>{
                               try {
                                   let r = await instance.methods.registrationExt(x).send(options);
                                   handleState({loading:false});
                                   props.SeTDataDash({userId:r.events.Registration.returnValues.userId});
                                   props.history.push("/dashboard/?user=" + r.events.Registration.returnValues.userId  )
                               }
                               catch (e) {
                                   handleState({loading:false,error:true});
                                   hanldeModal({
                                       status:true,
                                       title:t("transaction_reject"),
                                       description: "",
                                       icon:"cancel",
                                   })
                               }
                           })
                           .catch(()=>{
                               SetS({
                                   ...state,
                                   loadingAuth:false,
                               });
                               hanldeModal({
                                   status:true,
                                   title:t("address_not_found"),
                                   description: <span>La dirección de wallet <b>{accounts[0].substring(0,22) + "..."}</b> no se encuentra registrada.</span>,
                                   icon:"cancel",
                               })
                           })
                   }else{
                       handleState({loading:false,error:true});
                       hanldeModal({
                           status:true,
                           title:t("address_not_found"),
                           description: "",
                           icon:"cancel",
                       })
                   }
               }catch (e) {
                   handleState({loading:false,error:true});
                   hanldeModal({
                       status:true,
                       title:t("address_not_found"),
                       description: "",
                       icon:"cancel",
                   })
               }
            }
            // consulta si ya esta registrado
            // axios({
            //     url:"http://api-cryptobillions.herokuapp.com/api/v1/account/registrationExt",
            //     method:"post",
            //     contentType: "application/json",
            //     data:{
            //         wallet:accounts[0],
            //         referred:x
            //     }}).then(async result =>{
            //     if(result.status === 200){
            //         hanldeModal({
            //             status:true,
            //             title:t("address_not_found"),
            //             description: "",
            //             icon:"cancel",
            //         })
            //     }else{
            //         // consulta le id
            //
            //     }
            // }).catch(e=>{
            //     console.log(e)
            // })


            // consulta normal si es un address
            else{
                try{
                    let R = await instance.methods.registrationExt(state.address).send(options);
                    handleState({loading:false});
                    props.SeTDataDash({userId:R.events.Registration.returnValues.userId})
                    props.history.push("/dashboard")
                } catch (e) {
                    alert("la dirección de la billetera no existe.")
                    handleState({loading:false,error:true})
                }
            }

         // console.log(options)
        }catch (e) {
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
                           let value  = e.target.value.replace(/[^0-9a-zA-Z]/g,"").substring(0,24);
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
const MSTprops = state => ({ state : state.Dashboard});
const MDTprops = {SeTDataDash};

export default connect(MSTprops,MDTprops)(withRouter(React.memo(RegisterForm)));
