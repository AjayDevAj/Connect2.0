

import { API_URL_STAGING } from '../utility/Config_File'
import { CONSTANT } from '../utility/Constant';
import { otpResponse_Storage_Key } from '../utility/Constant'
import { getOtpResponse } from '../utility/StorageClass'

const getUserdata = async (conversation_id, is_important) => {

    /****** get token from store asy class... */
    const token_Value = await getOtpResponse(otpResponse_Storage_Key)

    var api_url = API_URL_STAGING + '/user/auth/get-user-with-role';
    var headers = {
        Authorization:
        `Bearer ${token_Value.token}`,
        'Content-Type': 'application/json',
      }

    const response = await fetch(api_url, {
        method: 'GET',
        headers: headers,
    })

    const data = response.json()
    console.log('isImportant API data : ',data)
   
    if (response.status > 400) {
        throw new Error(data.errors)
    }
    return data;
}

export { getUserdata }

