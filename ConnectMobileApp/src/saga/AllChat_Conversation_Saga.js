import {take, put, call, takeLatest, takeEvery} from 'redux-saga/effects';
import {CONSTANT} from '../utility/Constant';
import {getAll_Conversation} from '../api/All_Chat_messages';
import {
  AllChat_Conversation_Error,
  AllChat_Conversation_Response,
} from '../actions/AllChat_Conversation_Action';

function* handleAllChat_ConversationResponse(action) {
  try {
    const data = yield call(
      getAll_Conversation,
      action.conversation_id,
      action.page,
      action.sub_conversation_id,
      action.view_Own_Chat,
      action.chat_status,
      action.chat_status_type,
    );

    yield put(AllChat_Conversation_Response(data));
  } catch (errors) {
    yield put(AllChat_Conversation_Error(errors.toString()));
  }
}

export default function* AllChat_ConversationDataWatcherSaga() {
  yield takeEvery(
    CONSTANT.loadAllChat_Conversation_Data,
    handleAllChat_ConversationResponse,
  );
}
