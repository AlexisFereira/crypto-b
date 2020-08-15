import React from "react";
import styled from "@emotion/styled";
import Flex from "./../UI/Flex";
import Formulario from "./formulario";
import Language_select from "./../landing/header/language_select";
import {colors} from "../UI";
import {Redes} from "../landing/footer";


const Container = styled(Flex)`
    position:relative;
    min-height:100%;
    .lang{
        position:fixed;
        height:80px;
        width:50px;
        right:20px;
        top:0;
        z-index:9999;
    }
    
    .sombra{
        opacity:.8;
    }
    
    .area-login{
        background-image: url(img/bottom-hex.png), url(img/hexa.png);
        background-repeat:no-repeat;
        background-position:bottom right,bottom left;
        background-size: 30% auto, 90% auto; 
        overflow:hidden auto;
        min-height:100vh;
    }
    
    .area-foto{
        background-image: url(img/login-bg.jpg);
        background-repeat:no-repeat;
        background-position:center;
        background-size: cover;
    }
    
    .gold-movil{
        img{
            width:50px; height:auto;
        }
        
        .telegramBtn{
            width:150px;
            height: 40px;
            border-radius:22px;
            background:${colors.blue};
        }
    }
    
    @media all and (max-width:768px){
        .area-login{
            background-image: url(img/login-bg-movil.png);
            background-repeat:no-repeat;
            background-position:bottom right,bottom left;
            background-size:100% auto; 
            justify-content:flex-start;
        }
    }
    
`;

function Login() {
    return (
        <Container className={"wc "} alg={"stretch"}>
            <Flex className="lang">
                <Language_select/>
            </Flex>
            <Flex direction={"column"} className="col-12 col-md-6 area-login">
                <Flex flex={"0 0 50px"} className={"wc d-none d-md-flex"}> </Flex>
                <Flex flex={"0 0 20px"} className={"wc d-md-none"}> </Flex>
                <Flex className="logo" flex={"0 0 50px"}>
                    <img src="img/logo.png" alt=""/>
                </Flex>
                <Flex className={"wc"} flex={"2 0 auto"}>
                    <Formulario/>
                </Flex>
                <Flex flex={"1 0 200px"} className={" gold-movil wc d-md-none"}>
                    <img src="img/gold-icon.png" alt="" className={"position-relative z900"}/>
                    <div className="telegramBtn ml-3"> </div>
      kk          </Flex>
                <Flex className={"wc d-md-none"} flex={"0 0 40px"}>
                    <Redes/>
                </Flex>
                <Flex className="pie wc pt-3 pb-3 pb-md-0" flex={"0 0 50px"}>
                    <Flex flex={"1 0 100px"} >
                        <div className={"wc text-center"}><small className={"d-block"}><b className={"wc cw"}>Cryptobillions smart-contract:</b></small></div>
                        <small className={"d-block"}><b className={"wc cb"}>sijd3idncopdj1236543ddvc333csp33kmcs</b></small>
                    </Flex>
                </Flex>
                <Flex flex={"0 0 40px"} className={" d-none d-md-flex"} jc={"flex-start"}>
                    <Redes/>
                </Flex>
            </Flex>
            <Flex direction={"column"} className="col-12 col-md-6 d-none d-md-flex area-foto">
                <div className="sombra bgDark pa"> </div>
                <img src="img/gold-icon.png" alt="" className={"position-relative z900"}/>
            </Flex>
        </Container>
    )
}

export default React.memo(Login);
