import React, {useState} from "react";
import Flex from "./../../UI/Flex";
import {DegCard} from "../helper";
import {Container,Lines} from "./styles";
import getWeb3 from "../../../getWeb3";
import Cryptobillions from "../../../contracts/Cryptobillions";

function Modulo({number,gold,lock,canbuy,data}) {

    let [state,setState] = useState({
        loading:false
    });

    let handler = x => setState({...state,...x});

    let level = gold ? 2 : 1;

    let buyLevel = async () =>{

        handler({loading:true});


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

        try{
            let compra = await instance.methods.buyNewLevel(level,number).send(options);
        }
        catch (e) {
            console.log(e,":::: no se hizo la compra ::::")
        }
    };

    return (
        <Container className={"px-1 mb-2 mb-lg-3 "}>
            <Flex className={"number pr-2"} flex={"0 0 20px"}>
                {number}
            </Flex>
            <Flex flex={"1 0 80%"} className={"p-2 bcard bgb "}>
                <Flex flex={"0 0 35px"}>
                    <img src={`/img/dashboard/${gold ? "hexGold":"hexCian"}.png`} alt="" className={"imgr"}/>
                </Flex>
                <Lines/>
                <Flex flex={"0 0 20px"}>
                    <div className={`circle ${data.circles >= 1 && "fll"}`}> </div>
                    <div className={`circle ${data.circles >= 2 && "fll"}`}> </div>
                    <div className={`circle ${data.circles === 3 && "fll"}`}> </div>
                </Flex>
                <Flex className={"wc lNumbers pt-2"}>
                    <small className={"d-inline-block mx-1"}><b>{data.users}</b> <img src="/img/dashboard/user.png" width={"12px"} height={"auto"} className={"align-middle"} alt=""/></small>
                    <small className={"d-inline-block mx-1"}><b>{data.ciclos}</b> <img src="/img/dashboard/ciclo.png" width={"12px"} height={"auto"} className={"align-middle"} alt=""/></small>
                </Flex>
                    {lock &&
                    <div className="lock">
                        <Flex className={"cart"} direction={"column"}>
                            {canbuy &&
                            <button className="shop" onClick={()=> buyLevel()}>
                                {state.loading ? <span className="loading"> </span> :
                                    <img src="/img/dashboard/cart.png" alt="" className={"imgr"}/>
                                }
                            </button>}
                        </Flex>
                    </div>}
            </Flex>

            <Flex className={"wc"}>
                <Flex flex={"0 0 20px"}> </Flex>
                <Flex flex={"1 0 50%"} className={"mt-2 px-2"}>
                    <DegCard className={"wc text-center"}>
                        <small><b>0.09</b> ETH</small>
                    </DegCard>
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(Modulo);
