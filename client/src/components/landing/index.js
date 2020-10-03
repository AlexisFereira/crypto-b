import React, {useEffect, useState} from "react";
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
import Flex from "../UI/Flex";
import LoadingHex from "./../UI/LoadingHex";
import Telegram from "./../UI/telegramBtn";

function Landing(props) {

    let [state,setState] = useState({
        loading:true
    });

    let search = props.history.location.search;
    let invitation = new URLSearchParams(search);
    let {SeTDataLanding} = props;

    let Register = ()=> props.history.push("/register");

    let consultInvitation = async ()=>{
        let id = invitation.get("invitation");
        if(!id){
            setState({...state,loading:false});
            return ""
        }
        try{
            await axios(
                { method: 'get', url: `http://api-test.cryptobillions.io/api/v1/contract/invitation/${id}`,}
            ).then(result => {
                if(result.data){
                    setState({...state,loading:false});
                    SeTDataLanding({canRegister:true})
                }
                else{
                    setState({...state,loading:false});
                    SeTDataLanding({canRegister:false})
                }
            })
        }
        catch (e) {
            SeTDataLanding({canRegister:false});
            setState({...state,loading:false});
        }

    };

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
         consultInvitation();
     },[ ]);

    return (
        <Container className={"bgDark"}>
            {state.loading ?
                    <Flex style={{minHeight:"100vh"}}>
                        <LoadingHex/>
                    </Flex>
                    :
                    <>
                        <Menumovil    />

                        <div className={"wc "} name={"home"}/>

                        <Header  register={()=>Register()} canRegister={props.landing.canRegister}/>
                        <BannerInicio register={()=>Register()} canRegister={props.landing.canRegister} />

                        <div className={"wc "} name={"how"}/>

                        <BigCoin  scroll={props.scroll} />
                        <Datos  />
                        <Carrusel />

                        <div className={"wc "} name={"faq"}/>

                        <Crowfunding   />
                        <MarketingPlan register={()=>Register()} canRegister={props.landing.canRegister} />

                        <div className={"wc "} name={"faq2"}/>

                        <Faq    />
                        <Footer />

                        <Telegram/>
                    </>
            }
        </Container>
    )
}

const MSTprops = state => ({
    landing: state.Landing,
    crypto: state.Dashboard
});
const MDTprops = {SeTDataLanding};

export default connect(MSTprops,MDTprops)(withRouter(React.memo(Landing)));
