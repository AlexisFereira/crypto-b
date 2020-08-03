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

const Container = styled.div`
    position:relative;
`;

function Landing() {
    return (
        <Container className={"bgDark"}>
            <Header/>
            <BannerInicio/>
            <BigCoin/>
            <Datos/>
            <Carrusel/>
            <Crowfunding/>
            <MarketingPlan/>
            <Faq/>
            <Footer/>
        </Container>
    )
}

export default React.memo(Landing);
