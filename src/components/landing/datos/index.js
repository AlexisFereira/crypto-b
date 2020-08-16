import React from "react";
import Flex from "./../../UI/Flex";
import {useTranslation} from "react-i18next";
import {colors} from "../../UI";
import {SeTDataLanding} from "../../store/actions/actionsCreators";
import {connect} from "react-redux";
import {Container,CifraCont} from "./styles";


const Cifra = ({text,number,big,flex="1 0 22%"})=>{

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

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
                <p className={" d-inline cw amount mb-0"}>{formatNumber(number)}</p>
            </Flex>
        </CifraCont>
    )
};
function Datos(props) {
    const { t, i18n } = useTranslation();
    return (
        <Container className={"wc"}>
            <div className="line line-gradien-h"> </div>
            <div className="col-12 col-xl-10 mx-auto cont-scroll">
                <Flex className={"scroll"} alg={"flex-start"}>
                    <Cifra
                        text={t('total_participants')}
                        number={props.landing.participants}
                    />
                    <Cifra
                        text={t('new_participants')}
                        number={props.landing.newEth}
                    />
                    <Cifra
                        flex={"2 0 30%"}
                        text={t('income')}
                        number={props.landing.incomeUsd}
                        big={true}
                    />
                    <Cifra
                        text={t('total_income')}
                        number={props.landing.TotalParticipants + " ETH"}
                    />
                </Flex>
            </div>
            {!props.noDescrtiption &&
            <div className="desc cc text-center px-3">
                {t('ON_CRYPTOBILLION')}
            </div>}
        </Container>
    )
}

const MSTprops = state => ({landing: state.Landing});
const MDTprops = {SeTDataLanding};

export default connect(MSTprops,MDTprops)(React.memo(Datos));
