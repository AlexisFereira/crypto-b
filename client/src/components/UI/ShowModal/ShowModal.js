import React, {Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {CSSTransition} from 'react-transition-group';
import Flex from "../Flex";
import Btn from "../Btn";
import CANCEL from "./../../img/cancel.png";
import CHECK from "./../../img/ch.png";
import {useTranslation} from "react-i18next";


const Modal = props => {
    const {t} = useTranslation();

    const  [rendered,setR] = useState(false);

    let iconos = {
        check: CHECK,
        cancel: CANCEL
    };

    useEffect(()=>{
        setR(true)
    },[]);

    return (
        <CSSTransition
            in={props.show}
            timeout={{
                appear: 500,
                enter: 1000,
                exit: 500,
            }}
            classNames={ props.animation ? props.animation : "fade"}
            unmountOnExit
            onExited={ () =>{
                return props.callback ? (rendered && props.callback()) : null
            }}
            onEntered={()=>{
               return  props.onOpen ? props.onOpen() : null;
            }}
        >
            <Flex className={"modal-container"} direction={"column"}>

                <div className={`sombra-modal ${props.masOscuro && "masOscuro"}`}> </div>

                <Flex className="area wc position-relative px-2 ">
                    {!props.reset ?
                    <div className={`card ${props.className}  bgDark`}>
                        <div className="content px-3 px-lg-4 pt-4 text-center">
                            {props.icon &&
                            <div className="wc pb-3">
                                <img src={iconos[props.icon]} alt="" width={"70px"} height={"auto"}/>
                            </div>}
                            {props.title && <h3 className="title">{ props.title}</h3>}
                            {props.title && <p className="tdescription">{ props.description}</p>}

                            {/*{props.children}*/}
                        </div>

                        {!props.noBtn &&
                            <Flex className={"wc botones p-3 pb-4"} jc={"space-around"}>
                                {/*<Btn  bRadius={"22px"} mw={ small ? "114px" :"150px"} className={"mx-2"} btntype={"secondary"} onClick={props.cancel}>*/}
                                {/*    Cancelar*/}
                                {/*</Btn>*/}
                                <Btn size={""}  bRadius={"22px"} mw={"150px"} className={"mx-2"} onClick={props.onConfirm}>
                                    {props.btnText ? props.btnText : t("continue") }
                                </Btn>
                            </Flex>
                        }
                    </div>
                        :
                    <div className={` wc gira `} style={props.style}>
                        {props.children}
                    </div>
                    }
                </Flex>

            </Flex>
        </CSSTransition>

    )
};


class ShowModal extends Component {



    render() {
        // React does *not* create a new div. It renders the children into `domNode`.
        // `domNode` is any valid DOM node, regardless of its location in the DOM.
        return ReactDOM.createPortal(
            <Modal {...this.props} >
                {this.props.children}
            </Modal>,
            document.getElementById("cont-modal")
        );
    }

}

export default React.memo(ShowModal);



