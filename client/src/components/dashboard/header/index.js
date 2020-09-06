import React from "react";
import styled from "@emotion/styled";
import Flex from "./../../UI/Flex";
import Btn from "./../../UI/Btn";
import { useTranslation } from 'react-i18next';
import LanguageSelect from "./language_select";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {SeTDataDash} from "../../store/actions/actionsCreators";
// import {Link} from "react-router-dom";



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
        <Container className={"wc py-3 py-md-4 mb-5"}>
            <Flex className={"col-12 col-xl-10 mx-auto px-0"} clasName={"wc"}>
                <Flex flex={"0 0 250px"} jc={"flex-start"} onClick={()=>props.history.push("/")}>
                    <img src="/img/logo.png" alt=""/>
                </Flex>
                <Flex flex={"1 0 50%"} jc={"flex-end"} className={"pr-3"}>
                    <Flex flex={"0 0 auto"} jc={"flex-end"}>
                        {/*<Link className={"p-2 cw "} to="/dashboard">{t("presentation")}</Link>*/}
                        {/*<Link className={"p-2 cw "} to="/dashboard">{t("support")}</Link>*/}
                        <Btn className={"ml-3"} flex={"0 0 150px"} onClick={()=>{
                            props.SeTDataDash({onlyView:false,minihash:""});
                            props.history.push('/login')
                        }}>
                            {t('logout')}
                        </Btn>
                    </Flex>
                </Flex>
                <Flex flex={"0 0 45px"}>
                    <LanguageSelect/>
                </Flex>
            </Flex>
        </Container>
    )
}

let MSTprops = state=> ({dashboard : state.Dashbaord});
let MDTprops = {SeTDataDash};

export default connect(MSTprops,MDTprops)(React.memo(withRouter(Header)));
