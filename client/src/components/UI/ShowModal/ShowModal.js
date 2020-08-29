import React, {Component} from "react";
import ReactDOM from "react-dom";
import {CSSTransition} from 'react-transition-group';
import Flex from "../Flex";
import Btn from "../Btn";
import CANCEL from "./../../img/cancel.png";
import CHECK from "./../../img/ch.png";


const Modal = props => {

    let small = window.innerWidth < 768;

    let iconos = {
        check: CHECK,
        cancel: CANCEL
    };

    return (

        <CSSTransition
            in={props.show}
            timeout={600}
            classNames="fade"
            unmountOnExit
            onExited ={props.callback ? props.callback() : null }
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
                                    {props.btnText ? props.btnText : "Continuar" }
                                </Btn>
                            </Flex>
                        }

                    </div>

                        :
                        <div className={` wc gira`}>
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



