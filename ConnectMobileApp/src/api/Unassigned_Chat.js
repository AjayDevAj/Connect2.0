// /message/get-unassigned-chat
import { API_URL_STAGING } from '../utility/Config_File';
import { otpResponse_Storage_Key } from '../utility/Constant'
import { getOtpResponse } from '../utility/StorageClass'
import {signOut} from '../navigation/Routes';


export const Unassigned_Chat_Fetch_Call = async () => {
  const token_Value = await getOtpResponse(otpResponse_Storage_Key)

  /*
   **
   *
   ** constant defined to unassigned chat from the api
   *
   **
   */
  // try {

  const response = await fetch(
    API_URL_STAGING + '/message/get-unassigned-chat',
    {
      method: 'GET',
      headers: {
        Authorization:
          `Bearer ${token_Value.token}`,
      },
    },
  );

  /*
   **
   *
   ** data from the unassigned chat api
   *
   **
   */

  const data = response.json();
  // console.log('Unassigned Chat Body Data data: ', response.status);

  /*
   **
   *
   ** if response is greater than 400 which means it is throwing error
   *
   **
   */

  switch (response.status) {
    case response.status > 400:
      throw new Error(data.errors);
      break
    case 204:
      throw new Error("NO Data")
    case 401:
      signOut()
    default: break
  }
  return data;

  // } catch (error) {
  //   console.error(error);
  // }
};
