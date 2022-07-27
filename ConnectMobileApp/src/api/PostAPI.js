
import {API_URL_STAGING} from '../utility/Config_File'
import {getOtpResponse} from '../utility/StorageClass'
import {otpResponse_Storage_Key} from '../utility/Constant'
import {signOut} from '../navigation/Routes';


const getpost = async (location_id,
    message,
    picture_url,
    link,
    call_to_action) => {
   

    const bodyRawData = {
        "location_id": location_id,
        "message": message,
        "picture_url": picture_url,
        "call_to_action": call_to_action,
        "link": link,
       
    };
   
    const token_Value = await getOtpResponse(otpResponse_Storage_Key)
    
    const response = await fetch(API_URL_STAGING + '/google/gmb-post', {
        method: 'POST',
        body: JSON.stringify(bodyRawData),
        headers: {
        Authorization:
          `Bearer ${token_Value.token}`,
      }
    })
    const data = response.json()
    console.log("Add NEW POST RESPONCE  == ", data)
       
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

export {getpost}