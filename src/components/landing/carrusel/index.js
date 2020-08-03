import React from "react";
import styled from "@emotion/styled";

import Slider from "react-slick";
import CardDatos from "./cardDatos";
import {useTranslation} from "react-i18next";


const Container = styled.div`
    padding:50px 5px;
    position:relative;
    width:100%;
    
    .header-title{
        margin-bottom:50px;
    }

    
    .cont-slider{
        max-width:900px;
        margin:auto;
        
        .slick-list{
            padding: 30px 10px!important;
        }
    }
    
    .slick-current{
        transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
        opacity:1;
       
        .color{
            opacity:1;
            transform:scale(1.1);
        }
        
    }
`;

const settings = {
    centerMode: true,
    // variableWidth:true,
    centerPadding: '10px',
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows:false,
    dots:false
};

function Carrusel() {
    const { t, i18n } = useTranslation();
    return (
        <Container>
            <div className="header-title text-center">
                {t("PARTICIPANTS_RESULTS")}
            </div>
            <div className="cont-slider">
                <Slider {...settings}>
                    <CardDatos id={"10708"} eth={"342.625"} mx3={"458.84"} mx6={"458.85"} usd={"801.475"}/>
                    <CardDatos id={"10708"} eth={"342.625"} mx3={"458.84"} mx6={"458.85"} usd={"801.475"}/>
                    <CardDatos id={"10708"} eth={"342.625"} mx3={"458.84"} mx6={"458.85"} usd={"801.475"}/>
                    <CardDatos id={"10708"} eth={"342.625"} mx3={"458.84"} mx6={"458.85"} usd={"801.475"}/>
                    <CardDatos id={"10708"} eth={"342.625"} mx3={"458.84"} mx6={"458.85"} usd={"801.475"}/>
                </Slider>
            </div>
        </Container>
    )
}

export default React.memo(Carrusel);
