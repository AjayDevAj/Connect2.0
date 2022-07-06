
import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { CONSTANT } from '../utility/Constant';
import { SendMessageApi } from '../api/SendMessageApi';
import { send_Chat_Message_Data_Error, send_Chat_Message_Data_Response } from '../actions/Send_Message_Action';

/*
**
*
** Worker Saga...
** Please add comment with input/output. 
* @param {*} action 
*
** 
*/
function* handle_Send_Message_ResponseData(action) {
    try {
        const data = yield call(SendMessageApi,
            action.modeType, 
            action.conversation_id,
            action.sub_conversation_id,  
            action.message, 
            action.media_type, 
            action.file, 
        );
        // console.log('Chat Data Response', data)
        yield put(send_Chat_Message_Data_Response(data))
    }
    catch(errors) {
        yield put(send_Chat_Message_Data_Error(errors.toString()))
    }
}


/*
**
*
** Watcher Saga...
*
** 
*/


export default function* Send_message_WatcherSaga() {
    // console.log('Chat Data Saga Watcher')
    yield takeEvery(CONSTANT.Send_message_DATA, handle_Send_Message_ResponseData)
}