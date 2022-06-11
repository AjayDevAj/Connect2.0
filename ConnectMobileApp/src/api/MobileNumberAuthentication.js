/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: MobileNumberAuthentication.js
** UsedFor: Mobile Number Authentication at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ====================================================================
** Mobile Number Authentication api file to control all authentications 
** while loggin
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

import {API_URL_DEV,API_URL_STAGING} from '../utility/Config_File'

const getLogin = async (mobileNumber) => {

    const bodyData = new FormData(); 
    bodyData.append('phonenumber',mobileNumber)
    const response = await fetch(API_URL_STAGING + '/user/auth/getOTP', {
        method: 'POST',
        body:bodyData
    })

    const data = response.json()
    console.log('mobile : ',data)
   
    if (response.status > 400) {
        throw new Error(data.errors)
    }
    return data;
}

export {getLogin}
   

     
