import React,{useState,useEffect} from "react";
import styled from "@emotion/styled";
import {colors} from "../../styles/helpers";


const Carga = styled.div`
    width:100%;
    background:#cbcbcb;
    height:12px;
    border-radius:6px;
    
    .barra{
        width:${props => props.width};
        height:100%;
        border-radius:6px;
     } 
   
`;


const Tryagain = props =>  {

    const {segundos,action,modal} = props;

    if(segundos === 0){
        action(false);
        // modal(false);
    }
    return(

            <div className={"wc text-center pt-4"}>
                <p className={"fwb"} style={{color:colors.azul}}>Recarga en Proceso</p>
                <Carga width={`calc(100% - ${10*segundos}%)`}>
                    <div className="barra"/>
                </Carga>
            </div>
    );

};

export default Tryagain;
