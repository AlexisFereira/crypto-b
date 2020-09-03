import React from "react";
import Flex from "./../../UI/Flex";
import {DegCard} from "../helper";
import {Container,ThreePoints} from "./styles";
import {colors} from "../../UI";


function Modulo2({number,gold,lock,canbuy,data}) {
    return (
        <Container className={"px-1 mb-2 mb-lg-3 "}>
            <Flex className={"number pr-2"} flex={"0 0 20px"}>
                {number}
            </Flex>
            <Flex flex={"1 0 80%"} className={"p-2 bcard bgb "}>

                <Flex flex={"0 0 35px"}>
                    <img src={`/img/dashboard/${gold ? "hexGold":"hexCian"}.png`} alt="" className={"imgr"}/>
                </Flex>

                <Flex flex={"0 0 35px"} className={"pl-2"}>
                    <ThreePoints
                        className={" mb-1"}
                        bg1={data.circles >0 ? "white": "transparent"}
                        bg2={data.circles >2 ? "white": "transparent"}
                        bg3={data.circles >3 ? "white": "transparent"}
                        rotate={"-35deg"}
                        top={"60%"}
                    >
                        <div className="point p01"> </div>
                        <div className="point p02"> </div>
                        <div className="point p03"> </div>
                        <span className={"line01"}> </span>
                        <span className={"line02"}> </span>
                        <span className={"line03"}> </span>
                    </ThreePoints>
                    <ThreePoints
                        bg1={data.circles >1 ? "white": "transparent"}
                        bg2={data.circles >4 ? "white": "transparent"}
                        bg3={data.circle>5 ? "white": "transparent"}
                        rotate={"35deg"}
                        top={"35%"}
                    >
                        <div className="point p01"> </div>
                        <div className="point p02"> </div>
                        <div className="point p03"> </div>
                        <span className={"line01"}> </span>
                        <span className={"line02"}> </span>
                        <span className={"line03"}> </span>
                    </ThreePoints>
                </Flex>

                <Flex className={"wc lNumbers pt-2"}>
                    <small className={"d-inline-block mx-1"}><b>{data.users}</b> <img src="/img/dashboard/user.png" width={"12px"} height={"auto"} className={"align-middle"} alt=""/></small>
                    <small className={"d-inline-block mx-1"}><b>{data.ciclos}</b> <img src="/img/dashboard/ciclo.png" width={"12px"} height={"auto"} className={"align-middle"} alt=""/></small>
                </Flex>
                {lock &&
                <div className="lock">
                    <Flex className={"cart"} direction={"column"}>
                        {canbuy &&
                        <button className="shop">
                            <img src="/img/dashboard/cart.png" alt="" className={"imgr"}/>
                        </button>}
                    </Flex>
                </div>}
            </Flex>

            <Flex className={"wc"}>
                <Flex flex={"0 0 20px"}> </Flex>
                <Flex flex={"1 0 50%"} className={"mt-2 px-2"}>
                    <DegCard className={"wc text-center"}>
                        <small><b>0.09</b> ETH</small>
                    </DegCard>
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(Modulo2);
