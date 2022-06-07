

import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANT } from '../utility/Constant'
import { getError, getResponse } from '../actions/OtpScreenAction'
import { verifyOTP } from '../api/VerifyOTP'
import { ResendOTP } from '../api/ResendOTP'


//Worker Saga...
/**
 * Please add comment with input/output. 
 * @param {*} action 
 */
function* handleOtpDataResponse(action) {
    try {
        const data = yield call(verifyOTP,action.mobileNumber,action.otp)
        console.log('OTP Screen Response', data)
        yield put(getResponse(data))
    }
     catch(errors) {
         yield put(getError(errors.toString()))
     }
}

//Watcher Saga...

export default function* OtpDataWatcherSaga() {
    console.log('OTP Screen Saga Watcher')
    yield takeEvery(CONSTANT.OTP_DATA, handleOtpDataResponse)

}
