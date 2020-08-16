import {createStore} from "redux";
import Reducer from "./reducers";
export const Store = createStore(Reducer);
