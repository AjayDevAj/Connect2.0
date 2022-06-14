

import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANT } from '../utility/Constant'
import { getAccept_RejectChat_Error, getAccept_RejectChat_Response } from '../actions/AcceptRejectChatAction'
import { getAcceptRejectChatData } from '../api/AcceptRejectChatApi'

/************** Worker Saga... ***************/

function* handleAcceptRejectChatDataResponse(action) {
    try {
        const data = yield call(getAcceptRejectChatData.action.conversation_id, action.is_important)
        yield put(getAccept_RejectChat_Response(data))
    }
    catch(errors) {
        yield put(getAccept_RejectChat_Error(errors.toString()))
    }
}

/************** Watcher  Saga... ***************/

export default function* AcceptRejectChatDataWatcherSaga() {
    yield takeEvery(CONSTANT.ACCEPT_REJECT_CHAT_DATA, handleAcceptRejectChatDataResponse)
}