import React from "react";
import styled from "@emotion/styled";
import {DegCard}  from "./../helper";
import Modulo from "./../modulo";
import Flex  from "./../../UI/Flex";

const Container = styled.div`
    position:relative;
    
    .title{
        text-transform:uppercase;
        font-size:28px;
        font-weight:300;
        
        .str{
        font-weight:700;
        }
    }
`;

function BigCard({version}) {
    return (
        <Container className={"wc mb-4"}>
            <p className={"title"}>Bilions <span className={"str"}>{version}</span></p>
            <DegCard className={"wc px-2 pt-2 px-lg-3 pt-lg-3 pb-lg-2"}>
                <Flex jc={"flex-start"}>
                    <Modulo number={"1"}/>
                    <Modulo number={"2"}/>
                    <Modulo number={"3"}/>
                    <Modulo number={"4"}/>
                    <Modulo number={"5"}/>
                    <Modulo number={"6"}/>
                    <Modulo number={"7"}/>
                    <Modulo number={"8"}/>
                    <Modulo number={"9"}/>
                </Flex>
            </DegCard>
        </Container>
    )
}

export default React.memo(BigCard);
