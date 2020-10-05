import React, {useState} from "react";
import styled from "@emotion/styled";
import Collapse from "react-collapse";
import {useTranslation} from "react-i18next";
import Btn from "../../UI/Btn";
import {colors} from "../../UI";
import {withRouter} from "react-router-dom";
import {scroller} from "react-scroll";


const Container = styled.div`
    position:fixed;
    top:0;
    right:0;
    width:100%;
    z-index:9999999;
    
    
    .menu{
        margin:0 0 0 auto;
        width:100%;
        max-width:400px;
        background:${colors.bg};
        border-radius: 0 0 12px 12px;
        padding:3px;
        color:white;
        
        .link{
            width:100%;
            padding: 0.5em 0.75em;
            text-align:left;
            background:rgba(0,0,0,.5);
            text-transform:uppercase; 
            border-radius:6px;
            font-size:14px;
            color:white;
        }
        
    }
    
    .btnMenu{
        position:absolute;
        top:10px;
        right:10px;
        width:40px;
        height:40px;
        background:rgba(0,0,0,.2);
        z-index:1111;
        border-radius:4px;
    }
`;

export const scrollT = (element,offset= 0)=> {
    scroller.scrollTo(element, {
        duration: 1500,
        delay: 100,
        smooth: "easeInOutQuint",
        offset, // Scrolls to element + 50 pixels down the page,
        containerId:"scroll"
    })
};

function Menumovil(props) {

    const [open, SetoOpen] = useState(false);
    const {t} = useTranslation();

    return (
        <Container className={"d-lg-none px-sm-2"}>
            <button className={`btnMenu ${open && "d-none"}`} onClick={() => SetoOpen(!open)}>
                <img src="img/landing/menuMovil.png" alt="" />
            </button>


            <Collapse isOpened={open}>
                <div className="menu px-2 pt-4 pb-2">
                    <button
                        className={"link mb-1"}
                        onClick={()=> {
                            scrollT("home");
                            SetoOpen(!open)
                        }}>
                        {t('home')}
                    </button>
                    <button
                        className={"link mb-1"}
                        onClick={()=> {
                            scrollT("how");
                            SetoOpen(!open)
                        }}>
                    {t('how_this')}</button>
                    <button
                        className={"link mb-1"}
                        onClick={()=> {
                                scrollT("faq");
                                SetoOpen(!open)
                        }}>
                    {t('faqs')}
                    </button>
                    <div className={"wc separator py-2"}> </div>
                    <Btn className={"mb-1"} onClick={()=> props.history.push("/login")}>  {t('login')}</Btn>
                    <Btn className={"mb-2"} type={"line"} gold  onClick={()=> props.history.push("/register")}>  {t('register')} </Btn>
                    <div className={"cw p-2 text-center"} onClick={() => SetoOpen(!open)}>
                        {t('close')}
                    </div>
                </div>
            </Collapse>

        </Container>
    )
}

export default withRouter(React.memo(Menumovil));
