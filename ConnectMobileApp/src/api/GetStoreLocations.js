import {API_URL_DEV,API_URL_STAGING} from '../utility/Config_File'

/**
 * getStoreLocations this func is used for to get assigned location list.
 * * 
 */
const getStoreLocations = async () => {

    const response = await fetch(API_URL_DEV + '/user/auth/get-locations', {
        method: 'get',
        headers:{
            Authorization:
              'Bearer ' + (await AsyncStorage.getItem('@access_token')),
          },
    })
      const data = response.json()

      if (response.status > 400) {
          throw new Error(data.errors)
      }
      return data;
}
export {getStoreLocations}