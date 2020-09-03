import React from "react";
import styled from "@emotion/styled";
import Flex from "./../../UI/Flex";
import {Collapse} from "react-collapse";
import {Icon} from "../bannerInicio/helpers";

const Container = styled.div`
    position:relative;
    margin-bottom:20px;
    cursor:pointer;
    
    .question{
        color:white;
        font-weight:700;
        font-size:24px;
    }
    
    .active{
        transform:rotate(180deg);
    }
    
    .desc{
        padding:8px 10px;
        background:rgba(0,0,0,.2);
        border-radius:6px;
        color:white;
    }
    
    &:hover{
        .question{
            text-decoration:underline;
        }
    }
    
    @media all and ( max-width:480px){
         .question{
            font-size:15px;
         }
    }
    
`;

function ItemCollapse({open,text,desc,handleTab,id}) {
    return (
        <Container className={"wc"} onClick={()=> handleTab(id)}>
            <Flex className={"wc "} alg={"flex-start"}>
                <Flex flex={"0 0 40px"}>
                    <Icon
                        number={"4"}
                        nIcons={"8"}
                        w={"40"}
                        h={"40"}
                        url={"/img/landing/icons_02.png"}
                    />
                </Flex>
                <Flex flex={"1 0 70%"} jc={"flex-start"} className={"pl-3"}>
                    <p className={"question cw mb-0"}>{text}</p>
                    <div className={"wc pt-3 d-none d-md-bock"}>
                        <Collapse isOpened={open}>
                            <div className="desc">
                                {desc}
                            </div>
                        </Collapse>
                    </div>
                </Flex>
                <Flex flex={"0 0 10px"} className={open ? "active" : ""}>
                    <Icon
                        number={"8"}
                        nIcons={"8"}
                        w={"40"}
                        h={"40"}
                        url={"/img/landing/icons_02.png"}
                    />
                </Flex>
                <div className={"wc pt-3 d-md-none"}>
                    <Collapse isOpened={open}>
                        <div className="desc">
                            {desc}
                        </div>
                    </Collapse>
                </div>
            </Flex>
        </Container>
    )
}

export default React.memo(ItemCollapse);
