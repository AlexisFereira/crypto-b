import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {colors} from "./index";
import Fade from 'react-reveal/Fade';



const Container = styled.div`
    position:relative;
    font-weight:bold;
    font-size:18px;
    color:rgba(255,255,255,.8);
    cursor:pointer;
    width:150px;
    padding: 15px 20px;
    position:absolute;
    top:100%;
    right:0;
    
    button{
        background:${colors.blue};
        color:rgba(255,255,255,.8);
        font-weight:bold;
        font-size:18px;
        color:rgba(255,255,255,.8);
        width:100%;       
        border-radius:6px;
       padding: 7px 10px;
       
        &:hover{
            color:${colors.blue};
            background:white;    
        }
    
    }
    
   
    
`;

function ButtonGost({action}) {

    let [show,set] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
                set(true);
        },5000)
    },[]);

    return (
        <>
            { show ?
            <Container>
              <Fade left>
                  <button onClick={action}>
                      SKIP >>
                  </button>
              </Fade>
            </Container>
                :
            <div></div>
        }
        </>
    )
}

export default React.memo(ButtonGost);
