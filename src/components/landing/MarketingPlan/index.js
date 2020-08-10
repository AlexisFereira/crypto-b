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
        max-width:900px;
        margin:auto;
    }

    
    .text-vertical{
        text-transform:uppercase;
        p {
        position:absolute;
        letter-spacing:8px;
        }  
        span{
            color:${colors.cian};
        }
    }
    
    @media all and (min-width:768px){
        .text-vertical{
            flex:0 0 60px;
            p{
                transform:rotate(-90deg)
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
                <Flex flex={"1 0 40%"} >
                    <BlueCard version={"X3"}>
                        <img src="" alt=""/>
                    </BlueCard>
                </Flex>
                <Flex className={"text-vertical"}>
                    <p className={"mb-0"}><span>crypto</span>billions</p>
                </Flex>
                <Flex flex={"1 0 40%"} >
                    <BlueCard version={"X6"}>
                        <img src="" alt=""/>
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
