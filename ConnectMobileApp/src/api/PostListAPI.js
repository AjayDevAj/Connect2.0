
import { API_URL_STAGING } from '../utility/Config_File'
import { CONSTANT } from '../utility/Constant';
import { otpResponse_Storage_Key } from '../utility/Constant'
import { getOtpResponse } from '../utility/StorageClass'
import {signOut} from '../navigation/Routes';

const getpostlist = async (location_id) => {

    const token_Value = await getOtpResponse(otpResponse_Storage_Key)

    var query = `?location_id=${location_id}`

    /****** get token from store asy class... */

    var api_url = API_URL_STAGING + '/google/gmb-list' + query;
    console.log('Post List Data : ', api_url)

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
    console.log('Post list API Data : ', data)

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

export { getpostlist }


