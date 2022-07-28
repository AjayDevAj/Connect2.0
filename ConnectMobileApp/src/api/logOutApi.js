/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: LogOut.js
** UsedFor: Log out at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ====================================================================
**                      Logout api file
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

import { API_URL_STAGING } from '../utility/Config_File';
import { getOtpResponse } from '../utility/StorageClass';
import { otpResponse_Storage_Key } from '../utility/Constant';

const logOutApi = async () => {
    const token_Value = await getOtpResponse(otpResponse_Storage_Key);

    /****** constant defined to get logout from an api ****/

    var api_url = API_URL_STAGING + '/user/auth/logout';

    var headers = {
        Authorization:
            `Bearer ${token_Value.token}`,
        'Content-Type': 'application/json',
    }

    const bodyData = new FormData();
    bodyData.append('phoneNumber', `${token_Value.user.mobile_number}`);

    var urlencoded = new URLSearchParams();
    
    try {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: headers,
            body: urlencoded,
            redirect: 'follow'
        })
        const data = response.json();

        if (response.status > 400) {
            throw new Error(data.errors)
        }
       
        return data;

    } catch (err) {
        console.log("@LogOut::Exception ", err)
        return err;
    }
}

export { logOutApi }



