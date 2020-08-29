import React, {useEffect, useState} from "react";
import Datos from "./../landing/datos";
import Header from "./header";
import Flex from "./../UI/Flex";
import {DegCard} from "./helper";
import BigCard from "./bigCard";
import {Redes} from "../landing/footer";
import axios from "axios";
import {SeTDataDash,SeTDataLanding} from "../store/actions/actionsCreators";
import {connect} from "react-redux";
import {Container} from "./styles";
import {formatNumber} from "./../landing/datos";
import {Datosgenerales} from "../../crypto";
import {withRouter} from "react-router-dom";


function Dashboard(props) {

    const [state,setstate ] =useState({
        loading:true,
    });

    let {history} = props;
    let id = props.history.location.search.split('=');
    if(!id[0]){
        props.history.push('/login')
    }


    useEffect(()=>{
        Datosgenerales()
            .then(response =>{
                if(response.status){
                    let {total_users,
                        total_users_24h,
                        total_users_eth,
                        total_users_usd,
                        ether_value } = response.data;
                    props.SeTDataLanding({
                        participants:total_users,
                        newEth:total_users_24h,
                        incomeUsd:total_users_eth,
                        TotalParticipants:total_users_usd,
                        ether_value
                    })
                }
                else{
                    console.log("::: No se pudo consultar ::::");
                    return false;
                }
                }
            )
            .catch(e=>{
                console.log(e)
            });
        axios(
            {
                method: 'get',
                url: `https://api-cryptobillions.herokuapp.com/api/v1/account/${id[1]}`,
            }
        )
            .then(function (response) {
                if(response.status){
                    setstate({...state,loading:false});
                    let {
                        id,
                        users,
                        minihash,
                        link,
                        wallet,
                        referred,
                        total_eth,
                        m1_total_eth,
                        m2_total_eth,
                        m1_levels,
                        m2_levels,
                        m1,
                        m2
                    } = response.data;
                    props.SeTDataDash({
                        userId: id,
                        users,
                        minihash,
                        link,
                        wallet,
                        referred,
                        total_eth,
                        m1_total_eth,
                        m2_total_eth,
                        m1_levels,
                        m2_levels,
                        m1,
                        m2,
                    })
                }
                else{
                    console.log("::: No se pudo consultar ::::")
                }
            })
            .catch(function (error) {
                // handle error
                setstate({...state,loading:false})
                history.push("/login");
                console.log("::: Error en peticion de Dashboard ::::",error);
            })
    },[]);

    return (
        <Container className={"wc bgDark"}>
           <div className={"col-12"}>
               <Header/>
           </div>
            {state.loading ?
                <div className={"wc cw text-center"}>
                    Procesing...
                </div>
            :
                <React.Fragment>
                    <Datos noDescrtiption />
                    <Flex alg={"flex-start"} className={"col-12 col-xl-10 mx-auto cw pt-4 fadeIn"}>
                        <aside className={"col-12 col-sm-10 col-lg-3 mx-auto pt-md-5 mt-md-2 pb-5 px-0"}>
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
                                    <b>{props.dashboard.total_eth}</b> <span>ETH</span>
                                </div>
                                <div className={"datoNormal text-center"}>
                                    <b>${formatNumber(props.dashboard.total_eth * props.landing.ether_value,true)}</b> USD
                                </div>
                            </DegCard>
                            <Flex className={"wc pt-3"} alg={"flex-start"}>
                                <Flex className={"col-12 col-sm-6 col-lg-12 px-0"}>
                                    <div className="section py-2 py-lg-3">
                                        <p className={"mb-0"}>BILLIONS <b>X3</b></p>
                                        <div className="datoBlue"><b>{props.dashboard.m1_total_eth}</b> ETH</div>
                                        <span className={"text-center mr-1"}>${formatNumber(props.dashboard.m1_total_eth * props.landing.ether_value,true)}</span><b>USD</b>
                                    </div>
                                    <div className="section py-2 py-lg-3 mb-lg-5">
                                        <p className={"mb-0"}>BILLIONS <b> <span className={"cg"}>X6</span></b></p>
                                        <div className="datoBlue"><b>{props.dashboard.m2_total_eth}</b>ETH</div>
                                        <span className={"text-center mr-1"}>${formatNumber(props.dashboard.m2_total_eth * props.landing.ether_value,true)}</span><b>USD</b>
                                    </div>
                                </Flex>
                                <Flex className={"col-12 col-sm-6 col-lg-12"}>
                                    <Flex className="enlaces mb-3">
                                        <Flex flex={"1 0 60%"} className="enlace pr-2" jc={"flex-start"} style={{overflow:"hidden"}}>
                                            <small className={"cw wc"}> Link de afiliado </small>
                                            <small className={"cb"}> {props.dashboard.link} </small>
                                        </Flex>
                                        <button>
                                            <img src="/img/dashboard/copiar.png" width={"25px"} height={"auto"} alt=""/>
                                        </button>
                                    </Flex>
                                    <Flex className="enlaces mb-3">
                                        <Flex flex={"1 0 60%"} className="enlace pr-2" jc={"flex-start"} style={{overflow:"hidden"}}>
                                            <small className={"cw wc"}> The etherum wallet </small>
                                            <small className={"cb"}>{props.dashboard.wallet}</small>
                                        </Flex>
                                        <button>
                                            <img src="/img/dashboard/copiar.png" width={"25px"} height={"auto"} alt=""/>
                                        </button>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </aside>
                        <div className="content col-12 col-sm-10 col-lg-9 px-0 pl-md-4">
                            <BigCard version={"x3"} activos={props.dashboard.m1_levels} data={props.dashboard.m1}/>
                            <Flex jc={"flex-end"} className={"wc cw historia"}>
                                <div className={"pl-3"}>Usuario en matriz <img src="/img/dashboard/user.png" className={"align-middle ml-2"} width={"12px"} height={"auto"}  alt=""/></div>
                                <div className={"pl-3"}>Número de ciclos <img src="/img/dashboard/ciclo.png" className={"align-middle ml-2"} width={"12px"} height={"auto"}  alt=""/></div>
                            </Flex>
                            <BigCard version={"x6"} activos={props.dashboard.m2_levels} data={props.dashboard.m2}/>
                            <Flex jc={"flex-end"} className={"wc cw historia"}>
                                <div className={"pl-3"}> <div className="color-circle"> </div> Usuario en matriz</div>
                                <div className={"pl-3"}> <div className="color-circle"> </div> Número de ciclos</div>
                                <div className={"pl-3"}> <div className="color-circle"> </div> Número de ciclos</div>
                                <div className={"pl-3"}> <div className="color-circle"> </div> Número de ciclos</div>
                            </Flex>
                        </div>
                    </Flex>
                    <Flex className={"col-12 col-xl-10 mx-auto pb-3 pt-5 fadeIn"}>
                        <Flex flex={"0 0 150px"}>
                            <Redes/>
                        </Flex>
                        <Flex flex={"1 0 50%"} >
                            <div className={"cw wc text-center"}><small><b>Cryptobillions smart-contract:</b></small></div>
                            <div className={"cb wc text-center"}><small><b>sijd3idncopdj1236543ddvc333csp33kmcs</b></small></div>
                        </Flex>
                        <Flex flex={"0 0 150px"}>
                        </Flex>
                    </Flex>
                </React.Fragment>
            }
        </Container>
    );
}

const MSTprops = state => ({dashboard: state.Dashboard,landing:state.Landing});
const MDTprops = {SeTDataDash,SeTDataLanding};

export default connect(MSTprops,MDTprops)(withRouter(React.memo(Dashboard)));
