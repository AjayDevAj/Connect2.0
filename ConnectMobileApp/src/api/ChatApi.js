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

const getChatList = async () => {

    /*
    **
    *
    ** constant defined to get chat list from an api
    *
    ** 
    */

    const bodyData = new FormData(); 
    bodyData.append('is_important',0);
    bodyData.append('location_id',null);
    bodyData.append('unread',0);
    bodyData.append('order_by','DESC');
    bodyData.append('chat_status','open');
    bodyData.append('pagination',1);
    bodyData.append('other_chat',0);
    bodyData.append('user_id',557);

    console.log('Chat Body Data : ',bodyData)

    const response = await fetch(API_URL_STAGING + '/message/message-list', {
        method: 'POST',
        body:bodyData,
        headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTUzOTQ4MjEsImRhdGEiOnsiaWQiOjYyLCJtb2JpbGVfbnVtYmVyIjoiOTQ2NzM5NjQxMiIsIm5hbWUiOiJIaW1hbnNodSBHYXJnIiwicm9sZV9pZCI6MSwiaXNfc2lfdXNlciI6MX0sImlhdCI6MTY1NDc5MDAyMX0.3pLMgVhpWWyIUfO01t8EZYtBZEFiIZcz6rQR7zBQyHY',
          },
    })

    /*
    **
    *
    ** data from the get chat list api
    *
    ** 
    */

    const data = response.json()
    console.log('Chat Message List : ',data)

    /*
    **
    *
    ** if response is greater than 400 which means it is throwing error
    *
    ** 
    */
   
    if (response.status > 400) {
        throw new Error(data.errors)
    }

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
   

     
