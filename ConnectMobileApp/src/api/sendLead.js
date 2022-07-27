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
  
    const bodyRawData = {
      "name": name,
      "mobile_number": mobile_number,
      "email": email,
      "conversation_id": conversation_id,
      "interests": interests,
      "comments": comments,
      "intents": intents,
      "entry_points": entry_points,
      "location_id": location_id,
      "id": id
    };

     console.log('===== Body Raw Data =====', bodyRawData)
    const response = await fetch(api_url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(bodyRawData),
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
  
export { sendLead }