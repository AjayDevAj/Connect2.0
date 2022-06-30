

import {API_URL_STAGING} from '../utility/Config_File'
import { CONSTANT } from '../utility/Constant';
import {otpResponse_Storage_Key} from '../utility/Constant'
import {getOtpResponse} from '../utility/StorageClass'
import NavigationString from '../utility/NavigationString';
import {useNavigation} from '@react-navigation/native';

const getAcceptRejectChatData = async (conversation_id, is_accept) => {
    const token_Value = await getOtpResponse(otpResponse_Storage_Key)
    const navigation = useNavigation();


    /****** constant defined to get accept reject chat from an api ****/

    /*************  Send Parameter  **************/
    const bodyRawData = {
        "conversation_id": conversation_id, //d77fde6b41494837f42b8e26
        "is_accept": is_accept,  //1
    };

    var api_url = API_URL_STAGING + '/accept-reject-chat';
    var headers = {
        Authorization:
        `Bearer ${token_Value.token}`,
        'Content-Type': 'application/json',
      }

    const response = await fetch(api_url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(bodyRawData),
    })

    const data = response.json()
    console.log('Accept Reject Chat API data : ',data)
   
    if (response.status > 400) {
        throw new Error(data.errors)
    }
    if (response.status == 401) { 
        navigation.navigate(NavigationString.LOGIN)
        
    }
    return data;
}

export {getAcceptRejectChatData}
   
