import React, {useEffect, useState} from "react";
import Datos from "./../landing/datos";
import Header from "./header";
import Flex from "./../UI/Flex";
import {DegCard,CopyUrl} from "./helper";
import BigCard from "./bigCard";
import {Redes} from "../landing/footer";
import {SeTDataDash,SeTDataLanding} from "../store/actions/actionsCreators";
import {connect} from "react-redux";
import {Container} from "./styles";
import {formatNumber} from "./../landing/datos";
import {Datosgenerales,getDataDash} from "../../crypto";
import {withRouter} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Telegram from "./../UI/telegramBtn";
import {cryptoVar} from "../../config";
import Fade from 'react-reveal/Fade';
import moment from "moment";

function Dashboard(props) {

    const [state,setstate ] =useState({
        loading:true,
        canRefer: true
    });

    let handler = x=> setstate({...state,...x});
    const { t } = useTranslation();

    let logueado = sessionStorage.getItem("logueado");
    let onlyview = JSON.parse(sessionStorage.getItem("onlyview"));

    if(onlyview){
        logueado = onlyview.wallet;
    }else if(!logueado){
        props.history.push('/login');
    }

    let addressRequeest = `${cryptoVar.api}/api/v1/accountw/${logueado}`;


    let getData = async ()=>{
        handler({loading:true});
        try {
            let DGlobales = await Datosgenerales();
            if(DGlobales.status){
                let {
                    total_users,
                    total_users_24h,
                    total_users_coin,
                    total_users_usd,
                    coin_value
                } = DGlobales.data.data;

                props.SeTDataLanding({
                    participants       : total_users,
                    newEth             : total_users_24h,
                    incomeUsd          : total_users_usd,
                    TotalParticipants  : total_users_coin,
                    ether_value        : coin_value
                })
            }

            let Data = await getDataDash(addressRequeest);
            if(Data.status){

                let {id, users, minihash, wallet, referrer_b58, total_coin, m1_total_coin, m2_total_coin, m1_levels, m2_levels, m1, m2,user_b58
                } = Data.data;

                props.SeTDataDash({
                    userId: id,
                    users,
                    minihash,
                    link:`https://cryptobillions.io/register/?minihash=${minihash}`,
                    wallet:user_b58,
                    referred:referrer_b58,
                    total_eth:total_coin,
                    m1_total_eth:m1_total_coin,
                    m2_total_eth:m2_total_coin,
                    m1_levels,
                    m2_levels,
                    m1,
                    m2,
                });

                handler({loading:false});
            }
            else{
                handler({loading:false});
            }
        }
       catch (e) {
           handler({loading:false});
       }
    };


    useEffect(()=>{
        getData();
    },[]);

    return (
        <Container className={"wc bgDark"}>
           <div className={"col-12 position-relative "}  style={{zIndex:"999999"}} >
              <Fade>
                  <Header/>
              </Fade>
           </div>
            {state.loading ?
                <div className={"wc cw text-center"}>
                    <img src="img/iso-logo.png" alt="" width={"50px"} height={"auto"} className={"mb-3"}/>
                    <p>{t("processing")}</p>
                </div>
            :
                <React.Fragment>
                    <Datos noDescrtiption onLoad={true} when={!state.loading} />
                    <Flex alg={"flex-start"} className={"col-12 col-xl-10 mx-auto cw pt-4 pt-lg-0  px-lg-0"}>
                        <aside className={"col-12 col-sm-10 col-lg-3 mx-auto pt-md-5 mt-md-2 pb-5 px-0 "}>
                            <Fade bottom>
                                <DegCard className={"p-3 mb-lg-5 col-xl-9 mx-auto" }>
                                    <Flex alg={"flex-start"} className={"pt-4"}>
                                        <img src="/img/dashboard/hexCian.png" alt="" width={"60px"} height={"auto"}/>
                                        <Flex flex={"1 0 50%"} jc={"flex-end"} className="texto">
                                            <div className={"wc text-right"}>
                                                <b>ID</b> <span>{ props.dashboard.userId }</span>
                                            </div>
                                            <small>
                                                {props.dashboard.users}
                                                <img src="/img/dashboard/user.png" alt="" width={"15px"} height={"auto"} className={"ml-2 align-middle"}/>
                                            </small>
                                        </Flex>
                                    </Flex>
                                    <div className="datoBlue my-3">
                                        <b>{formatNumber(props.dashboard.total_eth,true).toString()}</b> <span>TRON</span>
                                    </div>
                                    <div className={"datoNormal text-center"}>
                                        <b>${formatNumber(props.dashboard.total_eth * props.landing.ether_value,true)}</b> USD
                                    </div>
                                </DegCard>
                            </Fade>
                            <Flex className={"wc pt-3"} alg={"flex-start"}>
                                <Flex className={"col-12 col-sm-6 col-lg-12 px-0"}>
                                    <Fade bottom>
                                        <div className="section py-2 py-lg-3">
                                            <p className={"mb-0"}>BILLIONS <b>X3</b></p>
                                            <div className="datoBlue"><b>{props.dashboard.m1_total_eth}</b> TRON</div>
                                            <span className={"text-center mr-1"}>${formatNumber(props.dashboard.m1_total_eth * props.landing.ether_value,true)}</span><b>USD</b>
                                        </div>
                                    </Fade>
                                   <Fade bottom>
                                       <div className="section py-2 py-lg-3 mb-lg-5">
                                           <p className={"mb-0"}>BILLIONS <b> <span className={"cg"}>X6</span></b></p>
                                           <div className="datoBlue"><b>{props.dashboard.m2_total_eth}</b>TRON</div>
                                           <span className={"text-center mr-1"}>${formatNumber(props.dashboard.m2_total_eth * props.landing.ether_value,true)}</span><b>USD</b>
                                       </div>
                                   </Fade>
                                </Flex>
                                <Flex className={"col-12 col-sm-6 col-lg-12"}>
                                        {moment().isAfter('2020-10-07') &&
                                        <CopyUrl id={"02"} name={"Link de afiliado"} url={props.dashboard.link} message={t("linkcopied")}/>
                                        }
                                        <CopyUrl id={"01"} name={"The TRON wallet"} url={props.dashboard.wallet} message={t("walletCopied")}/>
                                    </Flex>
                            </Flex>
                        </aside>
                        <div className="content col-12 col-sm-10 col-lg-9 px-0 pl-md-4 ">
                            <BigCard
                                version={"x3"}
                                activos={props.dashboard.m1_levels}
                                data={props.dashboard.m1}
                                onlyView={onlyview}
                                accountLogged={props.dashboard.wallletLoged }
                                getData={()=>getData()}
                            />
                            <Flex jc={"flex-end"} className={"wc cw historia"}>
                                <Fade left>
                                    <div className={"pl-3"}>Usuario en matriz <img src="/img/dashboard/user.png" className={"align-middle ml-2"} width={"12px"} height={"auto"}  alt=""/></div>
                                </Fade>
                                <Fade left>
                                    <div className={"pl-3"}>Número de ciclos <img src="/img/dashboard/ciclo.png" className={"align-middle ml-2"} width={"12px"} height={"auto"}  alt=""/></div>
                                </Fade>
                            </Flex>
                            <BigCard
                                version={"x6"}
                                activos={props.dashboard.m2_levels}
                                data={props.dashboard.m2}
                                onlyView={onlyview}
                                accountLogged={props.dashboard.wallletLoged }
                                getData={()=>getData()}
                                m2
                            />
                            <Flex jc={"flex-end"} className={"wc cw historia"}>
                                <div className={"pl-3"}> <div className="color-circle "> </div> {t("dash_white_circle")}</div>
                                <div className={"pl-3"}> <div className="color-circle purple"> </div> {t("dash_purple_circle")}</div>
                                <div className={"pl-3"}> <div className="color-circle cian"> </div> {t("dash_cian_circle")}</div>
                                <div className={"pl-3"}> <div className="color-circle gold"> </div> {t("dash_gold_circle")}</div>
                            </Flex>
                        </div>
                    </Flex>
                    <Flex className={"col-12 col-xl-10 mx-auto pb-3 pt-5 fadeIn "}>
                        <Flex flex={"0 0 150px"}>
                            <Redes/>
                        </Flex>
                        <Flex flex={"1 0 50%"} >
                            <Fade bottom><div className={"cw wc text-center"}><small><b>Cryptobillions smart-contract:</b></small></div></Fade>
                            <Fade bottom><div className={"cb wc text-center"}><small><b>sijd3idncopdj1236543ddvc333csp33kmcs</b></small></div></Fade>
                        </Flex>
                        <Flex flex={"0 0 150px"}>
                        </Flex>
                    </Flex>
                </React.Fragment>
            }
            <Telegram/>
        </Container>
    );
}

const MSTprops = state => ({dashboard: state.Dashboard,landing:state.Landing});
const MDTprops = {SeTDataDash,SeTDataLanding};

export default connect(MSTprops,MDTprops)(withRouter(React.memo(Dashboard)));
