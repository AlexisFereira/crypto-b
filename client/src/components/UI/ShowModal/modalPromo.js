import React from "react";
import styled from "@emotion/styled";
import {colors} from "../../styles/helpers";
import config from "../../../config/config";


const Container = styled.div`
    position:relative;
    background:white;
    max-width:400px;
    margin:auto;
    overflow:hidden;
    border-radius:5px;
    box-shadow: 0 1px 5px rgba(0,0,0,.3);
    
    .blueZone{
        background:${colors.azul};
        color:white;
        position:relative;
        min-height:160px;
        text-align:center;
        font-size:20px;
    }
    
    .terminos{
        max-width: 80%;
        margin: 70px auto 10px;
        
        a{
            color:black;
            cursor:pointer;
        }
        
    }
    
    .imagen{
        height:150px;
        width:150px;
        border-radius:50%;
        background:white;
        position:absolute;
        bottom:-50%;
        left:50%;
        transform:translateX(-50%);
        
        img{
            width:70%;
            height:auto;
            display:block;
        }
    }
`;

function ModalPromo({value,megas,valuePromo,show,onClick1,onClick2,close}) {

    return (
        <React.Fragment>
            {show ?
            <Container>
                <div className="blueZone">
                    <div className="close" onClick={close}>
                        <img src="/img/iconos/close.svg" alt="" width={"20px"} height={"auto"} />
                    </div>
                    <div className="wc py-2">
                        Si recargas <span className={"fwb"}>{valuePromo}</span> te <br/>
                        obsequiamos <span className={"fwb"}>{megas}  GRATIS</span>
                    </div>
                    <div className="imagen p-3 f02 ">
                        <img src="/img/iconos/regalo.png" alt=""/>
                    </div>
                </div>
                <div className="wc text-center terminos">
                    <small> Al seleccionar 'Quiero más megas' estás aceptando los <span className={"fwb"}><a target={"_blank"} href={config.TerminosCondiciones}>Términos y Condiciones</a></span></small>
                </div>
                <div className="col-10 mx-auto py-4 px-0">
                    <button onClick={onClick1} className={"btn-b mb-3 wc"}>Recargar solo ${value}</button>
                    <button onClick={onClick2} className={"btn-t wc"}>Quiero más megas</button>
                </div>
            </Container> :
            ''}
        </React.Fragment>
    )
}

export default React.memo(ModalPromo);
