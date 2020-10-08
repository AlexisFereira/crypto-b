import React from "react";
import styled from "@emotion/styled";
import Flex from "./../../UI/Flex";
import Btn from "./../../UI/Btn";
import { useTranslation } from 'react-i18next';
import LanguageSelect from "./language_select";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {SeTDataDash} from "../../store/actions/actionsCreators";
import {Mylink} from "./../../UI/Btn";


const Container = styled.header`
    position:relative;
    z-index:99999;
    .menu {
        text-transform:uppercase;
        color:white;
    }
`;

function Header(props) {
    const { t } = useTranslation();
    return (
        <Container className={"wc py-3 py-md-4 mb-5 position-relative "}  style={{zIndex:"999999"}}>
            <Flex className={"col-12 col-xl-10 mx-auto px-0"} clasName={"wc"}>
                <Flex flex={"0 0 250px"} jc={"flex-start"} onClick={()=>props.history.push("/")}>
                    <img src="/img/logo.png" alt=""/>
                </Flex>
                <Flex flex={"1 0 50%"} className={"pr-3 justify-content-center justify-content-sm-end pt-3 pt-sm-0 "}>
                    <Flex flex={"1 0 320px"} jc={"flex-end"} className={"px-2"}>
                        <Mylink className={"p-2 cw "}  href="https://drive.google.com/drive/folders/1bWeWeOlEas4oQo1kUEK7WEbsZLhGHB1c?usp=sharing" target={"_blank"}>{t("dash_marketin_btn")}</Mylink>
                        <Btn className={"mx-2"} flex={"0 0 120px"} onClick={()=>{
                            props.SeTDataDash({onlyView:false,minihash:""});
                            props.history.push('/login')
                        }}>
                            {t('logout')}
                        </Btn>

                        <Flex flex={"0 0 45px"}  >
                            <LanguageSelect/>
                        </Flex>
                    </Flex>

                </Flex>
            </Flex>
        </Container>
    )
}

let MSTprops = state=> ({dashboard : state.Dashbaord});
let MDTprops = {SeTDataDash};

export default connect(MSTprops,MDTprops)(React.memo(withRouter(Header)));
