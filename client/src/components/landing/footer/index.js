import React from "react";
import styled from "@emotion/styled";
import Flex from "./../../UI/Flex";
import {useTranslation} from "react-i18next";
import {Icon} from "../bannerInicio/helpers";

const Container = styled.div`
    position:relative;
    
    .terminos{
        flex:1 0 400px;
        padding: 15px;
    }
    
    .redes{
        a{
            padding:5px;
            color:white;
        }
    }
    
    @media all and (max-width: 767px){
        .terminos{
            flex:1 0 100%;
        }
    }
`;

export const Redes = ()=>{
    return(
        <Flex flex={"0 0 150px"} className={"cw redes"}>
            <a target={"_blank"} href="https://www.instagram.com/invites/contact/?i=w0fnvoicorvp&utm_content=221nkz4" rel="noopener noreferrer" >
                <i className={" cw icon-instagram"}> </i>
            </a>
            <a target={"_blank"} href="https://www.facebook.com/Crypto-Billions-108685800961946" rel="noopener noreferrer" >
                <i className=" cw icon-facebook"> </i>
            </a>
            <a target={"_blank"} href="https://twitter.com/CryptoBillions3" rel="noopener noreferrer" >
                <i className=" cw icon-twitter"> </i>
            </a>
            <a target={"_blank"} href="https://www.youtube.com/channel/UCi4jHPjlgJQoofiq8VCNT7Q/about?edit_links=1&disable_polymer=1#c4-primary-header-contents" rel="noopener noreferrer" >
                <i className=" cw icon-youtube"> </i>
            </a>
        </Flex>
    )
};

function Footer() {
    const {t} = useTranslation();
    return (
        <Container className={"wc"}>
            <Flex className="col-12 mx-auto col-xl-10 py-4">
                <Flex flex={"0 0 180px"} className={"logo-f"}>
                    <img src="img/logo.png" alt=""/>
                </Flex>
                <Flex className={"terminos"}>
                    <small className={"mb-0 cw"}><b>{t('rights')}</b></small>
                </Flex>
                <Redes/>
            </Flex>
        </Container>
    )
}

export default React.memo(Footer);
