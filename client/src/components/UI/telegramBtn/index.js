import React from "react";
import styled from "@emotion/styled";


const Container = styled.div`
    position:fixed;
    bottom:20px;
    right:30px;
    width:40px;
    cursor:pointer;
    z-index:999;
    
    img{
        width:40px;
        height:40px;
    }
`;

function Telegram({className}) {
    return (
        <Container className={className}>
            <a href="https://t.me/cryptobillions2020" target={"_blank"}>
                <img src="/img/telegrama.png" alt=""/>
            </a>
        </Container>
    )
}

export default React.memo(Telegram);
