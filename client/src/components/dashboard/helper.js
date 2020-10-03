import styled from "@emotion/styled";
import Flex from "../UI/Flex";
import React, {useEffect, useState} from "react";
import 'react-tippy/dist/tippy.css'
import {
    Tooltip,
} from 'react-tippy';
import Fade from 'react-reveal/Fade';


export const DegCard = styled.div`
    background: rgb(5,25,71);
    background: linear-gradient(90deg, rgba(5,25,71,1) 0%, rgba(9,49,98,1) 100%);
    border-radius:12px;
`;


export const CopyUrl = ({url=" ",name,id,message})=> {

    let [ready,setR] = useState(false);

    let [tool, setT] = useState(false);

    function Copy() {
        /* Get the text field */
        var copyText = document.getElementById(id);

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand("copy");

        setT(true);

        setTimeout(function () {
            setT(false)
        }, 6000)
    }

    useEffect(()=>{
        setR(true);
    },[])

    return (
        <Flex className="enlaces mb-3">
            {ready &&  <input type="text" defaultValue={url || ""} id={id}  style={{position:"absolute",opacity:"0",zIndex:0,width:"20px"}}/>}
            <Flex flex={"1 0 60%"} className="enlace pr-2" jc={"flex-start"} style={{overflow: "hidden"}}>
               <Fade bottom>
                   <small className={"cw wc"}> {name} </small>
               </Fade>
                <Fade right>
                    <small className={"cb"}>{url}</small>
                </Fade>
            </Flex>
            <Tooltip
                // options
                title={message}
                position="top"
                open={tool}
            >
                <button onClick={() => Copy()} className={{position:"relative"}}>
                    <img src="/img/dashboard/copiar.png" width={"25px"} height={"auto"} alt=""/>
                </button>
            </Tooltip>
        </Flex>
    )
};

