
import { CONSTANT } from "../utility/Constant";

const loadOtpData = (mobileNumber, otp) => ({
    type: CONSTANT.OTP_DATA,mobileNumber,otp
})

const getError = payload => ({
    type: CONSTANT.OTP_DATA_ERROR,
    payload
})

const getResponse = payload => ({
    type: CONSTANT.OTP_DATA_SUCCESS,
    payload
})


export {
    loadOtpData,
    getError,
    getResponse,
}