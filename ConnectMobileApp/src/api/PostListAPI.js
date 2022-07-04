import {API_URL_STAGING} from '../utility/Config_File';
import {getOtpResponse} from '../utility/StorageClass';
import {otpResponse_Storage_Key} from '../utility/Constant';

const getpostlist = async location_id => {
  const bodyRawData = {
    location_id: location_id,
  };

  const token_Value = await getOtpResponse(otpResponse_Storage_Key);

  const response = await fetch(API_URL_STAGING + '/google/gmb-post', {
    method: 'POST',
    body: JSON.stringify(bodyRawData),
    headers: {
      Authorization: `Bearer ${token_Value.token}`,
    },
  });
  const data = response.json();
  console.log('Add NEW POST RESPONCE  == ', data);

  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

export {getpostlist};
