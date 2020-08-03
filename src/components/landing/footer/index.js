import React from "react";
import styled from "@emotion/styled";
import Flex from "./../../UI/Flex";
import {useTranslation} from "react-i18next";

const Container = styled.div`
    position:relative;
`;

function Footer() {
    const { t, i18n } = useTranslation();
    return (
        <Container className={"wc"}>
            <Flex className="col-12 mx-auto col-xl-10 py-4">
                <Flex flex={"0 0 180px"}>
                    <img src="img/logo.png" alt=""/>
                </Flex>
                <Flex flex={"1 0 60%"}>
                    <small className={"mb-0 cw"}><b>{t('rights')}</b></small>
                </Flex>
                <Flex flex={"0 0 180px"} className={"cw redes"} jc={"flex-end"}>
                    <a target={"_blank"} href=""> A </a>
                    <a target={"_blank"} href=""> A </a>
                    <a target={"_blank"} href=""> A </a>
                    <a target={"_blank"} href=""> A </a>
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(Footer);
