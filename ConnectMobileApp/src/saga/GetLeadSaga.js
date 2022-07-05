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
import { getLead } from '../api/CustomerApi';
import { getLeadDataError, getLeadDataResponse } from '../actions/CustomerAction';


/*
**
*
** Worker Saga...
** Please add comment with input/output. 
* @param {*} action 
*
** 
*/

function* handleGetLeadResponseData(action) {
    try {
        const data = yield call(getLead,
            action.location_id,
            action.id,
            action.conversation_id,
        );
        yield put(getLeadDataResponse(data))
    }
    catch(errors) {
        yield put(getLeadDataError(errors.toString()))
    }
}


/*
**
*
** Watcher Saga...
*
** 
*/


export default function* GetLeadDataWatcherSaga() {
    yield takeEvery(CONSTANT.GET_LEAD_DATA, handleGetLeadResponseData)
}