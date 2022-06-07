
import { CONSTANT } from "../utility/Constant";
import { combineReducers } from "redux";
import otpDataReducer from './OtpReducer'

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
    OtpResponceData: otpDataReducer
})

export default rootReducers;
