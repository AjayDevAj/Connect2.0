
import {API_URL_STAGING} from '../utility/Config_File'
import {getOtpResponse} from '../utility/StorageClass'
import {otpResponse_Storage_Key} from '../utility/Constant';
import NavigationString from '../utility/NavigationString';
import {useNavigation} from '@react-navigation/native';

const getStoreLocations = async () => {
   
    const token_Value = await getOtpResponse(otpResponse_Storage_Key)
    const navigation = useNavigation();

    const response = await fetch(API_URL_STAGING + '/user/auth/get-locations', {
        method: 'GET',
        headers: {
        Authorization:
          `Bearer ${token_Value.token}`,
      }
    })
    const data = response.json()
    console.log("Store Location API Data == ", data)
       
    if (response.status > 400) {
        throw new Error(data.errors)
    }
    if (response.status == 401) { 
        navigation.navigate(NavigationString.LOGIN)
        
    }
    return data;
}

export {getStoreLocations}