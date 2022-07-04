import {API_URL_STAGING} from '../utility/Config_File';
import {getOtpResponse} from '../utility/StorageClass';
import {otpResponse_Storage_Key} from '../utility/Constant';

const getofferlist = async location_id => {
  const bodyRawData = {
    //location_id: location_id,
  };

  const token_Value = await getOtpResponse(otpResponse_Storage_Key);

  const response = await fetch(API_URL_STAGING + '/offer/list', {
    method: 'GET',
    body: JSON.stringify(bodyRawData),
    headers: {
      Authorization: `Bearer ${token_Value.token}`,
    },
  });
  const data = response.json();
  console.log('Add NEW Offer List RESPONCE  == ', data);

  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

export {getofferlist};
