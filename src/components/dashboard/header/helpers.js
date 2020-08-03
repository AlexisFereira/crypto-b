import React from "react";
import styled from "@emotion/styled";
import Flex from "./../../UI/Flex";

const BtnFlasgS = styled.button`
    width:100%;
    background:rgba(0,0,0,.2);
    cursor:pointer;
    
    img{
        width:30px;
        height:auto;
        margin-right: 10px;
    }
    p {
        flex:1 0 60%;
        color:white;
        font-weight:500;
    }
 
    padding:5px;
    border-radius:6px;
    margin-bottom:1px;   
    
    &:hover{
     background:rgba(0,0,0,.4);
    }
`;

export const BtnFlag = ({flag,value,action,name,activo}) => {
    if(activo === value){
        return "";
    }
    return(
        <BtnFlasgS onClick={()=> action(value) }>
           <Flex className={"wc"}>
               <img src={`img/flags/${flag}.png`} alt=""/>
               <p className={"mb-0 text-left"}>{name}</p>
           </Flex>
        </BtnFlasgS>
    )
};
