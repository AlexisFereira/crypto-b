import React from "react";
import styled from "@emotion/styled";
import Flex from "./../../UI/Flex";
import Btn from "./../../UI/Btn";
import { useTranslation } from 'react-i18next';
import Language_select from "./language_select";
import {withRouter} from "react-router-dom";


const Container = styled.header`
    position:relative;
    z-index:99999;
    .menu {
        text-transform:uppercase;
        color:white;
    }
    
    .main-btns{
        flex:1 0 250px;
    }
    
    .cont-logo{
       flex : 0 0 200px;
    }
    
    .menu{
        flex: 1 0 50%;
    }
    
    @media all and (max-width:991px){
        .cont-logo{
           flex : 1 0 100%;
            margin-bottom:20px;
           
           img{
            margin:auto;
           }
        } 
        
         .menu{
            flex:1 0 60%;
            max-width:350px;
        }   
    }
`;

function Header(props) {
    const { t, i18n } = useTranslation();


    return (
        <Container className={"wc py-3 py-md-4 px-3"}>
            <Flex className={"col-12 col-xl-10 mx-auto px-0"} clasName={"wc"}>

                <Flex jc={"flex-start"} className={" cont-logo"}>
                    <img src="img/logo.png" alt=""/>
                </Flex>
                <Flex className={"menu"} jc={"flex-start"}>
                    <Flex flex={"1 0 350px"} className="menu d-none d-lg-flex">
                        <a className={"cw px-2"} href="">{t('home')}</a>
                        <a className={"cw px-2"} href="">{t('how_this')}</a>
                        <a className={"cw px-2"} href="">{t('faqs')}</a>
                        <a className={"cw px-2"} href="">{t('etherum_fqas')}</a>
                    </Flex>
                    <Flex className={"main-btns pr-3 "}>
                        <div className={"col-6 px-0 pr-2"}>
                            <Btn type={"line"} gold flex={"0 0 100%"}>
                                {t('register')}
                            </Btn>
                        </div>
                        <div className={"col-6 px-0 pl-2"}>
                            <Btn
                                flex={"0 0 100%"}
                                 onClick={()=>props.history.push('/login')}>
                                {t('login')}
                            </Btn>
                        </div>
                    </Flex>
                </Flex>
                <Flex flex={"0 0 55px"}>
                    <Language_select/>
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(withRouter(Header));
