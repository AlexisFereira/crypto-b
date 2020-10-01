import React from "react";
import styled from "@emotion/styled";

import Slider from "react-slick";
import CardDatos from "./cardDatos";
import {useTranslation} from "react-i18next";
import {Icon} from "../bannerInicio/helpers";


const Container = styled.div`
    padding:50px 5px;
    position:relative;
    width:100%;
    
    .header-title{
        margin-bottom:50px;
    }
    
    .arrow{
        position:absolute;
        top:50%;
        left:-20px;
        transform:translateY(-50%);
        z-index:999;
        cursor:pointer;
    }
    
    .arrow-r{
        left:auto;
        right:-20px;
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

function SampleNextArrow(props) {
    const {style, onClick } = props;
    return (
        <div
            className={"arrow arrow-r"}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <Icon
                number={"3"}
                nIcons={"8"}
                w={"40"}
                h={"40"}
                url={"img//landing/icons_02.png"}
            />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className={"arrow arrow-l"}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        >
            <Icon
                number={"2"}
                nIcons={"8"}
                w={"40"}
                h={"40"}
                url={"img//landing/icons_02.png"}
            />
        </div>
    );
}


const settings = {
    centerMode: true,
    // variableWidth:true,
    centerPadding: '10px',
    infinite: true,
    slidesToShow: 3,
    speed: 800,
    autoplay:true,
    dots:false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 440,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }

    ]
};

function Carrusel() {
    const { t} = useTranslation();
    return (
        <Container className={"wc px-3"}>
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
