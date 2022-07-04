import {API_URL_STAGING} from '../utility/Config_File';
import {getOtpResponse} from '../utility/StorageClass';
import {otpResponse_Storage_Key} from '../utility/Constant';

const SendMessageApi = async (
  modeType = 'google',
  conversation_id,
  sub_conversation_id,
  message=null,
  media_type = null,
  file = null,
) => {
  const modeType_Url =
    modeType == 'google' ? '/google/send-message' : '/whatsapp/send-message';
  const token_Value = await getOtpResponse(otpResponse_Storage_Key);

  console.log(
    'SendMessageApi api -----',
    conversation_id,'-----',sub_conversation_id,'-----',message,
  );

  const bodyRawData = {
    conversation_id: conversation_id,
    sub_conversation_id: sub_conversation_id
  };
  if (message != null) {
    bodyRawData['message'] = message;
  }
  if (media_type != null) {
    bodyRawData['media_type'] = media_type;
  }

  if (file != null) {
    bodyRawData['file'] = file;
  }
  console.log(
    'SendMessageApi api ',
    bodyRawData,sub_conversation_id,
  );
  var api_url = API_URL_STAGING + modeType_Url;

  

  var headers = {
    Authorization: `Bearer ${token_Value.token}`,
    'Content-Type': media_type != null ? 'multipart/form-data' : 'application/json',
  };

  const response = await fetch(api_url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(bodyRawData),
  });

  const data = response.json();
  console.log(
    'SendMessageApi api testing SendMessageApi Response : Api Call response',
    data,
  );

  if (response.status > 400) {
    console.log('Chat Message Error : ' + data.errors);
    throw new Error(data.errors);
  }

  return data;
};

export {SendMessageApi};
