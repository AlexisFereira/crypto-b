import styled from "@emotion/styled";
import Flex from "../../UI/Flex";
import React from "react";
import {colors} from "../../UI";


export const ThreePoints = styled.div`
    width:32px;
    height:32px;
    position:relative;
    margin-bottom:2px;
    
    span{position:absolute;}
    
    .line01{ 
        width:7px;
        border-bottom:1px solid ${colors.cian};
        top:${props=> props.top};
        right:100%;
        transform:rotate(${props=> props.rotate});
    }
    
    .line02{ 
        width:7px;
        border-bottom:1px solid ${colors.cian};
        transform:rotate(-35deg);
        top:6px;
        right:13px;
    }
    
    .line03{ 
        width:7px;
        border-bottom:1px solid ${colors.cian};
        transform:rotate(35deg);
        bottom:6px;
        right:13px;
    }
    
    .point{
        height:12px;
        width:12px;
        border:1px solid white;
        border-radius:50%;
        position:absolute;
    }
    
    .p01{
        top:50%;
        left:0;
        transform:translateY(-50%);
        background:${props => props.bg1}
    }
    
    .p02{
        top:0;
        right:0;
        background:${props => props.bg2}
    }
    
    .p03{
        right:0;
        bottom:0;
        background:${props => props.bg3}
    }
`;


export const Container = styled(Flex)`
    position:relative;
    max-width:133px;
    flex:1 0 133px;
    
    .circle{
        width:12px;
        height:12px;
        border:1px solid white;
        border-radius:50%;
        margin:3px 0;
    }
    .circle.fll{
        background:white;
    }
    
    .lNumbers{
        font-size:13px;
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
    
    .loading{
        width:40px;
        height:40px;
        border-radius:50%;
        border:4px solid white;
        border-color: ${colors.blue} ${colors.blue} ${colors.blue}  white;
        animation: girar .5s ease-out infinite;   
        display:block;
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
