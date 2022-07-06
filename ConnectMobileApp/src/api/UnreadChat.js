

import { API_URL_STAGING } from '../utility/Config_File'
import { otpResponse_Storage_Key } from '../utility/Constant'
import { getOtpResponse } from '../utility/StorageClass'

const mark_Unread_Chat = async (conversation_id) => {

    /****** get token from store asy class... */
    const token_Value = await getOtpResponse(otpResponse_Storage_Key)

    const bodyRawData = {
        "conversation_id": conversation_id, //d77fde6b41494837f42b8e26
        "is_seen": 0, //1
    };

    console.log('Message importent mark ', bodyRawData)
    var api_url = API_URL_STAGING + '/message/read-unread-message';
    var headers = {
        Authorization:
            `Bearer ${token_Value.token}`,
        'Content-Type': 'application/json',
    }

    const response = await fetch(api_url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(bodyRawData),
    })

    const data = response.json()
    console.log('isImportant API data : ', data)

    switch (response.status) {
        case response.status > 400:
            throw new Error(data.errors);     
            break
        case 204:
            throw new Error("NO Data")
            break
        case 401:
            navigator.navigate(NavigationString.LOGIN)
   
        default: break
    }

    return data;
}

export { mark_Unread_Chat }

