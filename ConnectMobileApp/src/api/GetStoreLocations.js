
import { API_URL_STAGING } from '../utility/Config_File'
import { getOtpResponse } from '../utility/StorageClass'
import { otpResponse_Storage_Key, appToken } from '../utility/Constant';
import {signOut} from '../navigation/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';


const getStoreLocations = async () => {

    const token_Value = await getOtpResponse(otpResponse_Storage_Key);
    const token = await AsyncStorage.getItem(appToken);
    // alert(token_Value.token);

    const response = await fetch(API_URL_STAGING + '/user/auth/get-locations', {
        method: 'GET',
        headers: {
            Authorization:
                `Bearer ${token}`,
        }
    })
    const data = response.json()
    console.log("Store Location API Data == ", data)

    // if (response.status > 400) {
    //     throw new Error(data.errors)
    // }

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

export { getStoreLocations }