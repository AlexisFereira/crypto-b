import React from "react";
import Flex from "./../UI/Flex";
import Formulario from "./formulario";
import LanguageSelect from "./../landing/header/language_select";
import {Redes} from "../landing/footer";
import {connect} from "react-redux";
import RegisterForm from "./Registerform"
import {Container} from "./styles";
import {withRouter} from "react-router-dom";
import Fade from "./../UI/Fade";


function Login(props) {
    return (
        <Container className={"wc "} alg={"stretch"}>
            <Flex className="lang">
                <LanguageSelect/>
            </Flex>
            <Flex direction={"column"} className="col-12 col-md-6 area-login">
                <Flex flex={"0 0 50px"} className={"wc d-none d-md-flex"}> </Flex>
                <Flex flex={"0 0 20px"} className={"wc d-md-none"}> </Flex>
                <Flex className="logo" flex={"0 0 50px"} onClick={()=>props.history.push("/")}>
                    <img src="img/logo.png" alt=""/>
                </Flex>
                <Flex className={"wc"} flex={"2 0 auto"}>
                    {props.register ?
                       <RegisterForm/>
                        :
                        <Formulario />
                    }
                </Flex>
                <Flex flex={"1 0 100px"} className={" gold-movil wc d-md-none"}>
                    <img src="img/gold-icon.png" alt="" className={"position-relative z900"}/>
                    <div className="telegramBtn ml-3"> </div>
                </Flex>
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

const MSTprops = state => ({state : state.dashboard});

export default connect(MSTprops,null)(withRouter(React.memo(Login)));
