import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from 'react-i18next';

const Container = styled.div`
    position:relative;
    padding:50px 15px;
    width:100%;
    
    .text{
        max-width:650px;
        margin:auto;
        text-align:center;
        margin-bottom:40px;
        p{
            font-size:15px
        }
    }
`;

function BigCoin() {
    const { t, i18n } = useTranslation();

    return (
        <Container>
            <div className="text">
                <div className="header-title mb-3">
                    {t('the_best_smart')}
                </div>
                <p className={"cw"}>
                    {t('the_best_smart_desc')}
                </p>
            </div>
            <img src="" alt=""/>
        </Container>
    )
}

export default React.memo(BigCoin);
