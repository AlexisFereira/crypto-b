import React from "react";
import styled from "@emotion/styled";
import Flex from "./../../UI/Flex";


const MapIcon = styled.div`
    background-image: url(${props=> props.url});
    background-position: ${props=> props.position};
    background-size: ${props=> props.sizeBG};
    background-repeat: no-repeat;
    width:${props=> props.width};
    height:${props=> props.height};
`;

const Icon = ({url, number="1",w,h,nIcons,className})=>{

    let positions  = 100 / (nIcons - 1);
    let arrP = [];
    for(var i= 0; i<= (nIcons - 1); i++){
        let valor =i * positions
        arrP.push( valor.toString() )
    }
    let pF = arrP;

    console.log(pF[number])

    return(
        <MapIcon
            className={className}
            position={"center " + pF[number-1] + "%" }
            url={url}
            width={w + "px"}
            height={ h + "px"}
            sizeBG={"auto " + nIcons * 100 + "%"}
        >
        </MapIcon>
    )
};


const Container = styled.div`
    position:relative;
   
    .texto{
        font-size:14px;
    }
    
    @media all and (max-width:440px){
        .texto{
            font-size:12px
        }
    }
`;

export function IconText({className, flex, icon, title, text,h,w}) {
    return (
        <Container className={className} >
            <Flex className={"wc"} jc={"flex-start"}>
                <Icon
                    url={"img/landing/icons_01.png"}
                    flex={"0 0 35px"}
                    w={w}
                    h={h}
                    nIcons={5}
                    number={icon}
                >

                </Icon>
                <Flex className={"pl-2 pl-lg-3 cw texto"} flex={"1 0 50%"} jc={"flex-start"}>
                    <div className={"wc"}>
                        <b>{title}</b>
                    </div>
                    <p className={"mb-0"}>{text}</p>
                </Flex>
            </Flex>
        </Container>
    )
}

