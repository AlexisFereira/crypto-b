import React, {useState} from "react";
import styled from "@emotion/styled";
import {UnmountClosed} from "react-collapse";
import Flex from "./../../UI/Flex";
import { useTranslation } from 'react-i18next';
import {BtnFlag} from "./helpers";


const Container = styled.div`
    position:relative;
    
    .changeF{
        cursor:pointer;
        width:45px;
        height:30px;
        border-radius:22px;
        background:rgba(0,0,0,.5);
        position:relative;
        
        .flag{
            flex:0 0 30px;
            img {
            flex:0 0 30px;
                width:100%:
                height:auto:
            }
        }
    }
    .menu-flags{
        position:absolute;
        top:50px;
        right:0;
        width:200px;
    }
`;

function Language_select() {

    const [menuL,setOpen] = useState({
        open:false
    });
    const {i18n } = useTranslation();


    const changeLanguage = (value) => {
        setOpen({...menuL,open:false});
        i18n.changeLanguage(value)
    };


    return (
        <Container>

            <Flex className="changeF " onClick={()=> setOpen({...menuL,open:!menuL.open})}>
                <div className="flag">
                    <img src={`/img/flags/${i18n.language}.png`} alt="" width={"20px"} height={"auto"}/>
                </div>
                <div className="caret">
                    <img src="/img/landing/caret-lang.png" alt=""/>
                </div>
                <div className="menu-flags bgDark br6" >
                   <UnmountClosed isOpened={menuL.open === true} className={"p-1"}>
                       <BtnFlag action={changeLanguage} flag={"en"} value={"en"} name={"english"}  activo={i18n.language} />
                       <BtnFlag action={changeLanguage} flag={"es"} value={"es"} name={"spanish"}  activo={i18n.language} />
                       <BtnFlag action={changeLanguage} flag={"rus"} value={"rus"} name={"russian"} activo={i18n.language} />
                       <BtnFlag action={changeLanguage} flag={"chi"} value={"chi"} name={"chines"}  activo={i18n.language} />
                   </UnmountClosed>
                </div>
            </Flex>
        </Container>
    )
}

export default React.memo(Language_select);
