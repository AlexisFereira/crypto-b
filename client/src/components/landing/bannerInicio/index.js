import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from 'react-i18next';
import Flex  from "./../../UI/Flex";
import {IconText} from "./helpers"
import Btn from "./../../UI/Btn";

const Container = styled(Flex)`
    position:relative;
    width:100%;
    min-height:94vh;
    padding-bottom:50px;
    
    .title-main{
        font-size:70px;
        max-width:600px;
        font-size:300;
        line-height:1em;
        margin-bottom:.3em;
    }
    
    @media all and (max-width: 480px){
        .title-main{
            font-size:24px;
        }
        
        .des-t{
            font-size: 12px;
        }
    }
`;

function BannerInicio(props) {
    const { t, i18n } = useTranslation();
    return (
        <Container direction={"column"} className={"col-12 col-xl-10 mx-auto"}>
            <Flex flex={"1 0 100%"} direction={"column"}>
                <Flex className={"wc d-lg-none"} flex={"1 0 35vh"}> </Flex>
                <Flex className="text wc px-3 pb-4 pl-xl-0" direction={"column"} alg={"flex-start"} flex={"1 0 50%"}>
                    <h1 className={"cw title-main"}>
                        <b>{t('earn_money')}</b> <br/>
                        {t('as_you_can')}
                    </h1>
                    <b className={"cw des-t"}>{t('The_number_one')}</b>
                </Flex>
                <div className={"col-12 col-lg-10 mx-0 align-self-start px-0 s"}>
                    <div className="row align-items-center">
                        <IconText className={"col-6 col-md-3 p-2"} w={"35"} h={"55"} icon={"1"} title={t('Absence')} text={t('no_human')}/>
                        <IconText className={"col-6 col-md-3 p-2"} w={"35"} h={"85"} icon={"2"} title={t('Etherrum')} text={t('highest')}/>
                        <IconText className={"col-6 col-md-3 p-2"} w={"35"} h={"55"} icon={"3"} title={t('smartContract')} text={t('nothing_can')}/>
                        <IconText className={"col-6 col-md-3 p-2"} w={"35"} h={"55"} icon={"4"} title={t('Social_Mark')} text={t('Participants')}/>
                    </div>
                </div>
                <Flex className={"wc mt-3"} jc={"flex-start"} flex={"0 0 80px"}>
                    <div className="row col-12 col-md-8 col-lg-6 ">
                        <Btn flex={"1 0 120px"} mw={"150"} className={" mb-2 mr-2"}>{t('login')}</Btn>
                        <Btn flex={"1 0 120px"}  mw={"150"} className={"mr-sm-2 mb-2"} type={"line"} onClick={()=>props.register()}>{t('register')}</Btn>
                        <Flex flex={"0 0 180px"} className={"cc pl-sm-3 px-0 py-4 py-sm-0"}><small><b>{t('Wallets_Compatibles')}</b></small></Flex>
                    </div>
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(BannerInicio);
