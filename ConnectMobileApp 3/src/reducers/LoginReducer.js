
import { CONSTANT } from "../containers/Constant";
import { combineReducers } from "redux";

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
})

export default rootReducers;
