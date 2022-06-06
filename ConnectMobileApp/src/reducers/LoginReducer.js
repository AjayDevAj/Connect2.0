
import { CONSTANT } from "../utility/Constant";
import { combineReducers } from "redux";
import StoreLocationDataReducer from "./StoreLocationReducer";

const loginDataReducer = (state = '', action) => {

    if(action.type == CONSTANT.DATA_SUCCESS) {
        return action.payload;

    }
    if (action.type == CONSTANT.DATA_ERROR) {
        return action.payload;
    }
    return state;

}

const rootReducers = combineReducers({
    loginDataResponse: loginDataReducer,
    StoreLocationDataResponse:StoreLocationDataReducer
    
})

export default rootReducers;
