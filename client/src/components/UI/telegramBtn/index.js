import React from "react";
import styled from "@emotion/styled";
import {colors} from "../index";

const Container = styled.div`
    position:fixed;
    bottom:20px;
    right:30px;
    width:40px;
    cursor:pointer;
    border-radius:50%;
    box-shadow:0 2px 5px ${colors.cian};
    z-index:999;
    transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000); 
    
    &:hover{
        box-shadow:0 5px 10px ${colors.cian};
    }
    
    img{
        width:40px;
        height:40px;
    }
    
    @media all and (min-width:768px){
      bottom:30px;
      right:40px;
    }
`;

function Telegram({className}) {
    return (
        <Container className={className}>
            <a href="https://t.me/cryptobillions2020" target={"_blank" } rel="noopener noreferrer" >
                <img src="/img/telegrama.png" alt=""/>
            </a>
        </Container>
    )
}

export default React.memo(Telegram);
