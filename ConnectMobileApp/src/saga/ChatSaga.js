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
import { getChatList } from '../api/ChatApi';
import { getError, getResponse } from '../actions/ChatAction';

/*
**
*
** Worker Saga...
** Please add comment with input/output. 
* @param {*} action 
*
** 
*/

function* handleChatResponseData(action) {
    try {
        const data = yield call(getChatList,
            action.is_important, 
            action.location_id, 
            action.unread, 
            action.order_by, 
            action.chat_status, 
            action.pagination, 
            action.other_chat, 
            action.user_id
        );
        console.log('Chat Data Response', data)
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


export default function* ChatDataWatcherSaga() {
    console.log('Chat Data Saga Watcher')
    yield takeEvery(CONSTANT.CHAT_DATA, handleChatResponseData)
}