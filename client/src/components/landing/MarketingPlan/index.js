import React from "react";
import styled from "@emotion/styled";
import BlueCard from "./blueCard";
import Flex from "./../../UI/Flex";
import Btn from "./../../UI/Btn";
import {useTranslation} from "react-i18next";
import {colors} from "../../UI";
import {Icon} from "../bannerInicio/helpers";
import {withRouter} from "react-router-dom";
import Fade from 'react-reveal/Fade';


const Container = styled.div`
    position:relative;
    width:100%;
    padding:100px 10px;
    
    .header-title{
        max-width:600px;
        margin:auto;
    }
    
    .cont-cards{
        max-width:650px;
        margin:auto;
        
        .cont-card{
            max-width:270px;
            margin-bottom:20px;
        }
    }

    
    .text-vertical{
        text-transform:uppercase;
        p {
        letter-spacing:8px;
        margin-bottom:20px;
        color:white;
        }  
        span{
            color:${colors.cian};
        }
    }
    
    .dataoutline{
        padding: 20px;
    
        .data{
            max-width:250px;
            height: 40px;
            margin:auto;
            border-radius:10px;
            border:1px solid ${colors.gold};
            color:white;
            color:white;
            text-transform:uppercase;
            font-weight:300;
            line-height:40px;
            
            .bold{
                font-weight:700;
            }
        }
    }
    
    @media all and (min-width:600px){
        .text-vertical{
            flex:0 0 60px;
            p{
                position:absolute;
                transform:rotate(-90deg);
                margin-bottom:0;
            }
        }
        
    }
`;

function MarketingPlan(props) {
    const { t } = useTranslation();

    return (
        <Container className={"wc text-center px-3"}>
           <Fade top>
               <div className="header-title mx-auto mb-5">
                   {t('MARKETING_PLAN')}
               </div>
           </Fade>
            <Flex className={"wc cont-cards mb-5"} alg={"stretch"}>

                <Flex flex={"1 0 40%"}  className={"cont-card"}>
                  <Fade left>
                      <BlueCard version={"X3"}>
                          <img src="img/landing/img_01.png" alt="" className={"imgr"}/>
                          <Flex className={"mb-2"}>
                              <Flex flex={"0 0 40px"}>
                                  <Icon
                                      number={"6"}
                                      nIcons={"8"}
                                      w={"40"}
                                      h={"40"}
                                      url={"img/landing/icons_02.png"}
                                  />
                              </Flex>
                              <Flex flex={"1 0 60%"} jc={"flex-start"} className={"text-left"}>
                                  <small className={"d-block"} style={{fontSize:"7px"}}> {t('Automatic_downline')}</small>
                              </Flex>
                          </Flex>
                          <Flex className={""}>
                              <Icon
                                  number={"5"}
                                  nIcons={"8"}
                                  w={"40"}
                                  h={"40"}
                                  url={"img/landing/icons_02.png"}
                              />
                              <Flex flex={"1 0 60%"} jc={"flex-start"} className={"text-left"}>
                                  <small className={"d-block"} style={{fontSize:"7px"}}>{t('By_completing')}</small>
                              </Flex>
                          </Flex>
                      </BlueCard>
                  </Fade>
                </Flex>

                <Flex className={"text-vertical"}>
                    <p><span>crypto</span>billions</p>
                </Flex>

               <Flex flex={"1 0 40%"} className={"cont-card"} >
                  <Fade right>
                      <BlueCard version={"X6"}>
                          <img src="img/landing/img_02.png" alt="" className={"imgr"}/>
                          <Flex className={""}>
                              <Icon
                                  number={"7"}
                                  nIcons={"8"}
                                  w={"40"}
                                  h={"50"}
                                  url={"img/landing/icons_02.png"}
                              />
                              <Flex flex={"1 0 60%"} jc={"flex-start"} className={"text-left"}>
                                  <small className={"d-block"} style={{fontSize:"7px"}}>{t('Automatic_commissions')}</small>
                              </Flex>
                          </Flex>
                      </BlueCard>
                  </Fade>
               </Flex>

            </Flex>
            <div className="wc text-center">
                <Fade bottom>
                    <p className={"cc mb-2"}>{t('All_data_is')}</p>
                </Fade>
                <Fade bottom>
                    <p> <b className={"mb-0 cw"}>{t('During_register')}</b></p>
                </Fade>
                <Fade bottom>
                    <div className="dataoutline">
                        <div className="data">
                            {t('only')} <span className={"bold"}>1200 TRX</span>
                        </div>
                    </div>
                </Fade>
                {props.canRegister &&
                <Fade bottom>
                    <div className={"text-center"}>
                        <Btn className={"mx-auto"} mw={"220px"} onClick={()=> props.register()}> {t('register')} </Btn>
                    </div>
                </Fade>
                }
            </div>
        </Container>
    )
}

export default withRouter(React.memo(MarketingPlan));
