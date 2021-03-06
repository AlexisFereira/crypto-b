import React from "react";
import styled from "@emotion/styled";
import {colors} from "./../index";
import Flex from "../Flex";

export const Mylink = styled.a`
  display:block;
  flex:${props=>props.flex};
  border-radius: 6px;
  border:2px solid ${colors.blue};
  cursor:pointer;
  font-size:15px;
  padding:0 7px;
  
  &:hover{
    color:white;
    background:rgba(0,0,0,.3);
  }    
`;

const Btnt = styled.div`
    width:100%;
    flex: ${props=>  props.theme.flex};
    position:relative;
    height:${props=>  props.theme.height}px;
    max-width:${props=>  props.theme.mw};
    
    
    button{   
        background:       ${props=>  props.theme.bg};
        color:            ${props=>  props.theme.color};
        font-size:        ${props=>  props.theme.text}px;
        border:1px solid  ${props=>  props.theme.borde};
        width:100%;
        font-weight: 600;
        line-height:1em;
        min-height:40px;
        border-radius:    ${props=>  props.theme.bRadius};
        cursor:           ${props=>  props.theme.cursor};
        text-transform: uppercase;
        
        small{
        font-weight:300;
        width:100%;
        text-transform:initial;
        display:block;
        }
        
        &:hover{
            background:   ${props=>  props.theme.hoverColor};
        }
        
        @media all and (max-width: 380px){
            font-size:  13px;
        }
        
        &:disabled{
            cursor:           ${props=>  props.theme.cursor};
             
            &:hover{
             background:       ${props=>  props.theme.bg};
             color:            ${props=>  props.theme.color};
            }
        }
    }
    
    
    .load{
        width:100%;
        position:absolute;
        top:0;
        left:0;
        height:100%;
        z-index:2;
        
        .circle{
            width:  ${props=>  props.theme.height - 4}px;
            height: ${props=>  props.theme.height - 4}px;
            border-radius:50%;
            border: 2px solid transparent;
            border-color: rgba(0,0,0,.2) rgba(0,0,0,.2) rgba(0,0,0,.2) ${props=>  props.theme.loading}; 
            animation: girar .5s ease-out infinite;
        }
    }
`;





function Btn({type,text,children,btntype="submit", onClick,disabled,loading,bRadius = "6px",flex,className,mw,size="md",gold,caption}) {

    disabled = loading ? loading : disabled;

    let sizes = {
        height: {
            xs:20,
            sm:30,
            md:40,
            lg:55,
            xl:80,
        },
        text:{
            xs:12,
            sm:14,
            md:16,
            lg:20,
            xl:30,
        }
    };

    const theme = {
        borde: disabled && !loading ? colors.bg : (type === "line" ?  (gold ? colors.gold :colors.blue ) : type === "reset" ? "transparent" :  colors.blue ) ,
        bg:    disabled && !loading ? colors.bg : (type === "line" ?  "transparent" : type === "reset" ? "transparent" :  colors.blue ) ,
        cursor:  disabled && loading ?  "wait"  :  disabled && !loading ?  "not-allowed" : "pointer",
        bRadius: bRadius ? bRadius : "8px",
        color:   loading ? "rgba(0,0,0,0)": disabled ? colors.light  : "white",
        loading: (type === "line" ?  colors.gold : type === "reset" ? colors.verde03 :  "white") ,
        flex:flex,
        mw:mw,
        hoverColor :  type === "line" || type === "line" ? "rgba(0,0,0,.2)" : colors.blue,
        height     :  sizes.height[size],
        text       :  sizes.text[size],
    };


    return (
        <Btnt
           theme={theme}
           className={className}
        >
            <button
                onClick={onClick}
                disabled={disabled}
                type={btntype}
            >
                {children ? children:text}
                {caption && <small>{caption}</small>}
            </button>

            {loading &&
                <Flex className="load" direction={"column"}>
                    <div className="circle"> </div>

                </Flex>
            }
        </Btnt>
    )
};

export default Btn;
