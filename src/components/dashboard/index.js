import React from "react";
import styled from "@emotion/styled";
import Datos from "./../landing/datos";
import Header from "./header";
import Flex from "./../UI/Flex";
import {DegCard} from "./helper";
import BigCard from "./bigCard";

const Container = styled.div`
    position:relative;
    
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
`;

function Dashboard() {
    return (
        <Container className={"wc bgDark"}>
            <Header/>
            <Datos noDescrtiption />
            <Flex alg={"flex-start"} className={"col-12 col-xl-10 mx-auto cw pt-4 "}>
                <aside className={"col-12 col-sm-10 col-lg-3 mx-auto pt-5"}>
                    <DegCard className={"p-3"}>

                    </DegCard>
                </aside>
                <div className="content col-12 col-sm-10 col-lg-9">
                    <BigCard version={"x3"}/>
                        <Flex jc={"flex-end"} className={"wc cw historia"}>
                            <div className={"pl-3"}>Usuario en matriz</div>
                            <div className={"pl-3"}>Número de ciclos</div>
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
                <Flex flex={"0 0 100px"}></Flex>
                <Flex flex={"1 0 50%"} >
                    <div className={"cw wc text-center"}><small><b>Cryptobillions smart-contract:</b></small></div>
                    <div className={"cb wc text-center"}><small><b>sijd3idncopdj1236543ddvc333csp33kmcs</b></small></div>
                </Flex>
                <Flex flex={"0 0 100px"}></Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(Dashboard);
