

import { API_URL_STAGING } from '../utility/Config_File'
import { CONSTANT } from '../utility/Constant';
import { otpResponse_Storage_Key } from '../utility/Constant'
import { getOtpResponse } from '../utility/StorageClass'
import {signOut} from '../navigation/Routes'


const getIsImportantData = async (conversation_id, is_important) => {

    /****** get token from store asy class... */
    const token_Value = await getOtpResponse(otpResponse_Storage_Key)

    const bodyRawData = {
        "conversation_id": conversation_id, //d77fde6b41494837f42b8e26
        "is_important": is_important, //1
    };

    console.log('Message importent mark ', bodyRawData)
    var api_url = API_URL_STAGING + '/message/mark-as-important';
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
           signOut()
        default: break
    }
    return data;
}

export { getIsImportantData }

