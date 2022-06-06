
import { CONSTANT } from "../utility/Constant";
import { combineReducers } from "redux";

const StoreLocationDataReducer = (state = '', action) => {

    if(action.type == CONSTANT.STORE_SUCCESS) {
        return action.payload;

    }
    if (action.type == CONSTANT.STORE_ERROR) {
        return action.payload;
    }
    return state;

}

export default StoreLocationDataReducer;
