import React from "react";
import styled from "@emotion/styled";
import Header from "./header";
import BannerInicio from "./bannerInicio";
import BigCoin from "./bigCoin";
import Datos from "./datos";
import Carrusel from "./carrusel";
import Crowfunding from "./crowfunding";
import MarketingPlan from "./MarketingPlan";
import Faq from "./FAQ";
import Footer from "./footer";
import Menumovil from "./header/menuMovil";
import {Container} from "./styles";
import {connect} from "react-redux";
import {SeTDataLanding} from "../store/actions/actionsCreators";


function Landing(props) {


    return (
        <Container className={"bgDark"}>
            <Menumovil    />

            <div className={"wc "} name={"home"}/>

            <Header       />
            <BannerInicio />

            <div className={"wc "} name={"how"}/>

            <BigCoin  />
            <Datos    />
            <Carrusel />

            <div className={"wc "} name={"faq"}/>

            <Crowfunding   />
            <MarketingPlan />

            <div className={"wc "} name={"faq2"}/>

            <Faq    />
            <Footer />
        </Container>
    )
}

const MSTprops = state => ({landing: state.Landing});
const MDTprops = {SeTDataLanding};

export default connect(MSTprops,MDTprops)(React.memo(Landing));
