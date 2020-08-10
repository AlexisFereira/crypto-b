import React from "react";
import styled from "@emotion/styled";
import BlueCard from "./blueCard";
import Flex from "./../../UI/Flex";
import Btn from "./../../UI/Btn";
import {useTranslation} from "react-i18next";
import {colors} from "../../UI";

const Container = styled.div`
    position:relative;
    width:100%;
    padding:100px 10px;
    
    .header-title{
        max-width:600px;
        margin:auto;
    }
    
    .cont-cards{
        max-width:650px;
        margin:auto;
        
        .cont-card{
            max-width:270px;
            margin-bottom:20px;
        }
    }

    
    .text-vertical{
        text-transform:uppercase;
        p {
        letter-spacing:8px;
        margin-bottom:20px;
        }  
        span{
            color:${colors.cian};
        }
    }
    
    @media all and (min-width:600px){
        .text-vertical{
            flex:0 0 60px;
            p{
                position:absolute;
                transform:rotate(-90deg);
                margin-bottom:0;
            }
        }
        
    }
`;

function MarketingPlan() {
    const { t, i18n } = useTranslation();

    return (
        <Container className={"wc text-center px-3"}>
            <div className="header-title mx-auto mb-5">
                {t('MARKETING_PLAN')}
            </div>
            <Flex className={"wc cont-cards mb-5"} alg={"stretch"}>
                <Flex flex={"1 0 40%"}  className={"cont-card"}>
                    <BlueCard version={"X3"}>
                        <img src="img/landing/img_01.png" alt="" className={"imgr"}/>
                    </BlueCard>
                </Flex>
                <Flex className={"text-vertical"}>
                    <p><span>crypto</span>billions</p>
                </Flex>
                <Flex flex={"1 0 40%"} className={"cont-card"} >
                    <BlueCard version={"X6"}>
                        <img src="img/landing/img_02.png" alt="" className={"imgr"}/>
                    </BlueCard>
                </Flex>
            </Flex>
            <div className="wc text-center">
                <p className={"cc mb-0"}>{t('All_data_is')}</p> <br/>
                <p> <b className={"mb-0 cw"}>{t('During_register')}</b></p>
            </div>
        </Container>
    )
}

export default React.memo(MarketingPlan);
