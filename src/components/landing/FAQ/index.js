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

    const { t, i18n } = useTranslation();


    return (
        <Container>
            <div className="header-title mb-5">
                FAQ
            </div>
            <div>
                <ItemCollapse
                    desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, similique!"}
                    id={1}
                    handleTab={handleTab}
                    open={active === 1}
                    text={ t('What_is_Criptobillions')}
                />
                <ItemCollapse
                    desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, similique!"}
                    id={2}
                    handleTab={handleTab}
                    open={active === 2}
                    text={ t('What_is_Criptobillions')}
                />
                <ItemCollapse
                    desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, similique!"}
                    id={3}
                    handleTab={handleTab}
                    open={active === 3}
                    text={ t('What_is_Criptobillions')}
                />

            </div>

        </Container>
    )
}

export default React.memo(Faq);
