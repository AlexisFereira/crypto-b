import React, {useRef} from "react";
import styled from "@emotion/styled";
import {useTranslation} from 'react-i18next';
import Bigcoin from "./../../img/bigCoinTron.png";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const Container = styled.div`
    position:relative;
    padding:50px 15px 100px;
    width:100%;
    background-image:url(img/landing/moneda-bg.png);
    background-repeat:no-repeat;
    background-size:140% auto;
    background-position: center 70%;
    overflow:hidden;
 
    
    .text{
        max-width:650px;
        margin:auto;
        text-align:center;
        margin-bottom:50px;
        p{
            font-size:15px
        }
    }
    
    .coin{
        max-width:600px;
        margin:auto;
    }
`;

function BigCoin(props) {
    const {t} = useTranslation();

    let offset = 0;

    let CoinRef = useRef();

    return (
        <Container className={"px-3 px-xl-0"} id={"bigCoin"} ref={CoinRef}>
            <div className="text">
                <Fade top>
                    <div className="header-title mb-3">
                        {t('the_best_smart')}
                    </div>
                </Fade>
                <Fade bottom>
                    <p className={"cw"}>
                        {t('the_best_smart_desc')}
                    </p>
                </Fade>
            </div>

           <Fade>
               <div className="coin">
                   <img src={Bigcoin} alt="" className={"imgr"}/>
               </div>
           </Fade>

        </Container>
    )
}

export default React.memo(BigCoin);
