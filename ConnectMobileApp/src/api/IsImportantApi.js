

import { API_URL_STAGING } from '../utility/Config_File'
import { CONSTANT } from '../utility/Constant';
import { otpResponse_Storage_Key } from '../utility/Constant'
import { getOtpResponse } from '../utility/StorageClass'

const getIsImportantData = async (conversation_id, is_important) => {

    /****** get token from store asy class... */
    const token_Value = await getOtpResponse(otpResponse_Storage_Key)

    /****** constant defined to get login from an api ****/
    const bodyData = new FormData();
    bodyData.append('conversation_id', "d77fde6b41494837f42b8e26")
    bodyData.append('is_important', 1)

    try {
        const response = await fetch(API_URL_STAGING + '/message/mark-as-important', {
            method: 'POST',
            body: bodyData,
            headers: {
                Authorization:
                    `Bearer ${token_Value.token}`,
            }
        })
        const data = response.json()
        console.log('isImportant API data : ', data)

        if (response.status > 400) {
            throw new Error(data.errors)
        }
        return data;

    } catch (err) {
        console.log("Show Error :::", err)
    }



    // const bodyRawData = {
    //     "conversation_id": "d77fde6b41494837f42b8e26", //d77fde6b41494837f42b8e26
    //     "is_important": 1,  //1
    // };

    // var api_url = API_URL_STAGING + '/message/mark-as-important';
    // var headers = {
    //     Authorization:
    //     `Bearer ${token_Value.token}`,
    //     'Content-Type': 'application/json',
    //   }

    // const response = await fetch(api_url, {
    //     method: 'POST',
    //     headers: headers,
    //     body: JSON.stringify(bodyRawData),
    // })

    // const data = response.json()
    // console.log('isImportant API data : ',data)

    // if (response.status > 400) {
    //     throw new Error(data.errors)
    // }
    // return data;
}

export { getIsImportantData }

