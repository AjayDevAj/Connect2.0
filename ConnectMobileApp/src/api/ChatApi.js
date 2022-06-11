/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: ChatApi.js
** UsedFor: Chat API Calls at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ====================================================================
**                  Chat API Calls
** ====================================================================
*
**
*/



/*
**
*
** import constant data (common data used in overall projects)
*
** 
*/

import { API_URL_DEV, API_URL_STAGING } from '../utility/Config_File'
import {useSelector} from 'react-redux';



/*
**
*
** getChatList func is used for getting message list.
*
**
*
** @param {*} Required!
*
** 
*/

const getChatList = async (is_important, location_id, unread, order_by, chat_status, pagination, other_chat, user_id) => {
    console.log('Chat Body Data otpResponce:');

    const otpResponce = useSelector(store => store.OtpResponceData);

    /*
    **
    *
    ** constant defined to get chat list from an api
    *
    ** 
    */

    // const bodyData = new FormData(); 
    const bodyRawData = {
        "chat_status": chat_status,
        "is_important": is_important,
        "location_id": location_id,
        "order_by": order_by,
        "other_chat": other_chat,
        "pagination": pagination,
        "unread": unread,
        "user_id": user_id
    };

    console.log('Chat Body Data otpResponce: ',otpResponce);

    var api_url = API_URL_STAGING + '/message/message-list';

    var headers = {
        Authorization:
          `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTU0NjkyNjEsImRhdGEiOnsiaWQiOjU1NywibW9iaWxlX251bWJlciI6IjMwMTExMTExMTEiLCJuYW1lIjoiU3VraGJpciBTaW5naCB0aGUgIiwicm9sZV9pZCI6MSwiaXNfc2lfdXNlciI6MH0sImlhdCI6MTY1NDg2NDQ2MX0.RrSEixe6ypsLbm_W1iz7biCFQxmqFpdFz7Sh8ijojqg`,
      }

    const response = await fetch(api_url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(bodyRawData)
    });
    
    /*
    **
    *
    ** data from the get chat list api
    *
    ** 
    */

    const data = response.json();
    // console.log('Chat Message List Response : ',data);

    /*
    **
    *
    ** if response is greater than 400 which means it is throwing error
    *
    ** 
    */
   console.log('response.status',response.status)
    switch (response.status) {
        case response.status > 400 :
            throw new Error(data.errors)

            break
        case 204 :
            throw new Error("NO Data")
            break

        default:break
    }
    // if (response.status > 400) {
    //     // console.log('Chat Message Error : '+ data.errors);
    //     throw new Error(data.errors)
    // }

    return data;
}

/*
**
*
** All the constants defined above will be exported 
** so that it could be imported in chat file 
** & can be used as a common constants imported from 
** the constant file 
*
** 
*/

export {getChatList}
   

     
