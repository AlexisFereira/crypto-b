import React, { useState , useEffect} from "react";
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
import {cryptoVar} from "../../config";
import TronWeb from "tronweb";
import {abi} from "../../abi";

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
        }
        try{

            var tronWeb = window.tronWeb;

            const options = {
                feeLimit: 1000000000,
                callValue: 700000000,
                shouldPollResponse:true,
            };

            let contract_address = "4154d664c08e65a7e60e4ce3e0d40dcbcf53dfb00e";
            const parameters = [{type:'address',value:'TT97NPy8GSL9db974fpzWdURyVjX6h7XyT'}];
            const issuerAddress = tronWeb.defaultAddress.base58;
            const functionSelector = 'registrationExt(address)';


            let transactionObject = await tronWeb.transactionBuilder.triggerSmartContract (
                contract_address,
                functionSelector,
                options,
                parameters,
                tronWeb.address.toHex(issuerAddress)
            );

            if (!transactionObject.result || !transactionObject.result.result)
                return console.error('Unknown error: ', null, 2);

            // Signing the transaction
            const signedTransaction = await tronWeb.trx.sign(transactionObject.transaction);

            if (!signedTransaction.signature) {
                return console.error('Transaction was not signed properly');
            }

            // Broadcasting the transaction
            const broadcast = await tronWeb.trx.sendRawTransaction(signedTransaction);
            console.log(`broadcast:`,broadcast);

        }
        catch (e) {
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
const MSTprops = state => ({ state : state.Dashboard,landing:state.Landing});
const MDTprops = {SeTDataDash};

export default connect(MSTprops,MDTprops)(withRouter(React.memo(RegisterForm)));
