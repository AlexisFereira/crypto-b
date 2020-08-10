import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from 'react-i18next';

const Container = styled.div`
    position:relative;
    padding:50px 15px 100px;
    width:100%;
    background-image:url(img/landing/bg01.png);
    background-repeat:no-repeat;
    background-size:140% auto;
    background-position: center 70%;
 
    
    .text{
        max-width:650px;
        margin:auto;
        text-align:center;
        margin-bottom:100px;
        p{
            font-size:15px
        }
    }
    
    .coin{
        max-width:600px;
        margin:auto;
    }
`;

function BigCoin() {
    const { t, i18n } = useTranslation();

    return (
        <Container className={"px-3 px-xl-0"}>
            <div className="text">
                <div className="header-title">
                    {t('the_best_smart')}
                </div>
                <p className={"cw"}>
                    {t('the_best_smart_desc')}
                </p>
            </div>
            <div className="coin">
                <img src="img/landing/moneda.png" alt="" className={"imgr"}/>
            </div>
        </Container>
    )
}

export default React.memo(BigCoin);
