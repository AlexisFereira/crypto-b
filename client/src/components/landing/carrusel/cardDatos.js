import React from "react";
import styled from "@emotion/styled";
import {colors} from "../../UI";
import {useTranslation} from "react-i18next";


const Container = styled.div`
    position:relative;
    padding-bottom:40px;
    
    .color{
        position:relative;
        padding:20px;
        width:100%;
        min-width:260px; 
        background:rgba(0,0,0,.3);
        transform:scale(.9);
        opacity:.5;
    }
    
    .icon{
        position:absolute;
        bottom:0;
        left:50%;
        transform:translate(-50%,50%);
        width:40px;
        
        img{
            width:100%;
            height:auto;
            display:block;
        }
    }
`;

const ItemV = styled.div`
    position:relative;
    width:100%;
    text-align:center;
    
    
    .name{
        text-transform:uppercase;
        color:white;
        font-weight:500;
    }
    
    .value{
        text-transform:uppercase;
        color:${colors.cian};
        font-weight:${props=> props.weight};
        font-size:${props=> props.size};
    }
`;

const ItemValue = ({name,value,bold,size})=>{
    return(
        <ItemV
            weight={bold? "700": "400"}
            size={size ? "28px": "18px"}
            className={"pb-3"}
        >
            <div className="name">
                {name}
            </div>
            <div className="value">
                {value}
            </div>
        </ItemV>
    )};

function CardDatos({id,usd,eth,mx3,mx6}) {

    const { t} = useTranslation();

    return (
        <Container className={"wc tr"}>
            <div className="wc color br22">
                <ItemValue name={"id"} value={id}  size />
                <ItemValue name={t('balance') + " usd"} value={usd} size bold/>
                <ItemValue name={t('balance') + " TRON"} value={eth} size bold/>
                <ItemValue name={t('gain') + " matrix x3"} value={mx3}/>
                <ItemValue name={t('gain') + " matrix x6"} value={mx6}/>
                <div className="icon">
                    <img src="img/icon-card.png" alt=""/>
                </div>
            </div>
        </Container>
    )
}

export default React.memo(CardDatos);
