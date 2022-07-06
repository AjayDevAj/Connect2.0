/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: CustomerApi.js
** UsedFor: Customer API Calls at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ====================================================================
**                  Customer API Calls
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

import { API_URL_STAGING } from '../utility/Config_File'
import { getOtpResponse } from '../utility/StorageClass'
import { otpResponse_Storage_Key } from '../utility/Constant'
import { Alert } from 'react-native'



/*
**
*
** getCustomerList func is used for getting message list.
*
**
*
** @param {*} Required!
*
** 
*/

const getCustomerList = async (
    intent_id = '',
    entry_point = 0,
    channel = '',
    date_range = 0,
    location_id = '',
    chat_status = '',
    contact_details = '',
    assigned_to = 0,
    page = 0,
    user_page = 0,
    interest_page = 0,
    searchLocation = '',
    searchUser = '',
    interest = '',
    from_date = '',
    to_date = '',
    search = '',
    order_by = ''
) => {
    const token_Value = await getOtpResponse(otpResponse_Storage_Key)

    /*
    **
    *
    ** constant defined to get chat list from an api
    *
    ** 
    */

    var api_url = API_URL_STAGING + '/crm/customer-list?order_by=' + order_by;
    search !== null ? api_url = api_url + '&search=' + search : api_url = api_url

    console.log('API url', api_url);
    var headers = {
        Authorization:
            `Bearer ${token_Value.token}`,
        'Content-Type': 'application/json',
    }

    const response = await fetch(api_url, {
        method: 'GET',
        headers: headers,
        // body: JSON.stringify(bodyRawData),
    });

    /*
    **
    *
    ** data from the get chat list api
    *
    ** 
    */

    const data = response.json();
    /*
    **
    *
    ** if response is greater than 400 which means it is throwing error
    *
    ** 
    */
    console.log("Responce ====== ", response)
    switch (response.status) {
        case response.status > 400:
            throw new Error(data.errors);
            break
        case 204:
            throw new Error("NO Data")
            break
        case 401:
    
        default: break
    }
    return data;
}

/*
 **
 *
 ** getLead func is used for getting particular customer data.
 *
 **
 *
 ** @param {*} Required!
 *
 **
 */

 const getLead = async (
    location_id=0,
    id=0,
    conversation_id=''
  ) => {
    const token_Value = await getOtpResponse(otpResponse_Storage_Key);
    
    /*
     **
     *
     ** constant defined to get chat list from an api
     *
     **
     */
  
    var api_url = API_URL_STAGING + '/crm/customer-profile/';
    conversation_id !== ''
      ? (api_url = api_url + '?conversation_id=' + conversation_id)
      : (api_url = api_url);
  
    id > 0
    ? (api_url = api_url + '&id='+ id)
    : (api_url = api_url) 
    
    location_id > 0
    ? (api_url = api_url + '&location_id='+ location_id)
    : (api_url = api_url)  
    
    // alert(api_url)
    var headers = {
      Authorization:
      `Bearer ${token_Value.token}`,
      'Content-Type': 'application/json',
    };
  
    const response = await fetch(api_url, {
      method: 'GET',
      headers: headers
    });
  
    /*
     **
     *
     ** data from the get chat list api
     *
     **
     */
  
    const data = response.json();
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
  
        break;
      case 204:
        throw new Error('NO Data');
        break;
  
      default:
        break;
    }
  
    return data;
  };
  
  /*
  **
  *
  ** sendLead func is used to send customer form data.
  *
  **
  *
  ** @param {*} Required!
  *
  ** 
  */
  
  const sendLead = async (
    name = '',
    mobile_number='',
    email='',
    conversation_id='',
    interests='',
    comments='',
    intents='',
    entry_points='',
    location_id=0,
    id=0
    ) => {
    const token_Value = await getOtpResponse(otpResponse_Storage_Key)
    
    /*
    **
    *
    ** constant defined to get chat list from an api
    *
    ** 
    */
    
    var api_url = API_URL_STAGING + '/crm/save-user-lead';
   
    console.log('API url', api_url);
    var headers = {
        Authorization:
        `Bearer ${token_Value.token}`,
        'Content-Type': 'application/json',
    }
  
    const bodyData = new FormData();
    {name != '' && bodyData.append('name', name)}
    {mobile_number != '' && bodyData.append('mobile_number', mobile_number)}
    {email != '' && bodyData.append('email', email)}
    {conversation_id != '' && bodyData.append('conversation_id', conversation_id)}
    {interests != '' && bodyData.append('interests', interests)}
    {comments != '' && bodyData.append('comments', comments)}
    {intents != '' && bodyData.append('intents', intents)}
    {entry_points != '' && bodyData.append('entry_points', entry_points)}
    {location_id > 0 && bodyData.append('location_id', location_id)}
    {id > 0 && bodyData.append('id', id)}
     console.log('===== Body Raw Data =====', bodyData)
    const response = await fetch(api_url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(bodyData),
    });
  
    /*
    **
    *
    ** data from the get chat list api
    *
    ** 
    */
  
    const data = response.json();
    /*
    **
    *
    ** if response is greater than 400 which means it is throwing error
    *
    ** 
    */
  
    switch (response.status) {
        case response.status > 400 :
            throw new Error(data.errors)
  
            break
        case 204 :
            throw new Error("NO Data")
            break
  
        default:break
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
  
  export {
    getCustomerList,
    getLead,
    sendLead
  }