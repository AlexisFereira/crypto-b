import React from "react";
import styled from "@emotion/styled";
import {DegCard}  from "./../helper";
import Modulo from "./../modulo";
import Modulo2 from "./../modulo/modulo2";
import Flex  from "./../../UI/Flex";
import Fade from 'react-reveal/Fade';


const Container = styled.div`
    position:relative;
    
    .title{
        text-transform:uppercase;
        font-size:28px;
        font-weight:300;
        
        .str{
        font-weight:700;
        }
    }
`;


function BigCard({version,activos,data,m2,onlyView,accountLogged,getData}) {

    return (
        <Container className={"wc mb-4 mt-4 pt-3"}>
            <p className={"title"}>
                <Fade>
                    <span>Bilions </span>
                </Fade>
                <Fade bottom>
                    <span className={"str"}>{version}</span>
                </Fade>
            </p>
            <Fade>
                <DegCard className={"wc px-2 pt-2 px-lg-3 pt-lg-3 pb-lg-2"}>
                    <Flex jc={"flex-start"}>
                        {activos && activos.map((item,index)=>{
                            if(m2){
                                return(
                                    <Modulo2
                                        gold={data[index].mtype === 2}
                                        key={index}
                                        number={data[index].level}
                                        data={{
                                            users:data[index].descendants,
                                            ciclos:data[index].resets,
                                            circles:data[index].circles,
                                        }}
                                        lock={!data[index].active}
                                        canbuy={!item.active && (index > 0 && data[index - 1].active) && !onlyView && !data[index].active}
                                        accountLogged={accountLogged}
                                        getData={getData}
                                    />
                                )
                            }else{
                                return(
                                    <Modulo
                                        gold={data[index].mtype === 2}
                                        key={index}
                                        number={data[index].level}
                                        // number={data[index].level}
                                        data={{
                                            users:data[index].descendants,
                                            ciclos:data[index].resets,
                                            circles:data[index].circles,
                                            active:item.active
                                        }}
                                        lock={!data[index].active}
                                        canbuy={!item.active && (index > 0 && data[index -1 ].active) && !onlyView}
                                        accountLogged={accountLogged}
                                        getData={getData}
                                    />
                                )
                            }
                        })}
                    </Flex>
                </DegCard>
            </Fade>
        </Container>
    )
}

export default React.memo(BigCard);
