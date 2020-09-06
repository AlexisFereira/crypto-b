import getWeb3 from "./getWeb3";
import Cryptobillions from "./contracts/Cryptobillions";
import axios from "axios";
import {cryptoVar} from "./config";

export const Crypto = async ()=>{
    try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();

        await  console.log("03 :::")
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();


        // Get the contract instance.
        const networkId       = await web3.eth.net.getId();
        const deployedNetwork = Cryptobillions.networks[networkId];
        const instance        = new web3.eth.Contract( Cryptobillions.abi, deployedNetwork && deployedNetwork.address);
        const nonce           = await web3.eth.getTransactionCount(accounts[0]);
        return await ({
            instance,
            options:{
               nonce,
               gasPrice:web3.utils.toWei("50", "gwei"),
               gas:2000000,
               from: accounts[0],
               to:"0x399Ac9dfe115bC028F6dDeD5a1852433527C7E6B", // la direccion del contrato
               value: web3.utils.toWei("0.09", "ether"),
               data: web3.eth.abi.encodeFunctionSignature('whitdrawETH()')
            }
        });
    }
    catch (error) {
        return false;
    }
};

export const VerificaId = async (id)=>{
    await axios({
        method: 'get',
        url: `${cryptoVar.api}/api/v1/account/${id}`
    })
};

export const Datosgenerales = async () =>{
    console.log("consulté")
    return await axios({method: 'get', url: `${cryptoVar.api}/api/v1/contract/globalstats`,})
};
