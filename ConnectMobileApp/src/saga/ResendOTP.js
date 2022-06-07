

import { put, call, takeEvery } from 'redux-saga/effects'
import { CONSTANT } from '../utility/Constant'
import { getError_Resend, getResponse_Resend } from '../actions/ResendOTPAction'
import { resendOTP } from '../api/ResendOTP'

//Worker Saga...
/**
 * Please add comment with input/output. 
 * @param {*} action 
 */
function* handleResendOtpDataResponse(action) {
    try {
        const data = yield call(resendOTP,action.mobileNumber)
        console.log('OTP Screen Resend Response', data)
        yield put(getResponse_Resend(data))
    }
     catch(errors) {
         yield put(getError_Resend(errors.toString()))
     }
}

//Watcher Saga...

export default function* ResendOtpDataWatcherSaga() {
    console.log('OTP Screen Saga Watcher Resend')
    yield takeEvery(CONSTANT.Resend_OTP_DATA, handleResendOtpDataResponse)

}