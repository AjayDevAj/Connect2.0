// /message/get-unassigned-chat
import {API_URL_DEV, API_URL_STAGING} from '../utility/Config_File';


export const Unassigned_Chat_Fetch_Call = async (token) => {
  console.log('Chat Body Data otpResponce: ',token);

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
        method: 'get',
        headers: {
          Authorization:
            `Bearer ${token}`,
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
    console.log('Chat Body Data data: ',JSON.stringify(response));

    /*
     **
     *
     ** if response is greater than 400 which means it is throwing error
     *
     **
     */

    if (response.status > 400) {
      throw new Error(data.errors);
    }
    return data;

  // } catch (error) {
  //   console.error(error);
  // }
};
