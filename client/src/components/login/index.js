import React from "react";
import Flex from "./../UI/Flex";
import Formulario from "./formulario";
import LanguageSelect from "./../landing/header/language_select";
import {Redes} from "../landing/footer";
import {connect} from "react-redux";
import RegisterForm from "./Registerform"
import {Container} from "./styles";
import {withRouter} from "react-router-dom";
import Telegram from "./../UI/telegramBtn"
import {useTranslation} from "react-i18next";


function Login(props) {
    const {t} = useTranslation();
    return (
        <Container className={"wc"} alg={"stretch"}>
            <Flex className="lang">
                <LanguageSelect/>
            </Flex>
            <Flex direction={"column"} className="col-12 col-md-6 area-login ">
                <Flex flex={"0 0 50px"} className={"wc d-none d-md-flex"}> </Flex>
                <Flex flex={"0 0 20px"} className={"wc d-md-none"}> </Flex>
                <Flex className="logo" flex={"0 0 50px"} onClick={()=>props.history.push("/")}>
                    <img src="img/logo.png" alt=""/>
                </Flex>
                <Flex className={"wc"} flex={"1 0 auto"} direction={"column"}>
                    {props.register ?
                       <RegisterForm/>
                        :
                        <Formulario />
                    }
                    <Flex className={"wc pt-3 cw"}>
                        <small className={"d-block"} style={{fontSize:"11px"}}>{t("compatible")}
                            <img src="/img/metamask.png" alt="" height={"30px"} width={"auto"} className={"mx-auto"}/>
                        </small>
                    </Flex>
                </Flex>
                <Flex flex={"0 0 80px"} className={" gold-movil wc d-md-none"}>
                    <img src="/img/gold-icon.png" alt="" className={"position-relative z900"}/>
                    <div className="telegramBtn ml-3 ">
                        <a href="https://t.me/cryptobillions2020" target={"_blank"}  rel="noopener noreferrer">
                        {t("telegram_chanel")}
                        </a>
                    </div>
                </Flex>
                <Flex className={"wc d-md-none"} flex={"0 0 30px"}>
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
            <Telegram className={"d-none d-md-block"}/>
        </Container>
    )
}

const MSTprops = state => ({state : state.dashboard});

export default connect(MSTprops,null)(withRouter(React.memo(Login)));
