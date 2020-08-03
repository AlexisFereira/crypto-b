import React from "react";
import styled from "@emotion/styled";
import Flex from "./../../UI/Flex";
import Btn from "./../../UI/Btn";
import { useTranslation } from 'react-i18next';
import Language_select from "./language_select";
import {withRouter} from "react-router-dom";


const Container = styled.header`
    position:relative;
    z-index:99999;
    .menu {
        text-transform:uppercase;
        color:white;
    }
`;

function Header(props) {
    const { t, i18n } = useTranslation();


    return (
        <Container className={"wc py-3 py-md-4"}>
            <Flex className={"col-12 col-xl-10 mx-auto px-0"} clasName={"wc"}>
                <Flex flex={"0 0 250px"} jc={"flex-start"}>
                    <img src="img/logo.png" alt=""/>
                </Flex>
                <Flex flex={"1 0 300px"}>
                    <Flex flex={"1 0 350px"} className="menu">
                        <a className={"cw px-2"} href="">{t('home')}</a>
                        <a className={"cw px-2"} href="">{t('how_this')}</a>
                        <a className={"cw px-2"} href="">{t('faqs')}</a>
                        <a className={"cw px-2"} href="">{t('etherum_fqas')}</a>
                    </Flex>
                    <Flex flex={"0 0 350px"}>
                        <Btn className={"ml-3"} type={"line"} gold flex={"0 0 150px"}>
                            {t('register')}
                        </Btn>
                        <Btn className={"ml-3"} flex={"0 0 150px"} onClick={()=>props.history.push('/login')}>
                            {t('login')}
                        </Btn>
                    </Flex>
                </Flex>
                <Flex flex={"0 0 45px"}>
                    <Language_select/>
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(withRouter(Header));
