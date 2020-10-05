import React, {useEffect, useState,useRef} from "react";
import styled from "@emotion/styled";
import { useTranslation } from 'react-i18next';
import Flex  from "./../../UI/Flex";
import {IconText} from "./helpers"
import Btn from "./../../UI/Btn";
import {withRouter} from "react-router-dom";
import { Scrambler, Cycler } from "react-text-scrambler";
import {useTransition, animated, config} from "react-spring";
import FadeSrprin from "../../UI/Fade/FadeSrprin";

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
    
    @media all and (max-width: 480px){
        .title-main{
            font-size:30px;
        }
        
        .des-t{
            font-size: 12px;
        }
    }
`;

function BannerInicio(props) {

    const {t} = useTranslation();

    let data = [{
        icon: "1",
        title: t('Absence'),
        text: t('no_human'),
    }, {
        icon: "2",
        title: t('Etherrum'),
        text: t('highest'),
    }, {
        icon: "3",
        title: t('smartContract'),
        text: t('nothing_can'),
    }, {
        icon: "4",
        title: t('Social_Mark'),
        text: t('Participants')
    }
    ];



    const transitions = useTransition( data, item => item.icon, {
        unique:true,
        config: config.stiff,
        trail: 1000 / data.length,
        from:  { opacity: 0,  transform: 'translateX(50px) scale(0.9)' },
        enter: { opacity: 1, transform: 'translateX(0) scale(1)' },
        leave: { opacity: 0, transform: 'translateX(50px) scale(0.9)' }
    });




    return (
        <Container direction={"column"} className={"col-12 col-xl-10 mx-auto"}>
            <Flex flex={"1 0 100%"} direction={"column"}>
                <Flex className={"wc d-lg-none"} flex={"1 0 5vh"}> </Flex>
                <Flex className="text wc pb-4 pl-xl-0" direction={"column"} alg={"flex-start"} flex={"1 0 50%"}>
                    <h1 className={"cw title-main"}>
                        <b><Scrambler characters={"010101010100011"}  renderIn={1500} text={ t('earn_money')}/></b> <br/>
                        <Scrambler characters={"010101010100011"}  renderIn={1500} text={ t('as_you_can')}/>
                    </h1>
                    <b className={"cw des-t"}>
                        <Scrambler typewriter characters={"010101010100011"}  renderIn={3000} text={t('The_number_one')}/>
                    </b>
                </Flex>
                <div className={"col-12 col-lg-10 mx-0 align-self-start px-0 s"}>
                    <div className="row align-items-center">
                        {
                            transitions.map(({ item, props, key }) =>
                                <animated.div className={"col-6 col-md-3 p-2"} key={key} style={props}>
                                    <IconText
                                        w={"35"}
                                        h={"55"}
                                        icon={item.icon}
                                        title={item.title}
                                        text={item.text}
                                    />
                                </animated.div>
                            )
                        }
                    </div>
                </div>
                <FadeSrprin direction={"0, 30px"}>
                    <Flex className={"wc mt-3"} jc={"flex-start"} flex={"0 0 80px"}>
                        <div className="row col-12 col-md-8 col-lg-6 ">
                            <Btn flex={"1 0 120px"} mw={"150px"} className={" mb-2 mr-2"} onClick={() => props.history.push("/login")}>{t('login')}</Btn>
                            {props.canRegister &&
                            <Btn flex={"1 0 120px"}  mw={"150"} className={"mr-sm-2 mb-2"} type={"line"} onClick={()=>props.register()}>{t('register')}</Btn>
                            }
                            <Flex flex={"0 0 180px"} className={"cc pl-sm-3 px-0 py-4 py-sm-0"}><small><b><a href="https://www.tronlink.org/" target={"_blank"}>{t('Wallets_Compatibles')}
                                <i className="icon-angle-double-right"> </i></a></b></small></Flex>
                        </div>
                    </Flex>
                </FadeSrprin>
            </Flex>
        </Container>
    )
}

export default withRouter( React.memo(BannerInicio));
