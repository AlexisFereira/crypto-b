import React from "react";
import styled from "@emotion/styled";
import Datos from "./../landing/datos";
import Header from "./header";
import Flex from "./../UI/Flex";
import {DegCard} from "./helper";
import BigCard from "./bigCard";
import {colors} from "../UI";
import {Redes} from "../landing/footer";

const Container = styled.div`
    position:relative;
    background-image:
        url(img/landing/textura_01.png),
        url(img/landing/forma_01.png),
        url(img/landing/textura_02.png);
     
     background-position:
        10% 105%,
        60% 70%,
        80% 5%;
           
     background-repeat:no-repeat;   
     background-size:
        30% auto,
        40% auto,
        15% auto;
     
    
    .historia{
        font-size:12px;
        font-weight:300;
    }
    
    .color-circle{
        width:15px;
        height:15px;
        border-radius:50%;
        background:white;
        border-radius:50%;
        display:inline-block;
        vertical-align:middle;
        margin-bottom:2px;
        margin-right:8px;
    }
    
    .datoBlue{
        background:${colors.cian};
        border-radius:6px;
        padding:.3em .75em;
        text-align:center;
    }
    
    .section,.enlaces{
        max-width: 200px;
        margin:auto;
        .datoBlue{
            margin:1px auto 5px;
        }
    }
    .enlaces{
        button{
            background:transparent;
        }
    }
`;

function Dashboard() {
    return (
        <Container className={"wc bgDark"}>
            <Header/>
            <Datos noDescrtiption />
            <Flex alg={"flex-start"} className={"col-12 col-xl-10 mx-auto cw pt-4 "}>
                <aside className={"col-12 col-sm-10 col-lg-3 mx-auto pt-5"}>
                    <DegCard className={"p-3 mb-lg-5"}>
                        <Flex alg={"flex-start"}>
                            <img src="img/dashboard/hexCian.png" alt="" width={"60px"} height={"auto"}/>
                            <Flex flex={"1 0 50%"} jc={"flex-end"} className="texto">
                                <div className={"wc text-right"}>
                                    <b>ID</b> <span>121523</span>
                                </div>
                                <small>
                                    123
                                    <img src="img/dashboard/user.png" alt="" width={"15px"} height={"auto"} className={"ml-2 align-middle"}/>
                                </small>
                            </Flex>
                        </Flex>
                        <div className="datoBlue my-3">
                            <b>12526254555</b> <span>ETH</span>
                        </div>
                        <div className={"datoNormal text-center"}>
                            <b>$253,622</b> USD
                        </div>
                    </DegCard>

                    <div className="section py-2 py-lg-3">
                        <small>BILLIONS <b>X3</b></small>
                        <div className="datoBlue"><b>{12536252}</b> ETH</div>
                    </div>

                    <div className="section py-2 py-lg-3 mb-lg-5">
                        <small>BILLIONS <b>X6</b></small>
                        <div className="datoBlue"><b>{125326252}</b>ETH</div>
                        <span>$209,905</span><b>USD</b>
                    </div>

                    <Flex className="enlaces mb-3">
                        <Flex flex={"1 0 60%"} className="enlace" jc={"flex-start"}>
                         <small className={"cw wc"}> Link de afiliado </small>
                         <small className={"cb"}> asdfasdfasdfasdfdf</small>
                        </Flex>
                        <button>
                            <img src="img/dashboard/copiar.png" width={"25px"} height={"auto"} alt=""/>
                        </button>
                    </Flex>

                    <Flex className="enlaces">
                        <Flex flex={"1 0 60%"} className="enlace" jc={"flex-start"}>
                           <small className={"cw wc"}> The etherum wallet </small>
                           <small className={"cb"}>dfgasdfa sdfasdf</small>
                        </Flex>
                        <button>
                            <img src="img/dashboard/copiar.png" width={"25px"} height={"auto"} alt=""/>
                        </button>
                    </Flex>

                </aside>
                <div className="content col-12 col-sm-10 col-lg-9">
                    <BigCard version={"x3"}/>
                        <Flex jc={"flex-end"} className={"wc cw historia"}>
                            <div className={"pl-3"}>Usuario en matriz <img src="img/dashboard/user.png" className={"align-middle ml-2"} width={"12px"} height={"auto"}  alt=""/></div>
                            <div className={"pl-3"}>Número de ciclos <img src="img/dashboard/ciclo.png" className={"align-middle ml-2"} width={"12px"} height={"auto"}  alt=""/></div>
                        </Flex>
                    <BigCard version={"x6"}/>
                    <Flex jc={"flex-end"} className={"wc cw historia"}>
                        <div className={"pl-3"}> <div className="color-circle"> </div> Usuario en matriz</div>
                        <div className={"pl-3"}> <div className="color-circle"> </div> Número de ciclos</div>
                        <div className={"pl-3"}> <div className="color-circle"> </div> Número de ciclos</div>
                        <div className={"pl-3"}> <div className="color-circle"> </div> Número de ciclos</div>
                    </Flex>
                </div>
            </Flex>
            <Flex className={"col-12 col-xl-10 mx-auto pb-3 pt-5"}>
                <Flex flex={"0 0 150px"}>
                    <Redes/>
                </Flex>
                <Flex flex={"1 0 50%"} >
                    <div className={"cw wc text-center"}><small><b>Cryptobillions smart-contract:</b></small></div>
                    <div className={"cb wc text-center"}><small><b>sijd3idncopdj1236543ddvc333csp33kmcs</b></small></div>
                </Flex>
                <Flex flex={"0 0 150px"}>
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(Dashboard);
