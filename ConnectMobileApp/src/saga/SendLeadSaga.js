/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: CustomerSaga.js
** UsedFor: Customer Saga at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                  Customer Saga component
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

import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { CONSTANT } from '../utility/Constant';
import { sendLead } from '../api/CustomerApi';
import { sendLeadDataError, sendLeadDataResponse } from '../actions/CustomerAction';


/*
**
*
** Worker Saga...
** Please add comment with input/output. 
* @param {*} action 
*
** 
*/

function* handleSendLeadResponseData(action) {
    try {
        const data = yield call(sendLead,
            action.name,
            action.mobile_number,
            action.email,
            action.conversation_id,
            action.interests,
            action.comments,
            action.intents,
            action.entry_points,
            action.location_id,
            action.id,
        );
        yield put(sendLeadDataResponse(data))
    }
    catch(errors) {
        yield put(sendLeadDataError(errors.toString()))
    }
}


/*
**
*
** Watcher Saga...
*
** 
*/


export default function* SendLeadDataWatcherSaga() {
    yield takeEvery(CONSTANT.SEND_LEAD_DATA, handleSendLeadResponseData)
}