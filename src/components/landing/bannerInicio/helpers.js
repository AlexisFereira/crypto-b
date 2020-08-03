import React from "react";
import styled from "@emotion/styled";
import Flex from "./../../UI/Flex"

const Container = styled.div`
    position:relative;
    flex:${props=> props.flex};
    
    .texto{
        font-size:14px;
    }
`;

export function IconText({clasName, flex, icon, title, text}) {
    return (
        <Container flex={flex} >
            <Flex className={"wc"} jc={"flex-start"}>
                <Flex flex={"0 0 35px"}>
                    <img src={`img/${icon}`} alt="" className={"wc"} />
                </Flex>
                <Flex className={"pl-3 cw texto"} flex={"1 0 60%"} jc={"flex-start"}>
                    <b>{title}</b>
                    <p className={"mb-0"}>{text}</p>
                </Flex>
            </Flex>
        </Container>
    )
}

