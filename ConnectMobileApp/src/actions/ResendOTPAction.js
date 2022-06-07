
import { CONSTANT } from "../utility/Constant";

const loadOtpData_Resend = (mobileNumber) => ({
    type: CONSTANT.Resend_OTP_DATA,mobileNumber
})

const getError_Resend = payload => ({
    type: CONSTANT.Resend_OTP_DATA_ERROR,
    payload
})

const getResponse_Resend = payload => ({
    type: CONSTANT.Resend_OTP_DATA_SUCCESS,
    payload
})


export {
    loadOtpData_Resend,
    getError_Resend,
    getResponse_Resend,
}