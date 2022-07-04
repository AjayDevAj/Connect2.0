
import { API_URL_STAGING } from '../utility/Config_File'
import { getOtpResponse } from '../utility/StorageClass'
import { otpResponse_Storage_Key } from '../utility/Constant'


const SendMessageApi = async (modeType = 'google', conversation_id, message) => {
    const modeType_Url = modeType == 'google' ? '/google/send-message' : '/whatsapp/send-message'
    const token_Value = await getOtpResponse(otpResponse_Storage_Key)

    const bodyRawData = {
        "conversation_id": conversation_id,
        "message": message,
    };
    console.log('SendMessageApi api testing SendMessageApi Response : Api url', modeType_Url
        , bodyRawData,
        token_Value.token);

    var api_url = API_URL_STAGING + modeType_Url

    var headers = {
        Authorization:
            `Bearer ${token_Value.token}`,
        'Content-Type': 'application/json',
    }

    const response = await fetch(api_url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(bodyRawData),
    });

    const data = response.json();
    console.log('SendMessageApi api testing SendMessageApi Response : Api Call response', data);


    if (response.status > 400) {
        console.log('Chat Message Error : ' + data.errors);
        // if (response.status == 401) {
        //     navigation.navigate(NavigationString.LOGIN)
        // }
        // else {
        //     throw new Error(data.errors);
        // }
        throw new Error(data.errors);
    }
    return data;
}

export { SendMessageApi }


