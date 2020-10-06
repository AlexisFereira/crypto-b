import React from "react";
import Flex from "./../../UI/Flex";
import Btn from "./../../UI/Btn";
import { useTranslation } from 'react-i18next';
import LanguageSelect from "./language_select";
import {withRouter} from "react-router-dom";
import {scrollT} from "./menuMovil";
import {connect} from "react-redux";
import {Container} from "./styles";
import FadeSrprin from "../../UI/Fade/FadeSrprin";
import {Mylink} from "./../../UI/Btn";

function Header(props) {
    const { t } = useTranslation();


    return (
        <Container className={"wc py-3 pt-md-0 pb-md-4 px-3"}>
            <FadeSrprin>
                <Flex className={"col-12 col-xl-10 mx-auto px-0"} clasName={"wc ro"}>
                    <Flex jc={"flex-start"} className={" cont-logo"}>
                        <img src="img/logo.png" alt=""/>
                    </Flex>
                    <Flex className={"menu"} jc={"flex-start"}>
                        <Flex flex={"1 0 300px"} className="menu d-none d-lg-flex">
                            <button onClick={() => scrollT("home")} className={"link cw px-2"}>{t('home')}</button>
                            <button onClick={() => scrollT("faq")} className={"link cw px-2"}>{t('how_this')}</button>
                            <button onClick={() => scrollT("faq2")} className={"link cw px-2"}>{t('etherum_fqas')}</button>
                        </Flex>
                        <Flex className={"main-btns "} flex={"1 0 400px"}>
                            <Mylink className={"p-2 cw "}  href="https://drive.google.com/drive/folders/1bWeWeOlEas4oQo1kUEK7WEbsZLhGHB1c?usp=sharing" target={"_blank"}>{t("dash_marketin_btn")}</Mylink>
                            {props.canRegister &&
                            <div className={"col-4 px-0 px-2"}>
                                <Btn
                                    type={"line"} gold flex={"0 0 100%"}
                                    onClick={() => props.register()}
                                >
                                    {t('register')}
                                </Btn>
                            </div>
                            }
                            <div className={"col-4 px-0 pl-2"}>
                                <Btn
                                    flex={"0 0 100%"}
                                    onClick={() => props.history.push('/login')}>
                                    {t('login')}
                                </Btn>
                            </div>
                        </Flex>
                    </Flex>
                    <Flex flex={"0 0 55px"}>
                        <LanguageSelect/>
                    </Flex>
                </Flex>
            </FadeSrprin>
        </Container>
    )
}

const _MSPStp = state => ({state : state.Dashboard});

export default connect(_MSPStp,null)(React.memo(withRouter(Header)));
