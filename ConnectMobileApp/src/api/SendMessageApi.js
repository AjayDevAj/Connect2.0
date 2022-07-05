import {API_URL_STAGING} from '../utility/Config_File';
import {getOtpResponse} from '../utility/StorageClass';
import {otpResponse_Storage_Key} from '../utility/Constant';

const SendMessageApi = async (
  modeType = 'google',
  conversation_id,
  sub_conversation_id,
  message = null,
  media_type = null,
  file = null,
) => {
  const modeType_Url =
    modeType == 'google' ? '/google/send-message' : '/whatsapp/send-message';
  const token_Value = await getOtpResponse(otpResponse_Storage_Key);

  const bodyRawData = {
    conversation_id: conversation_id,
    sub_conversation_id: sub_conversation_id,
    message: message,
  };
  
  var api_url = API_URL_STAGING + modeType_Url;

  var formdata = new FormData();
  formdata.append('conversation_id', conversation_id);
  formdata.append('media_type', 'image');
  formdata.append('sub_conversation_id', sub_conversation_id);
  formdata.append('file', {
    uri: file,
    name: 'img.name',
    type: 'jpg',
  });

  var headers = {
    Authorization: `Bearer ${token_Value.token}`,
    'Content-Type':
      media_type != null ? 'multipart/form-data' : 'application/json',
  };

  console.log('SendMessageApi api ', formdata, headers);
  const response = await fetch(api_url, {
    method: 'POST',
    headers: headers,
    body: media_type != null ? formdata: JSON.stringify(bodyRawData),
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
