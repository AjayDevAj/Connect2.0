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

import {API_URL_STAGING} from '../utility/Config_File'
import { CONSTANT } from '../utility/Constant';

const getLogin = async (mobileNumber) => {
    let controller = new AbortController();
    setTimeout(() => controller.abort(), 20000);

    /*
    **
    *
    ** constant defined to get otp from an api
    *
    ** 
    */

    

    const bodyData = new FormData(); 
    bodyData.append('phonenumber',mobileNumber)
    try {
    const response = await fetch(API_URL_STAGING + '/user/auth/getOTP', {
        method: 'POST',
        body:bodyData,
        signal: controller.signal

    })

    const data = response.json()
    console.log('mobile : ',data)
   
    if (response.status > 400) {
        throw new Error(data.errors)
    }
    return data;

} catch(err) {
    if (err.name == 'AbortError') { // handle abort()
      alert("Aborted!");
    } else {
      throw err;
    }
  }
}

export {getLogin}
   

     
