import styled from "@emotion/styled";
import {colors} from "../../UI";

export const Container = styled.div`
    position:relative;
    padding-bottom:40px;
    
    .line{
        height:1px;
        width:100%;
    }
    .desc{
        max-width:700px;
        margin:auto;
        padding-top:50px;
        font-size:14px;
        font-weight:400;
    }
    
    .cont-scroll{
    padding-top:10px;
    margin-top:-10px;
        overflow-x: auto ;
        
        .scroll{
            min-width:600px;
            flex-flow:row nowrap
        }
    }
    
    @media all and (max-width:600px){
        font-size: .8em;
    }
`;

export const CifraCont = styled.div`
    position:relative;
    flex:${props=> props.flex};
    text-transform:uppercase;
    padding-top:25px;
    
    
    .textos{
        width:auto;
        margin:auto;
        opacity:${props=> props.opacity}; 
        font-size:${props=> props.fontS};
    }
    
    .point{
        position:absolute;
        top:-5px;
        left:50%;
        transform:translateX(-50%);
        width:10px;
        height:10px;
        border-radius:50%;
        background:${colors.cian};
    }
    
     .pointB{
        background:white;
        position:absolute;
        top:-8px;
        left:50%;
        transform:translateX(-50%);
        width:16px;
        height:16px;
        border-radius:50%;
        background:transparent;
        border:1px solid ${colors.cian};
        
        .whiteP{
            width:8px;
            height:8px;
            border-radius:50%;
        }
    }
    
    .title{
        font-size:.6em;    
    }
    .amount{
        font-size:1.5em;
    }
`;
