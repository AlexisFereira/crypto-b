import React, {useEffect, useState} from "react";
import {CSSTransition} from 'react-transition-group';
import {withRouter} from "react-router-dom"

function Fade({children,history}) {

    const [show,set]=useState(false);

    useEffect(()=>{
        set(true)
    },[history.location.pathname]);

    return (
        <CSSTransition
            in={show}
            timeout={600}
            classNames="fade-down"
            unmountOnExit
        >
            {children}
        </CSSTransition>
    )
}

export default withRouter(React.memo(Fade));
