import React from "react";
import styled from "@emotion/styled";
import {DegCard}  from "./../helper";
import Modulo from "./../modulo";
import Flex  from "./../../UI/Flex";

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

function BigCard({version,activos,data}) {
    return (
        <Container className={"wc mb-4"}>
            <p className={"title"}>Bilions <span className={"str"}>{version}</span></p>
            <DegCard className={"wc px-2 pt-2 px-lg-3 pt-lg-3 pb-lg-2"}>
                <Flex jc={"flex-start"}>
                    {activos && activos.map((item,index)=>{
                        return(
                            <Modulo
                                gold={data[index].mtype === 2}
                                key={index}
                                number={data[index].level}
                                data={{
                                    users:data[index].descendants,
                                    ciclos:data[index].resets,
                                    circles:data[index].circles,
                                }}
                                lock={!data[index].active}
                            />
                        )
                    })}
                </Flex>
            </DegCard>
        </Container>
    )
}

export default React.memo(BigCard);