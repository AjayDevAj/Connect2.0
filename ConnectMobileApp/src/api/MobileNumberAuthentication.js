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



/*
**
*
** getLogin func is used for mobile number authentication.
*
**
*
** @param {*} mobileNumber Required!
*
** 
*/

const getLogin = async (mobileNumber) => {

    /*
    **
    *
    ** constant defined to get otp from an api
    *
    ** 
    */

    const bodyData = new FormData(); 
    bodyData.append('phonenumber',mobileNumber)
    const response = await fetch(API_URL_STAGING + '/user/auth/getOTP', {
        method: 'POST',
        body:bodyData
    })

    /*
    **
    *
    ** data from the get otp api
    *
    ** 
    */

    const data = response.json()
    console.log('mobile : ',data)

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
** so that it could be imported in login file 
** & can be used as a common constants imported from 
** the constant file 
*
** 
*/

export {getLogin}
   

     
