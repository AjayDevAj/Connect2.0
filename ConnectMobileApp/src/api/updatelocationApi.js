import {API_URL_STAGING} from '../utility/Config_File';
import {getOtpResponse} from '../utility/StorageClass';
import {otpResponse_Storage_Key} from '../utility/Constant';
import {signOut} from '../navigation/Routes';

const updatelocationApi = async (
  location_id,
  message,
  picture_url,
  link,
  call_to_action,
) => {
  

  var urlencoded = new URLSearchParams();
  urlencoded.append('location_id', location_id);
  urlencoded.append('address1', '22 Haler One');
  urlencoded.append('address2', 'Gadiara One');
  urlencoded.append('mobile_number', '+918194857321');
  urlencoded.append('name', 'Nissan One');
  urlencoded.append('pincode', '122103');
  urlencoded.append('landmark', 'UCO Bank');
  urlencoded.append('locality', 'Sohna');
  const token_Value = await getOtpResponse(otpResponse_Storage_Key);
console.log('Location id-------',location_id)
  const response = await fetch(API_URL_STAGING + '/user/auth/edit-location', {
    method: 'POST',
    body: urlencoded,
    headers: {
      
      Authorization: `Bearer ${token_Value.token}`,
    },
  });
  const data = response.json();
  console.log('Updated Location RESPONCE  == ', data);

  switch (response.status) {
    case response.status > 400:
      throw new Error(data.errors);
      break;
    case 204:
      throw new Error('NO Data');
      break;
    case 401:
      signOut();
    default:
      break;
  }
  return data;
};

export {updatelocationApi};
