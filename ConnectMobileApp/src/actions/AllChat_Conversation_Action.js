import {CONSTANT} from '../utility/Constant';

const loadAllChat_Conversation_Data = (
  conversation_id,
  page,
  sub_conversation_id,
  view_Own_Chat = 0,
  chat_status = 0,
  chat_status_type = 'open',
) => ({
  type: CONSTANT.loadAllChat_Conversation_Data,
  conversation_id,
  page,
  sub_conversation_id,
  view_Own_Chat,
  chat_status,
  chat_status_type,
});

const AllChat_Conversation_Error = payload => ({
  type: CONSTANT.loadAllChat_Conversation_ERROR,
  payload,
});

const AllChat_Conversation_Response = payload => ({
  type: CONSTANT.loadAllChat_Conversation_SUCCESS,
  payload,
});

export {
  loadAllChat_Conversation_Data,
  AllChat_Conversation_Error,
  AllChat_Conversation_Response,
};
