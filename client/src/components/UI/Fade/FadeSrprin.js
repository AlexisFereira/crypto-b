import React, {useEffect, useState} from "react";
import {useTransition, animated, config} from "react-spring";


function FadeSrpring({children, open=true,direction= "0,-20px" }) {

    const [show, set] = useState(false);

    const transitions = useTransition(open, null, {
        config:config.stiff,
        from:  { opacity:0 , transform: `translate(${direction})`},
        enter: { opacity: 1, transform:"translate(0,0)" },
        leave: { opacity:0 , transform: `translate(${direction})`},
    });

    useEffect(()=>{
        if(!open){
            set(true)
        }
    },[ ]);

    useEffect(()=>{
        if(open){
            set(open)
        }
    },[open]);


    return transitions.map(({ item, key, props }) =>
        item && (
            <animated.div key={key} style={props} className={"wc"}> ️
                {children}
            </animated.div>
        )
    )

}

export default React.memo(FadeSrpring);
