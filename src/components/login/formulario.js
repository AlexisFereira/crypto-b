import React from "react";
import styled from "@emotion/styled";
import Btn from "./../UI/Btn";
import {useTranslation} from "react-i18next";
import Field from "./../UI/field";

const Container = styled.div`
    position:relative;
    width:100%;
    max-width:350px;
    border-radius:8px;
    margin-top:50px;
    background: rgb(9,49,98);
    background: linear-gradient(183deg, rgba(9,49,98,0) 50%, rgba(9,49,98,1) 100%);
    
    
    .title{
        font-weight:300;
        font-size:40px;
        color:white;
     }
     
     @media all and (max-width:768px){
        margin-top:0;
     }
`;

function Formulario() {
    const { t, i18n } = useTranslation();
    return (
        <Container className={"p-2 p-lg-4 br-8 "}>
            <div className="title text-center mb-md-5">
                {t('login')}
            </div>

            <form className={"text-center p-3"}>
               <div className={"wc mb-5"}>
                   <small className={"cw mb-2 d-block"}><b>{t('Automatic_login')}</b></small>
                   <Btn mw={"250px"} className={"mx-auto"}  type={"line"} gold >{t('Login_automatically')}</Btn>
               </div>
                <Field placeholder={t('Enter_ETH')} className={"mb-3"} />
                <Btn mw={"250px"} className={"mx-auto"}>{t('Entern_manually')}</Btn>
            </form>
        </Container>
    )
}

export default React.memo(Formulario);
