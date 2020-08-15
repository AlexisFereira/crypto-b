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

const Container = styled.div`
    position:relative;
    
    background-image: 
        url(img/landing/line.png),  
        url(img/landing/textura_04.png), 
        url(img/landing/textura_02.png),
        url(img/landing/textura_01.png),
        url(img/landing/bg-desktop.png)
        ;
        
    background-position:
        left bottom,
        90% 90%,
        5% 3%,
        5% 60%,
        top right
     ;
    background-size:
     50% auto,
     20% auto,
     10% auto,
     30% auto,
     auto  100vh;
    background-repeat:no-repeat;
    
    
    @media all and (max-width:991px){
          background-image: 
            url(img/landing/line.png),  
            url(img/landing/textura_04.png), 
            url(img/landing/textura_02.png),
            url(img/landing/textura_01.png),
            url(img/landing/bg-movil.png)
            ;
        
    background-position:
        left bottom,
        90% 90%,
        5% 3%,
        5% 60%,
        top right
     ;
    background-size:
     50% auto,
     20% auto,
     10% auto,
     30% auto,
     100% auto
     ;
    background-repeat:no-repeat;
        
    }
`;

function Landing() {
    return (
        <Container className={"bgDark"}>
            <Menumovil/>

            <div className={"wc "} name={"home"}/>
            <Header/>
            <BannerInicio/>

            <div className={"wc "} name={"how"}/>

            <BigCoin/>
            <Datos/>
            <Carrusel/>

            <div className={"wc "} name={"faq"}/>

            <Crowfunding/>
            <MarketingPlan/>

            <div className={"wc "} name={"faq2"}/>
            <Faq/>
            <Footer/>
        </Container>
    )
}

export default React.memo(Landing);
