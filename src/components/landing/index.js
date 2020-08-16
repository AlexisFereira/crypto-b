import React, {useEffect} from "react";
import styled from "@emotion/styled";
import Header from "./header";
import BannerInicio from "./bannerInicio";
import BigCoin from "./bigCoin";
import Datos from "./datos";
import Carrusel from "./carrusel";
import Crowfunding from "./crowfunding";
import MarketingPlan from "./MarketingPlan";
import Faq from "./FAQ";
import Footer from "./footer";
import Menumovil from "./header/menuMovil";
import {Container} from "./styles";
import {connect} from "react-redux";
import {SeTDataLanding} from "../store/actions/actionsCreators";
import axios from "axios";


function Landing(props) {

     useEffect(()=>{
             console.log("entré aqui::::");
     axios(
         {
         method: 'get',
         url: 'http://api-cryptobillions.herokuapp.com/api/v1/contract/globalstats',
         }
     )
         .then(function (response) {
                 if(response.status){
                        let data = response.data;
                        props.SeTDataLanding({
                                participants      : data.total_users,
                                newEth            : data.total_users_24h,
                                incomeUsd         : data.total_users_eth,
                                TotalParticipants : data.total_users_usd,
                        })
                 }else{
                         console.log("::: No se pudo consultar ::::")
                 }
         })
         .catch(function (error) {
                 // handle error
                 console.log("::: Errror en peticion de landing ::::",error);
         })
     },[])

    return (
        <Container className={"bgDark"}>
            <Menumovil    />

            <div className={"wc "} name={"home"}/>

            <Header       />
            <BannerInicio />

            <div className={"wc "} name={"how"}/>

            <BigCoin  />
            <Datos  />
            <Carrusel />

            <div className={"wc "} name={"faq"}/>

            <Crowfunding   />
            <MarketingPlan />

            <div className={"wc "} name={"faq2"}/>

            <Faq    />
            <Footer />
        </Container>
    )
}

const MSTprops = state => ({landing: state.Landing});
const MDTprops = {SeTDataLanding};

export default connect(MSTprops,MDTprops)(React.memo(Landing));
