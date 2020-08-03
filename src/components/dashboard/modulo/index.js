import React from "react";
import styled from "@emotion/styled";
import Flex from "./../../UI/Flex";
import {DegCard} from "../helper";

const Container = styled(Flex)`
    position:relative;
    max-width:130px;
    
    .circle{
        width:12px;
        height:12px;
        border:1px solid white;
        border-radius:50%;
        margin:3px 0;
    }
    .number{
        font-weight:700;
        font-size:18px;
    }
    
    .bcard{
        border-radius:10px;
    }
`;

function Modulo({number}) {
    return (
        <Container className={"px-2 mb-2 mb-lg-3"}>
            <Flex className={"number pr-2"} flex={"0 0 20px"}>
                {number}
            </Flex>
            <Flex flex={"1 0 80%"} className={"p-2 bcard bgb "}>
                <Flex flex={"0 0 35px"}>
                    <img src="img/icon-card.png" alt="" className={"imgr"}/>
                </Flex>
                <Flex flex={"0 0 15px"}>

                </Flex>
                <Flex flex={"0 0 20px"}>
                    <div className="circle"> </div>
                    <div className="circle"> </div>
                    <div className="circle"> </div>
                </Flex>
                <Flex className={"wc"}>
                    <small><b>11</b></small>
                </Flex>
            </Flex>

            <Flex className={"wc"}>
                <Flex flex={"0 0 20px"}> </Flex>
                <Flex flex={"1 0 50%"} className={"mt-2 px-2"}>
                    <DegCard className={"wc text-center"}>
                        <small>HOLA</small>
                    </DegCard>
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(Modulo);
