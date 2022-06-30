

import { API_URL_STAGING } from '../utility/Config_File'
import { CONSTANT } from '../utility/Constant';
import { otpResponse_Storage_Key } from '../utility/Constant'
import { getOtpResponse } from '../utility/StorageClass'
import NavigationString from '../utility/NavigationString';
import {useNavigation} from '@react-navigation/native';

const getUserdata = async () => {

    /****** get token from store asy class... */
    const token_Value = await getOtpResponse(otpResponse_Storage_Key)
    const navigation = useNavigation();

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
    if (response.status == 401) { 
        navigation.navigate(NavigationString.LOGIN)
        
    }
    return data;
}

export { getUserdata }

