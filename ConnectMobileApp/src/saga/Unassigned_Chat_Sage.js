/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: ResendOTP.js
** UsedFor: Resend OTP Screen Saga at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
** Resend OTP Screen Saga component
** ==========================================================
*
**
*/


/*
**
*
** Common react packages import
*
** 
*/

import { put, call, takeEvery } from 'redux-saga/effects'
import { CONSTANT } from '../utility/Constant'
import { getError_Unassigned_Chat, getResponse_Unassigned_Chat } from '../actions/Unassigned_Chat_Action'
import { Unassigned_Chat } from '../api/Unassigned_Chat'



/*
**
*
** //Worker Saga...
** Please add comment with input/output.
* @param {*} action 
*
** 
*/

function* handleResendOtpDataResponse() {
    try {
        const data = yield call(Unassigned_Chat)
        console.log('OTP Screen Resend Response', data)
        yield put(getResponse_Unassigned_Chat(data))
    }
     catch(errors) {
         yield put(getError_Unassigned_Chat(errors.toString()))
     }
}


/*
**
*
** Watcher Saga...
*
** 
*/


export default function* ResendOtpDataWatcherSaga() {
    console.log('OTP Screen Saga Watcher Resend')
    yield takeEvery(CONSTANT.Unassigned_Chat_Data, handleResendOtpDataResponse)
}