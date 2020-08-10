import React from "react";
import styled from "@emotion/styled";
import Flex from "./../../UI/Flex";
import {useTranslation} from "react-i18next";
import {colors} from "../../UI";

const Container = styled.div`
    position:relative;
    padding-bottom:40px;
    
    .line{
        height:1px;
        width:100%;
    }
    .desc{
        max-width:700px;
        margin:auto;
        padding-top:50px;
        font-size:14px;
        font-weight:400;
    }
    
    .cont-scroll{
    padding-top:10px;
    margin-top:-10px;
        overflow-x: auto ;
        
        .scroll{
            min-width:600px;
            flex-flow:row nowrap
        }
    }
    
    @media all and (max-width:600px){
        font-size: .8em;
    }
`;

const CifraCont = styled.div`
    position:relative;
    flex:${props=> props.flex};
    text-transform:uppercase;
    padding-top:25px;
    
    
    .textos{
        width:auto;
        margin:auto;
        opacity:${props=> props.opacity}; 
        font-size:${props=> props.fontS};
    }
    
    .point{
        position:absolute;
        top:-5px;
        left:50%;
        transform:translateX(-50%);
        width:10px;
        height:10px;
        border-radius:50%;
        background:${colors.cian};
    }
    
     .pointB{
        background:white;
        position:absolute;
        top:-8px;
        left:50%;
        transform:translateX(-50%);
        width:16px;
        height:16px;
        border-radius:50%;
        background:transparent;
        border:1px solid ${colors.cian};
        
        .whiteP{
            width:8px;
            height:8px;
            border-radius:50%;
        }
    }
    
    .title{
        font-size:.6em;    
    }
    .amount{
        font-size:1.5em;
    }
    
    
`;

const Cifra = ({text,number,big,flex="1 0 22%"})=>{



    return(
        <CifraCont
            opacity={big ? 1 : ".5"}
            flex={flex}
            bg={big ? colors.cian : "white" }
            fontS={big ? "1.8em" : "1em"}
        >
            {big ?
                <Flex className="pointB" direction={"column"}>
                    <div className="whiteP bgw "> </div>
                </Flex> :
                <div className="point"> </div>
            }
            <Flex className="textos" direction={"column"}>
                <p className={" d-inline mb-0 cc title"}>{text}</p>
                <p className={" d-inline cw amount mb-0"}>{number}</p>
            </Flex>
        </CifraCont>
    )
};
function Datos({noDescrtiption}) {
    const { t, i18n } = useTranslation();
    return (
        <Container className={"wc"}>
            <div className="line line-gradien-h"> </div>
            <div className="col-12 col-xl-10 mx-auto cont-scroll">
                <Flex className={"scroll"} alg={"flex-start"}>
                    <Cifra text={t('total_participants')} number={'100.000 '}  />
                    <Cifra text={t('new_participants')} number={'30.000'} />
                    <Cifra flex={"2 0 30%"} text={t('income')} number={'3.406.000'} big={true} />
                    <Cifra text={t('total_income')} number={'3000 ETH'}  />
                </Flex>
            </div>
            {!noDescrtiption &&
            <div className="desc cc text-center px-3">
                {t('ON_CRYPTOBILLION')}
            </div>}
        </Container>
    )
}

export default React.memo(Datos);
