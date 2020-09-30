import getWeb3 from "./getWeb3";
import Cryptobillions from "./contracts/Cryptobillions";
import axios from "axios";
import {cryptoVar} from "./config";

export const Crypto = async (options,parametros,metodo)=>{
    let response = {};


    try{
        var tronWeb = await window.tronWeb;
        let contract_address = "TPbxBDQTkWRRDjKYek2yRXbUvtHGJKj879" ;
        const issuerAddress = tronWeb.defaultAddress.base58;
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
            if(metodo === "getUserAddress"){
                let user = issuerAddress;
                response = user;
                return response;
            }

        }
        else {

            let funciones = {
                compra:{
                    name:"buyNewLevel(address,uint8,uint8)",
                    param :[{type:"address",value: issuerAddress },{type:"uint8",value: parametros[1]},{type:"uint8",value: parametros[2]}]
                },
                register:{
                    name:"registrationExt(address)",
                    param: [{type:"address",value: parametros[0]}]
                },
            };

            // LOS VALORES DE COMPRA
            const VALORES = {
                ...options,
                shouldPollResponse:true,
            };


            const parameters = funciones[metodo].param;
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
            response.usuario = issuerAddress
            return response;
        }
    }
    catch (e) {
        console.log("Ocurrió un error al realizar la compra.");
        response.status = false;
        response.message = e ;
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
        response.data = result.data;
    })
    .catch(e=>{
        response.status = false;
    });

    return response;
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

export const RegistroManual = async (wallet,referrer)=>{
    let response = {};
    await axios({
        method:"post",
        url: `${cryptoVar.api}/api/v1/account/registrationExt`,
        data:{ wallet, referrer}})
        .then(result =>{
            response.status = true;
            response.data = result
        })
        .catch(e =>{
            response.status = false;
            response.message = e;
            return response;
        });

    return response
};

export const CompraNivel = async (matrix,nivel)=>{

    let values = [600, 1200, 2400, 4800, 9600, 19200, 38400, 76800, 153600];

    let result = await Crypto({
        feeLimit: 1000000000,
        callValue: values[nivel] * 1000000,
    },[matrix,nivel],"buyNewLevel");

    return result;
};

export const getDataDash = async (url)=>{
    let obj ={};

    await axios({
        url,
        method:"get"
    })
        .then(response =>{
            if(response.status){

                let {id, users, minihash, link, wallet, referred, total_eth, m1_total_eth, m2_total_eth, m1_levels, m2_levels, m1, m2} =
                response.data;
                obj.status = true;
                obj.data = {id, users, minihash, link, wallet, referred, total_eth, m1_total_eth, m2_total_eth, m1_levels, m2_levels, m1, m2}

            }
            else{
                obj.status =false;
                obj.message ="No se pudo consultar la data";

            }
        })
        .catch(e=>{
            obj.status =false;
            obj.message ="No se pudo consultar la data";
            obj.error =e;

        })

    return obj;
};
