import React, {useEffect, useState} from "react";
import Flex from "./../../UI/Flex";
import {useTranslation} from "react-i18next";
import {colors} from "../../UI";
import {SeTDataLanding} from "../../store/actions/actionsCreators";
import {connect} from "react-redux";
import {Container,CifraCont} from "./styles";
import {animated,useSpring} from "react-spring";
import Fade from 'react-reveal/Fade';

export function formatNumber(num,decimales) {

    if(decimales){
        num = Math.floor(Number.parseFloat(num) * 100) / 100;;
    }
    let val = num && num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    // if(decimales){
    //         val = val.split(",");
    //         let cola = val[1] ? new String(val[1]).substring(0,count) : "";
    //         val = val[0] + "," + cola
    //
    // }
    return val
}

const Cifra = ({text,number=0,big,flex="1 0 22%",decimales,unidad,prefix,hover,hoverOut})=>{


    const [props,set,stop] = useSpring(()=>({number:0}));


   useEffect(()=>{
      setTimeout(()=>{
          set({number: number});
          stop();
      },1500)
   },[])

    return(
        <CifraCont
            opacity={big ? 1 : ".5"}
            flex={big ? "2 0 30%" : "1 0 22%"}
            bg={big ? colors.cian : "white" }
            fontS={big ? "1.8em" : "1em"}
            onMouseEnter={hover}
            onMouseLeave={hoverOut}
        >

           <Fade left>
               <div className={"wc"}>
                   {big ?
                       <Flex className="pointB" direction={"column"}>
                           <div className="whiteP bgw "> </div>
                       </Flex> :
                       <div className="point"> </div>
                   }
                   <Flex className="textos" direction={"column"}>
                       <p className={" d-inline mb-0 cc title"}>{text}</p>
                       <p className={" d-inline cw amount mb-0"}>
                           {prefix && "$"} <animated.span>{ props.number.interpolate(val => Math.floor(val)) }</animated.span> {unidad}
                       </p>
                   </Flex>
               </div>
           </Fade>
        </CifraCont>
    )
};
function Datos(props) {

    let [active,Set] = useState(3);

    const { t } = useTranslation();

    let hoverF = (number)=>{Set(number)};
    let hoverOut = ()=>{Set(3)};


    return (
        <Container className={"wc fadeIn "}>
            <div className="line line-gradien-h"> </div>
            <div className="col-12 col-xl-10 mx-auto cont-scroll">
                <Flex className={"scroll"} alg={"flex-start"}>
                    <Cifra
                        text={t('total_participants')}
                        number={props.landing.participants}
                        big={active === 1}
                        hover={()=> hoverF(1)}
                        hoverOut={()=> hoverOut()}
                    />
                    <Cifra
                        text={t('new_participants')}
                        number={props.landing.newEth}
                              big={active === 2}
                        hover={()=> hoverF(2)}
                        hoverOut={()=> hoverOut()}
                    />
                    <Cifra
                        text={t('income')}
                        number={props.landing.incomeUsd}
                        big={active === 3}
                        prefix
                        unidad={"USD"}
                        hover={()=> hoverF(3)}
                        hoverOut={()=> hoverOut()}
                    />
                    <Cifra
                        text={t('total_income')}
                        number={props.landing.TotalParticipants}
                        unidad={"TRON"}
                        big={active === 4}
                        hover={()=> hoverF(4)}
                        hoverOut={()=> hoverOut()}
                    />
                </Flex>
            </div>
            {!props.noDescrtiption &&
            <Fade top>
                <div className="desc cc text-center px-3">
                    {t('ON_CRYPTOBILLION')}
                </div>
            </Fade>
            }
        </Container>
    )
}

const MSTprops = state => ({landing: state.Landing});
const MDTprops = {SeTDataLanding};

export default connect(MSTprops,MDTprops)(React.memo(Datos));
