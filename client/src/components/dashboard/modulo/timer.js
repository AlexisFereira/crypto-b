import React from "react";
import {Tooltip} from "react-tippy";

function Timer() {
    return (
        <div className={"wc px-4"}>
            <Tooltip
                title={"Procesando compra..."}
                position={"bottom"}
                trigger="mouseenter"
            >
                <img src="/img/temporizador.png" alt="PROCESANDO COMPRA" className={"imgr"}/>
            </Tooltip>
        </div>
    )
}

export default React.memo(Timer);
