import getWeb3 from "./getWeb3";
import Cryptobillions from "./contracts/Cryptobillions";
import axios from "axios";
import {cryptoVar} from "./config";

export const Crypto = async (options,parametros,metodo)=>{
    let response = {};

    let funciones = {
        compra:{
            name:"buyNewLevel(uint8,uint8)",
            parameters :[{type:"uint8",value: parametros[0]},{type:"uint8",value: parametros[1]}]
        },
        register:{
            name:"registrationExt(address)",
            parameters: parametros[0]
        },
        idToAddress: {
            name:"idToAddress(uint8)",
            parameters: [{type:"uint8",value:parametros[0]}]
        }
    };

    try{
        var tronWeb = await window.tronWeb;

        // LOS VALORES DE COMPRA
        const VALORES = {
            ...options,
            shouldPollResponse:true,
        };


        let contract_address = "TQkwZ63jC9515utL2Xox2xUu7XP2SWP5hq" ;
        // const parameters = [{type:'address',value:'TT97NPy8GSL9db974fpzWdURyVjX6h7XyT'}];


        //METODOS DE CONSULTA SIN TRANSACCIÓN
        if(!options){
            if(metodo === "idToAddress"){
                let contract = await tronWeb.contract().at('TQkwZ63jC9515utL2Xox2xUu7XP2SWP5hq');
                let result = await contract.idToAddress(parametros[0]).call();
                response = result;
                return response;
            }

            if(metodo === "addressId"){
                let contract = await tronWeb.contract().at('TQkwZ63jC9515utL2Xox2xUu7XP2SWP5hq');
                let result = await contract.users(parametros[0]).call();
                response = result;
                return response;
            }
        }
        else{

            const parameters = funciones[metodo].parameters;
            const issuerAddress = tronWeb.defaultAddress.base58;
            const functionSelector = funciones[metodo].name;


            let transactionObject = await tronWeb.transactionBuilder.triggerSmartContract (
                contract_address,
                functionSelector,
                VALORES,
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
            response = broadcast;
            return response;
        }
    }
    catch (e) {
        console.log(e);
        response.status = false;
        response.message = "Exploto esta vaina.";
        return response;
    }
};

export const VerificaId = async (id)=>{

    let response = {};
    await axios({
        method: 'get',
        url: `${cryptoVar.api}/api/v1/account/${id}`
    })
    .then(result =>{
        response.status = true;
        response.data = result;
        return result;
    })
    .catch(e=>{
        response.status = false;
        return response;
    })

};

export const Datosgenerales = async () =>{
    let obj = {};
    await axios({method: 'get', url: `${cryptoVar.api}/api/v1/contract/globalstats`,})
        .then(result =>{
            obj = result;
            return obj;
        })
        .catch(e =>{
           obj.status =false;
           obj.message = e;
           return obj;
        })
};
