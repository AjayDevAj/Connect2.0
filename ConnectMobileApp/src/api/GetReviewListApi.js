
import { API_URL_STAGING } from '../utility/Config_File'
import { otpResponse_Storage_Key } from '../utility/Constant'
import { getOtpResponse } from '../utility/StorageClass'


const GetReviewListApi = async (master_outlet_id, enterprise_client_store_id) => {

    const token_Value = await getOtpResponse(otpResponse_Storage_Key)

    var query = `?master_outlet_id=${master_outlet_id}&enterprise_client_store_id=${enterprise_client_store_id}`

    /****** get token from store asy class... */

    var api_url = API_URL_STAGING + '/review/review-list' + query;
    console.log('OverAllRatingApi API data : ', api_url)

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
    console.log('OverAllRatingApi API data : ', data)

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

export { GetReviewListApi }

