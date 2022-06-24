/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: ChatSaga.js
** UsedFor: Chat Saga at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                  Chat Saga component
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
import { OverAllRatingApi } from '../api/OverAllRatingApi';
import { getError, getResponse } from '../actions/OverAllRatingAction';

/*
**
*
** Worker Saga...
** Please add comment with input/output. 
* @param {*} action 
*
** 
*/

function* handleOverAllResponseData(action) {
    try {
        const data = yield call(OverAllRatingApi,
            action.master_outlet_id, 
            action.enterprise_client_store_id, 
            action.location_id, 
        );
        // console.log('Chat Data Response', data)
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


export default function* OverAllWatcherSaga() {
    // console.log('Chat Data Saga Watcher')
    yield takeEvery(CONSTANT.OverAllRatingData, handleOverAllResponseData)
}