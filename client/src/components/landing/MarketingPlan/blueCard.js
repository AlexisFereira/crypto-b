import React from "react";
import styled from "@emotion/styled";
import {colors} from "../../UI";


const Container = styled.div`
    position:relative;
    background:${colors.blue};
    color:white;
    border-radius:22px;
    padding:20px;
    min-height:300px;
    
    .title-name{
        font-size:32px;
        color:white;
        font-weight:300;
        text-transform:uppercase;
        .strong{
            font-weight:700;
        }
    }
  
`;

function BlueCard({version,children}) {
    return (
        <Container className={"hc wc"}>
            <div className="title-name">
               billions <span className={"strong"}>{version}</span>
            </div>
            {children}
        </Container>
    )
}

export default React.memo(BlueCard);
