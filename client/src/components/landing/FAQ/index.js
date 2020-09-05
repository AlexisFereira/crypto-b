import React, {useState} from "react";
import styled from "@emotion/styled";
import ItemCollapse from "./itemnCollpase";
import {useTranslation} from "react-i18next";

const Container = styled.div`
    position:relative;
    max-width:900px;
    margin:auto;
    padding-bottom:100px;
`;

function Faq() {

    const [active,setActive]= useState('');

    let handleTab = (number)=>{
        if(number === active){
            setActive('')
        }else{
            setActive(number)
        }
    };

    const { t } = useTranslation();


    return (
        <Container className={"px-3"}>
            <div className="header-title mb-5">
                FAQ
            </div>
            <div>
                <ItemCollapse
                    text={ t('faq_q1')}
                    desc={ t("faq_a1")}
                    id={1}
                    handleTab={handleTab}
                    open={active === 1}
                />
                <ItemCollapse
                    text={ t('faq_q2')}
                    desc={t('faq_a2')}
                    id={2}
                    handleTab={handleTab}
                    open={active === 2}
                />
                <ItemCollapse
                    text={ t('faq_q3')}
                    desc={ t('faq_a3')}
                    id={3}
                    handleTab={handleTab}
                    open={active === 3}
                />
                <ItemCollapse
                    text={ t('faq_q4')}
                    desc={t('faq_a4')}
                    id={4}
                    handleTab={handleTab}
                    open={active === 4}
                />
                <ItemCollapse
                    text={ t('faq_q5')}
                    desc={t('faq_a5')}
                    id={5}
                    handleTab={handleTab}
                    open={active === 5}
                />
                <ItemCollapse
                    text={ t('faq_q6')}
                    desc={t('faq_a6')}
                    id={6}
                    handleTab={handleTab}
                    open={active === 6}
                />
                <ItemCollapse
                    text={ t('faq_q7')}
                    desc={t('faq_a7')}
                    id={7}
                    handleTab={handleTab}
                    open={active === 7}
                />
                <ItemCollapse
                    text={ t('faq_q8')}
                    desc={t('faq_a8')}
                    id={8}
                    handleTab={handleTab}
                    open={active === 8}
                />
                <ItemCollapse
                    text={ t('faq_q9')}
                    desc={t('faq_a9')}
                    id={9}
                    handleTab={handleTab}
                    open={active === 9}
                />
                <ItemCollapse
                    text={ t('faq_q10')}
                    desc={t('faq_a10')}
                    id={10}
                    handleTab={handleTab}
                    open={active === 10}
                />
                <ItemCollapse
                    text={ t('faq_q11')}
                    desc={t('faq_a11')}
                    id={11}
                    handleTab={handleTab}
                    open={active === 11}
                />
                <ItemCollapse
                    text={ t('faq_q12')}
                    desc={t('faq_a12')}
                    id={12}
                    handleTab={handleTab}
                    open={active === 12}
                />
                <ItemCollapse
                    text={ t('faq_q13')}
                    desc={t('faq_a13')}
                    id={13}
                    handleTab={handleTab}
                    open={active === 13}
                />
                <ItemCollapse
                    text={ t('faq_q14')}
                    desc={t('faq_a14')}
                    id={14}
                    handleTab={handleTab}
                    open={active === 14}
                />
                <ItemCollapse
                    text={ t('faq_q15')}
                    desc={t('faq_a15')}
                    id={15}
                    handleTab={handleTab}
                    open={active === 15}
                />

            </div>

        </Container>
    )
}

export default React.memo(Faq);
