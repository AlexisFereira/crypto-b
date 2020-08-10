import React from "react";
import styled from "@emotion/styled";
import {useTranslation} from "react-i18next";
import ItemDesc from "./itemDescription";
import Flex from "./../../UI/Flex";
import i18next from "i18next";


const Container = styled.div`
    position:relative;
    padding:50px 5px;
    .line{
        height:100%;
        position:absolute;
        width:1px;
        top:6px;
        left:13px;
    }
`;

function Crowfunding() {
    const { t, i18n } = useTranslation();

    return (
        <Container className={"wc"}>
            <div className="col-12 col-xl-10 mx-auto px-xl-0">
                <div className={"header-title wc text-center mb-5"}>
                    {t('CROWDFUNDING')}
                </div>
                <Flex className={"wc position-relative"} alg={"flex-strech"}>
                    <div className="line line-gradien-v d-lg-none"> </div>
                    <div className={"col-12 col-lg-4 position-relative"}>
                        <div className="line line-gradien-v d-none d-lg-block"> </div>
                        <ItemDesc name={t('crow_a').title }  desc={t('crow_a').desc }/>
                        <ItemDesc name={t('crow_b').title }  desc={t('crow_b').desc }/>
                        <ItemDesc name={t('crow_c').title }  desc={t('crow_c').desc }/>
                    </div>
                    <div className={"col-12 col-lg-4 position-relative"}>
                        <div className="line line-gradien-v d-none d-lg-block"> </div>
                        <ItemDesc name={t('crow_d').title }  desc={t('crow_d').desc }/>
                        <ItemDesc name={t('crow_e').title }  desc={t('crow_e').desc }/>
                        <ItemDesc name={t('crow_f').title }  desc={t('crow_f').desc }/>
                    </div>
                    <div className={"col-12 col-lg-4 position-relative"}>
                        <div className="line line-gradien-v d-none d-lg-block"> </div>
                        <ItemDesc name={t('crow_g').title }  desc={t('crow_g').desc }/>
                        <ItemDesc name={t('crow_h').title }  desc={t('crow_h').desc }/>
                        <ItemDesc name={t('crow_i').title }  desc={
                            <div>
                                { t('crow_i').desc }
                            </div>
                        }/>
                    </div>
                </Flex>
            </div>
        </Container>
    )
}

export default React.memo(Crowfunding);
