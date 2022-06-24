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
import { getCustomerList } from '../api/CustomerApi';
import { getError, getResponse } from '../actions/CustomerAction';

/*
**
*
** Worker Saga...
** Please add comment with input/output. 
* @param {*} action 
*
** 
*/

function* handleCustomerResponseData(action) {
    try {
        const data = yield call(getCustomerList,
            action.intent_id,
            action.entry_point,
            action.channel,
            action.date_range,
            action.location_id,
            action.chat_status,
            action.contact_details,
            action.assigned_to,
            action.page,
            action.user_page,
            action.interest_page,
            action.searchLocation,
            action.searchUser,
            action.interest,
            action.from_date,
            action.to_date,
            action.search,
            action.order_by,
        );
        yield put(getResponse(data))
    }
    catch(errors) {
        yield put(getError(errors.toString()))
    }
}


/*
**
*
** Watcher Saga...
*
** 
*/


export default function* CustomerDataWatcherSaga() {
    // console.log('Customer Data Saga Watcher')
    yield takeEvery(CONSTANT.CUSTOMER_DATA, handleCustomerResponseData)
}