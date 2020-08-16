import styled from "@emotion/styled";
import Flex from "../../UI/Flex";
import React from "react";
import {colors} from "../../UI";

export const Container = styled(Flex)`
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
    
    .lock,.cart{
       position:absolute;
       top:0;
       left:0;
       width:100%;
       height:100%;
       z-index:3;
       background:rgba(0,0,0,.6);
       border-radius:10px;
    }
    
    .cart{
        background:transparent;
        
        .shop{
            background:transparent;
            width:40px;
            height:40px;
            cursor:pointer;
            img{
                transform:scale(.8) rotate(0deg);
                opacity:.8;
                transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
            }
            
            &:hover{
                img{
                    opacity:1;
                    transform:scale(1) rotate(-5deg);
                }
            }
        }
    }
`;

const LinesS = styled(Flex)`
    span{
        border-bottom: 2px solid ${colors.cian};
        width:8px;
    }
    .a{transform:rotate(-25deg); transform-origin: top right;}
    .c{transform:rotate(25deg); transform-origin: top right;}
`;

export const Lines = ()=>{
    return(
        <LinesS flex={"0 0 15px"}>
            <span className={"a mb-3"}> </span>
            <span className={"b mb-3"}> </span>
            <span className={"c"}> </span>
        </LinesS>
    )
}
