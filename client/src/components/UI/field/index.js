import React from "react";
import styled from "@emotion/styled";
import {colors} from "../index";
import {Collapse} from "react-collapse"

const ShowError = ({error})=>{
    return (
        <Collapse isOpened={!!error} className={"wc ro"}>
            <small className={"error"}>{error}</small>
        </Collapse>
    )
};

const Container = styled.div`
    position:relative;
    flex:${props => props.flex};
    
    input,select,textarea{
        background:${props=> props.theme.bg};
        color:${props=> props.theme.color};
        cursor:${props=> props.theme.cursor};
        border-radius:5px; 
        height:40px;
        width:100%;
        padding: .5em .75em;  
        border: 2px solid ${props=> props.theme.borde}; 
        font-weight:bold;
        
        box-shadow: 0 0 15px ${props => props.theme.shadow};
        
        &:disabled{
            opacity:.6;
        } 
    }
    textarea{
        height:70px;
    }
`;

function Field({
                   flex="1 0 100%",
                   children,
                   error,
                   name,
                   value,
                   onChange,
                   placeholder,
                   disabled,type="text",
                   className
}) {

    const theme = {
        borde: error ? "#b71c1c" : (disabled  ? "#e4e4e4" : "white" ),
        bg: disabled ? "#e4e4e4" : error ? "#ffebee": "white",
        color: disabled ? "#999999" : error ? "#b71c1c" : colors.negro,
        cursor: disabled ? "not-alowed" : "pointer",
        shadow: error ? "#b71c1c" :  "transparent"
    };

    return (
        <Container
            className={className} flex={flex}
            theme={theme}
        >
            {children ? children :
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            }
            <ShowError error={error}/>
        </Container>
    )
}

export default React.memo(Field);
