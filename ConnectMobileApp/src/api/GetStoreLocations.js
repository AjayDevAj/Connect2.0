
import {API_URL_DEV,API_URL_STAGING} from '../utility/Config_File'

const getStoreLocations = async () => {
   
    const token_Value = await AsyncStorage.getItem('Token')
    console.log('Store Locations token_Value : ',token_Value)

    const response = await fetch(API_URL_STAGING + '/user/auth/get-locations', {
        method: 'GET',
        headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTU0NjQ1MzIsImRhdGEiOnsiaWQiOjU5OSwibW9iaWxlX251bWJlciI6IjI1NTU1NTU1NTUiLCJuYW1lIjoiU3VraGJpciBTaW5naCBkZXN3YWwiLCJyb2xlX2lkIjoxLCJpc19zaV91c2VyIjowfSwiaWF0IjoxNjU0ODU5NzMyfQ.LD-f0Mylrx7d4tbfHb0MT56800T1WmEr9gKojmVpTn0',
      }
    })
    const data = response.json()
    console.log('Store Locations : ',data)
   
    if (response.status > 400) {
        throw new Error(data.errors)
    }
    return data;
}

export {getStoreLocations}