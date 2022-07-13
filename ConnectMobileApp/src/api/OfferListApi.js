// import {API_URL_STAGING} from '../utility/Config_File';
// import {getOtpResponse} from '../utility/StorageClass';
// import {otpResponse_Storage_Key} from '../utility/Constant';

// const getofferlist = async location_id => {
//   const bodyRawData = {
//     //location_id: location_id,
//   };

//   const token_Value = await getOtpResponse(otpResponse_Storage_Key);

//   const response = await fetch(API_URL_STAGING + '/offer/list', {
//     method: 'GET',
//     body: JSON.stringify(bodyRawData),
//     headers: {
//       Authorization: `Bearer ${token_Value.token}`,
//     },
//   });
//   const data = response.json();
//   console.log('Add NEW Offer List RESPONCE  == ', data);

//   if (response.status > 400) {
//     throw new Error(data.errors);
//   }
//   return data;
// };

// export {getofferlist};


import { API_URL_STAGING } from '../utility/Config_File'
import { CONSTANT } from '../utility/Constant';
import { otpResponse_Storage_Key } from '../utility/Constant'
import { getOtpResponse } from '../utility/StorageClass'
import {signOut} from '../navigation/Routes'


const getofferlist = async (master_outlet_id , store_code) => {

    const token_Value = await getOtpResponse(otpResponse_Storage_Key)

    var query = `?master_outlet_id=${master_outlet_id}&store_code=${store_code}`


    /****** get token from store asy class... */

    var api_url = API_URL_STAGING + '/offer/list' + query;
    console.log('Offer List Data : ', api_url)

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
    console.log('Offer list API Data : ', data)


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

export { getofferlist }



