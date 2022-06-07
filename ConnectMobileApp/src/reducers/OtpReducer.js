
import { CONSTANT } from "../utility/Constant";
import { combineReducers } from "redux";

const otpDataReducer = (state = '', action) => {

    if(action.type == CONSTANT.OTP_DATA_SUCCESS) {
        return action.payload;
    }

    if(action.type == CONSTANT.Resend_OTP_DATA_SUCCESS) {
        return action.payload;
    }

    if (action.type == CONSTANT.OTP_DATA_ERROR) {
        return action.payload;
    }

    if (action.type == CONSTANT.Resend_OTP_DATA_ERROR) {
        return action.payload;
    }
    return state;

}
export default otpDataReducer;


