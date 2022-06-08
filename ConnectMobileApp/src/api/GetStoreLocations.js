/*
**
*
** ================================================================
** AppName: Connect2.0
** Version: X.0.0
** FileName: GetStoreLocations.js
** UsedFor: Get store location at connect 2.0 app
** Author:
** ================================================================
*
**
**
*
** ================================================================
** Get store location api file to control all location after login
** ================================================================
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
** getStoreLocations this func is used for to get assigned location list.
*
** 
*/

const getStoreLocations = async () => {

    /*
    **
    *
    ** constant defined to get location from an api
    *
    ** 
    */

    const response = await fetch(API_URL_DEV + '/user/auth/get-locations', {
        method: 'get',
        // headers:{
        //     Authorization:
        //     //   'Bearer ' + (await AsyncStorage.getItem('@access_token')),
        //   },
    })

    /*
    **
    *
    ** data from the get location api
    *
    ** 
    */

    const data = response.json()

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
** so that it could be imported in storelocation file 
** & can be used as a common constants imported from 
** the constant file 
*
** 
*/

export {getStoreLocations}