import React from "react";
import styled from "@emotion/styled";
import {colors} from "../../UI";
import Fade from 'react-reveal/Fade';


const Container = styled.div`
    position:relative;
    text-align:left;
    margin-bottom:25px;
    padding-left:20px;
    font-size:14px;
    
    .point{
        width:10px;
        height:10px;
        border-radius:50%;
        position:absolute;
        left:-6px;
        top:6px;
        background-color:${colors.cian};
        
    }
    
    .title-name{
        font-weight:700;
        margin-bottom:10px;
        color:${colors.cian};
    }
    
    .desc{
        font-weight:300;
        color:white;
    }
`;

function ItemDesc({name,desc}) {
    return (
       <Fade bottom>
           <Container className={"wc"}>
               <div className="point bgc"> </div>
               <div className="title-name ">
                   {name}
               </div>
               <div className="desc">
                   {desc}
               </div>
           </Container>
       </Fade>
    )
}

export default React.memo(ItemDesc);
