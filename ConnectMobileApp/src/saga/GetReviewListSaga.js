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
import { GetReviewListApi } from '../api/GetReviewListApi';
import { getError, getResponse } from '../actions/GetReviewListAction';

/*
**
*
** Worker Saga...
** Please add comment with input/output. 
* @param {*} action 
*
** 
*/

function* handleReviewListResponseData(action) {
    try {
        const data = yield call(GetReviewListApi,
            action.master_outlet_id, 
            action.enterprise_client_store_id, 
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


export default function* ReviewListWatcherSaga() {
    // console.log('Chat Data Saga Watcher')
    yield takeEvery(CONSTANT.Get_Review_List_Data, handleReviewListResponseData)
}