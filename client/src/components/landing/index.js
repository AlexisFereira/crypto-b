import React, {useEffect} from "react";
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
import {withRouter} from "react-router-dom";
import {cryptoVar} from "../../config";

function Landing(props) {


    let Register = ()=> props.history.push("/register");

    let getData = async ()=>{
        await axios(
            { method: 'get', url: `${cryptoVar.api}/api/v1/contract/globalstats`,}
        )
            .then(function (response) {
                if(response.status){
                    let data = response.data;
                    props.SeTDataLanding({
                        participants       :data.total_users,
                        newEth             :data.total_users_24h,
                        incomeUsd          :data.total_users_usd,
                        TotalParticipants  :data.total_users_24h,
                        ether_value        :data.ether_value
                    })
                }else{
                    console.log("::: No se pudo consultar ::::")
                }
            })
            .catch(function (error) {
                // handle error
                console.log("::: Errror obteniendo los datos de landing ::::",error);
            })
    };

     useEffect(()=>{
         getData();
     },[]);



    return (
        <Container className={"bgDark"}>
            <Menumovil    />

            <div className={"wc "} name={"home"}/>

            <Header  register={()=>Register()}/>
            <BannerInicio register={()=>Register()} />

            <div className={"wc "} name={"how"}/>

            <BigCoin  />
            <Datos  />
            <Carrusel />

            <div className={"wc "} name={"faq"}/>

            <Crowfunding   />
            <MarketingPlan register={()=>Register()} />

            <div className={"wc "} name={"faq2"}/>

            <Faq    />
            <Footer />
        </Container>
    )
}

const MSTprops = state => ({
    landing: state.Landing,
    crypto: state.Dashboard
});
const MDTprops = {SeTDataLanding};

export default connect(MSTprops,MDTprops)(withRouter(React.memo(Landing)));
