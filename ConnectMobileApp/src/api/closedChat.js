

import { API_URL_STAGING } from '../utility/Config_File'
import { otpResponse_Storage_Key } from '../utility/Constant'
import { getOtpResponse } from '../utility/StorageClass'
import {signOut} from '../navigation/Routes'


const closedChat = async (chat_status,conversation_id) => {

    /****** get token from store asy class... */
    const token_Value = await getOtpResponse(otpResponse_Storage_Key)

    var api_url = API_URL_STAGING + '/message/open-close-message';
    var headers = {
        Authorization:
        `Bearer ${token_Value.token}`,
        'Content-Type': 'application/json',
    }

    const bodyRawData = {
        "chat_status": chat_status,
        "conversation_id": conversation_id,
    };

    const response = await fetch(api_url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(bodyRawData),
    });

    const data = response.json()
    console.log('Close chat API data : ', data)

    switch (response.status) {
      case response.status > 400:
        throw new Error(data.errors);
        break
      case 204:
        throw new Error("NO Data")
        break
      case 401:
        signOut()
      default: break
    }
    return data;
}

export { closedChat }