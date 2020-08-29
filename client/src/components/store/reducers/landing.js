import {SET_DATA_LANDING} from "../actions";

const initSatte = {
    participants:0,
    newEth:0,
    incomeUsd:0,
    TotalParticipants:0,
};


export default  function(state= initSatte,action){
        switch(action.type) {
            case SET_DATA_LANDING:
                return({...state,...action.payload});
            default:return state;
        }
}
