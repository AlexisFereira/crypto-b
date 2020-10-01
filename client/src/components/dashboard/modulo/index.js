import React, {useState} from "react";
import Flex from "./../../UI/Flex";
import {DegCard} from "../helper";
import {Container,Lines} from "./styles";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {SeTDataDash} from "../../store/actions/actionsCreators";
import ShowModal from "../../UI/ShowModal/ShowModal";
import {CompraNivel} from "../../../crypto";
import {Crypto} from "../../../crypto";

function Modulo({number,gold,lock,canbuy,data,accountLogged,history,SeTDataDash,getData,dashboard}) {

    let [modal,setModal] = useState({
        status:false,
        title:"",
        description:"",
        icons:"",
    });
    let [state,setState] = useState({
        loading:false
    });

    let handlerModal = x => setModal({...modal,...x});
    let handler = x => setState({...state,...x});
    let modalSet = (title,description,icon= "cancel",callBack = null)=>
        handlerModal({
                status:true, title, description, callBack, icon,
        });

    let values = [600, 1200, 2400, 4800, 9600, 19200, 38400, 76800, 153600];
    let matrix = gold ? 2 : 1;

    let buyLevel = async (nivel) => {
        handler({loading:true});
        try{

            let currentW  = await Crypto(null,null,"getUserAddress");

            if(dashboard.logueado !== currentW){
                handler({loading:false});
                return(modalSet(
                    "Error Wallet no encontrada.",
                    "Para realizar compra de niveeles deve iniciar seción con su actual direcciñon de wallet.",
                    "cancel",
                ))
            }


            let compra = await CompraNivel(matrix,nivel);
            if(compra.result){
                modalSet(
                    "Compra realizada con éxito",
                    <span>La compra del nivel <b>{nivel + 1}</b> de la matrix <b>{matrix  === 1 ? "X3" : "X6"}</b> se realizó con éxito.</span>,
                    "check"
                );
                handler({loading:false});
            }else{
                handler({loading:false});
            }
        }
        catch (e) {
            handler({loading:false});
        }
    };

    return (
        <Container className={"px-1 mb-2 mb-lg-3 "}>
            <Flex className={"number pr-2"} flex={"0 0 20px"}>
                {number}
            </Flex>
            <Flex flex={"1 0 80%"} className={"p-2 bcard bgb "}>
                <Flex flex={"0 0 35px"}>
                    <img src={`/img/dashboard/${gold ? "hexGold":"hexCian"}.png`} alt="" className={"imgr"}/>
                </Flex>
                <Lines/>
                <Flex flex={"0 0 20px"}>
                    <div className={`circle ${data.circles >= 1 && "fll"}`}> </div>
                    <div className={`circle ${data.circles >= 2 && "fll"}`}> </div>
                    <div className={`circle ${data.circles === 3 && "fll"}`}> </div>
                </Flex>
                <Flex className={"wc lNumbers pt-2"}>
                    <small className={"d-inline-block mx-1"}><b>{data.users}</b> <img src="/img/dashboard/user.png" width={"12px"} height={"auto"} className={"align-middle"} alt=""/></small>
                    <small className={"d-inline-block mx-1"}><b>{data.ciclos}</b> <img src="/img/dashboard/ciclo.png" width={"12px"} height={"auto"} className={"align-middle"} alt=""/></small>
                </Flex>
                    {lock &&
                    <div className="lock">
                        <Flex className={"cart"} direction={"column"}>
                            {canbuy &&
                            <button
                                className="shop"
                                onClick={()=> buyLevel(Number(number))}
                                disabled={state.loading}
                            >
                                {state.loading ? <span className="loading"> </span> :
                                    <img src="/img/dashboard/cart.png" alt="" className={"imgr"}/>
                                }
                            </button>}
                        </Flex>
                    </div>}
            </Flex>

            <Flex className={"wc"}>
                <Flex flex={"0 0 20px"}> </Flex>
                <Flex flex={"1 0 50%"} className={"mt-2 px-2"}>
                    <DegCard className={"wc text-center"}>
                        <small><b>{values[Number(number)-1]}</b> TRON</small>
                    </DegCard>
                </Flex>
            </Flex>
            <ShowModal
                show={modal.status}
                title={modal.title}
                icon={modal.icon}
                description={modal.description}
                callback={modal.callBack}
                onConfirm={()=> handlerModal({status:false})}
            />
        </Container>
    )
}

const MSTprops = state=> ({dashboard :state.Dashboard});
const MDTprops = {SeTDataDash};

export default connect(MSTprops,MDTprops)(withRouter(React.memo(Modulo)));
