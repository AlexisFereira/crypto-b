import styled from "@emotion/styled";
import {colors} from "../UI";

export const Container = styled.div`
    position:relative;
    min-height:100vh;
    background-image:
        url(/img/landing/textura_01.png),
        url(/img/landing/forma_01.png),
        url(/img/landing/textura_02.png);
     
     background-position:
        10% 105%,
        60% 70%,
        80% 5%;
           
     background-repeat:no-repeat;   
     background-size:
        30% auto,
        40% auto,
        15% auto;
     
    
    .historia{
        font-size:12px;
        font-weight:300;
    }
    
    .color-circle{
        width:15px;
        height:15px;
        border-radius:50%;
        background:white;
        border-radius:50%;
        display:inline-block;
        vertical-align:middle;
        margin-bottom:2px;
        margin-right:8px;
    }
    
    .color-circle.cian{background-color:${colors.cian}};
    .color-circle.purple{background-color:${colors.cPurple}};
    .color-circle.gold{background-color:${colors.cGold}};
    
    .datoBlue{
        background:${colors.cian};
        border-radius:6px;
        padding:.3em .75em;
        text-align:center;
    }
    
    .section,.enlaces{
        width:100%;
        max-width: 200px;
        margin:auto;
        .datoBlue{
            margin:1px auto 5px;
        }
    }
    .enlaces{
        small{
            display:block;
            white-space: nowrap;
            overflow: hidden;
            width:100%;
            text-overflow:ellipsis;
        }
        input{
        
        }
    
        button{
            background:transparent;
        }
    }
`;
