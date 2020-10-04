import React from "react";
import styled from "@emotion/styled";


const Container = styled.div`
    position:relative;
    width:100%;
    
    img{
        width:50px;
        height:auto;
        margin:auto;
    }
`;

function LoadingHex() {
    return (
        <Container>
            <div className="hexagonal text-center">
                <img src="/img/iso-logo.png" alt="" className={"hexa"}/>
            </div>
        </Container>
    )
}

export default React.memo(LoadingHex);
