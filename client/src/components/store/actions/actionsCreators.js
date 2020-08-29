import {
    SET_DATA_DASHBOARD,
    SET_DATA_LANDING
} from "./index"

export function SeTDataLanding(value){
    return({
        type:SET_DATA_LANDING,
        payload:value
    })
}

export function SeTDataDash(value){
    return({
        type:SET_DATA_DASHBOARD,
        payload:value
    })
}
