import React, {useEffect, useState} from "react";
import Flex from "./../../UI/Flex";
import {DegCard} from "../helper";
import {Container,ThreePoints} from "./styles";
import {connect} from "react-redux";
import {SeTDataDash} from "../../store/actions/actionsCreators";
import {withRouter} from "react-router-dom";
import ShowModal from "../../UI/ShowModal/ShowModal";
import {CompraNivel, Crypto} from "../../../crypto";
import Timer from "./timer";


function Modulo2({number,gold,lock,canbuy,data,history,}) {

    let [modal,setModal] = useState({
        status:false,
        title:"",
        description:"",
        icons:"",
    });
    let handlerModal = x => setModal({...modal,...x});

    let values = [600, 1200, 2400, 4800, 9600, 19200, 38400, 76800, 153600];

    let [state,setState] = useState({
        loading:false,
        puedeComprar: false
    });

    let handler = x => setState({...state,...x});
    let modalSet = (title,description,icon= "cancel",callBack = null)=> handlerModal({
        status:true, title, description, callBack, icon,});
    let logueado = sessionStorage.getItem("logueado");
    let Matrix = gold ? 2 : 1;

    let buyLevel = async (nivel) => {
        handler({loading:true});
        try{

            let currentW  = await Crypto(null,null,"getUserAddress");


            if(logueado !== currentW){
                handler({loading:false});
                return(modalSet(
                    "Error Wallet no encontrada.",
                    "Para realizar compra de niveles deve iniciar seción con su actual dirección de wallet.",
                    "cancel",
                    ()=> history.push("/login")
                ))
            }

            let compra = await CompraNivel(Matrix,nivel);
            if(compra.result){
                let comprado = {nivel,matrix:Matrix,wallet:logueado};
                sessionStorage.setItem("compra2",JSON.stringify(comprado));
                modalSet("Compra realizada con éxito","La transacción ha sido realizada con éxito, para verla reflajada en tu dashboard debes esperar unos minutos.","check");
                handler({procesandoCompra : true, puedeComprar:false, loading:false });

            }else{
                handler({loading:false});
            }
        }
        catch (e) {
            handler({loading:false});
        }
    };

    let verificaCompra = ()=>{
        let compra = JSON.parse(sessionStorage.getItem("compra2"));
        if(compra && compra.wallet === logueado){
             if(compra.nivel === number && canbuy && lock){
                 console.log(number, compra.nivel,canbuy, "no puede comprar:::::")
                 handler({
                     puedeComprar     : false,
                     procesandoCompra : true
                 })
             }
             else{
                 handler({
                     puedeComprar: canbuy
                 })
             }
        }
        else{
            handler({
                puedeComprar: canbuy
            })
        }
    };

    useEffect(()=>{
        verificaCompra();
    },[ ]);


    return (
        <Container className={"px-1 mb-2 mb-lg-3"}>
            <Flex className={"number pr-2"} flex={"0 0 20px"}>
               <span>
                    {number}
               </span>
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
                <div className={`lock ${state.procesandoCompra && "watingShop"}`}>
                    <Flex className={"cart"} direction={"column"}>
                        {state.puedeComprar &&
                        <button
                            className="shop"
                            onClick={()=>buyLevel(Number(number))}
                            disabled={state.loading}
                        >
                            {state.loading ? <span className="loading"> </span> :
                                <img src="/img/dashboard/cart.png" alt="" className={"imgr"}/>
                            }

                        </button>}
                        {state.procesandoCompra &&
                            <Timer/>
                        }
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

const MSTprops = state => ({dashboard : state.Dashboard});
const MDTprops = {SeTDataDash};

export default connect(MSTprops,MDTprops)(withRouter(React.memo(Modulo2)));
