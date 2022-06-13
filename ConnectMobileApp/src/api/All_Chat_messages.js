import {API_URL_STAGING} from '../utility/Config_File';
import {getOtpResponse} from '../utility/StorageClass';
import {otpResponse_Storage_Key} from '../utility/Constant'

/**
 * 
 * @param {*} conversation_id 
 * @param {*} sub_conversation_id 
 * @param {*} view_Own_Chat defult is 0. 0 = Own chat, 1 = Other chat
 * @param {*} chat_status defult is 0. 0 = Open chat, 1 = Closed chat
 */

const getAll_Conversation = async (
  conversation_id,
  page,
  sub_conversation_id,
  view_Own_Chat = 0,
  chat_status=0,
  chat_status_type="open"
) => {
  const token_Value = await getOtpResponse(otpResponse_Storage_Key);
  console.log('allChat_Conversation_Data apicall getAll_Conversation',conversation_id,)

  const response = await fetch(
    API_URL_STAGING +
      '/message/' +
      conversation_id +
      '?page=' +
      page +
      '&sub_conversation_id=' +
      sub_conversation_id +
      '&other=' +
      view_Own_Chat +
      '&is_closed=' +
      chat_status +
      '&chat_status=' +
      chat_status_type +
      '&pagination=1',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token_Value.token}`,
      },
    },
  );
  const data = response.json();
  console.log('Gat All message list ', data);

  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

export {getAll_Conversation};
