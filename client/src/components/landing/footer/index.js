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
            <a target={"_blank"} href="">
                <Icon
                    url={"img/landing/redes.png"}
                    nIcons={"4"}
                    w={"20"}
                    h={"20"}
                    number={"1"}
                />
            </a>
            <a target={"_blank"} href="">
                <Icon
                    url={"img/landing/redes.png"}
                    nIcons={"4"}
                    w={"20"}
                    h={"20"}
                    number={"2"}
                />
            </a>
            <a target={"_blank"} href="">
                <Icon
                    url={"img/landing/redes.png"}
                    nIcons={"4"}
                    w={"20"}
                    h={"20"}
                    number={"3"}
                />
            </a>
            <a target={"_blank"} href="">
                <Icon
                    url={"img/landing/redes.png"}
                    nIcons={"4"}
                    w={"20"}
                    h={"20"}
                    number={"4"}
                />
            </a>
        </Flex>
    )
};

function Footer() {
    const {t, i18n} = useTranslation();
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
