import {SET_DATA_DASHBOARD} from "../actions";

const initSatte = {
    participants:0,
    newEth:0,
    incomeUsd:0,
    TotalParticipants:0,
    userId:1,
    onlyView:false
};


export default  function(state= initSatte,action){
    switch(action.type) {
        case SET_DATA_DASHBOARD:
            return({...state,...action.payload});
        default:return state;
    }
}
