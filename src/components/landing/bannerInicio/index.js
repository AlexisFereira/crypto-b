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
`;

function BannerInicio() {
    const { t, i18n } = useTranslation();
    return (
        <Container direction={"column"} className={"col-12 col-xl-10 mx-auto"}>
            <Flex flex={"1 0 100%"} direction={"column"}>
                <Flex className="text wc" direction={"column"} alg={"flex-start"} flex={"1 0 50%"}>
                    <h1 className={"cw title-main"}>
                        <b>{t('earn_money')}</b> <br/>
                        {t('as_you_can')}
                    </h1>
                    <b className={"cw"}>{t('The_number_one')}</b>
                </Flex>
                <Flex jc={"flex-start"} className={" wc mb-4"} flex={"0 0 auto"}>
                    <IconText flex={"0 0 250px"} icon={"icon02.png"} title={t('Absence')} text={t('no_human')}/>
                    <IconText flex={"0 0 250px"} icon={"icon02.png"} title={t('Etherrum')} text={t('highest')}/>
                    <IconText flex={"0 0 250px"} icon={"icon02.png"} title={t('smartContract')} text={t('nothing_can')}/>
                    <IconText flex={"0 0 250px"} icon={"icon02.png"} title={t('Social_Mark')} text={t('Participants')}/>
                </Flex>
                <Flex className={"wc"} jc={"flex-start"} flex={"0 0 80px"}>
                    <Btn flex={"0 0 150px"} mw={"150"} className={"mr-2"}>{t('login')}</Btn>
                    <Btn flex={"0 0 150px"} type={"line"} mw={"150"} className={"mr-2"}>{t('register')}</Btn>
                    <Flex flex={"0 0 180px"} className={"cc pl-3"}><small><b>{t('Wallets_Compatibles')}</b></small></Flex>
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(BannerInicio);
