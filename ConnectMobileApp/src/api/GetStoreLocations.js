import {
  API_URL_DEV,
  API_URL_STAGING,
  ACCESS_TOKEN,
} from '../utility/Config_File';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * getStoreLocations this func is used for to get assigned location list.
 * *
 */
// const getStoreLocations = async () => {
//     const token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTQ3NzU3MTIsImRhdGEiOnsiaWQiOjUxMSwibW9iaWxlX251bWJlciI6Ijg3NTA4NzI5OTAiLCJuYW1lIjoiVG9ueSIsInJvbGVfaWQiOjEsImlzX3NpX3VzZXIiOjB9LCJpYXQiOjE2NTQxNzA5MTJ9.tGk2hwAQktTZFcDH0JCo1nz1yiezTqT8cCjC8olkEOk

//     const response = await fetch(API_URL_DEV + '/user/auth/get-locations', {
//         method: 'get',
//         headers:{
//             Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTQ3NzU3MTIsImRhdGEiOnsiaWQiOjUxMSwibW9iaWxlX251bWJlciI6Ijg3NTA4NzI5OTAiLCJuYW1lIjoiVG9ueSIsInJvbGVfaWQiOjEsImlzX3NpX3VzZXIiOjB9LCJpYXQiOjE2NTQxNzA5MTJ9.tGk2hwAQktTZFcDH0JCo1nz1yiezTqT8cCjC8olkEOk'
//               //'Bearer ' + (await AsyncStorage.getItem('@access_token',token)),
//           },
//     })
//       const data = response.json()

//       if (response.status > 400) {
//           throw new Error(data.errors)
//       }
//       return data;
// }

const GetStoreLocations = async () => {

  //Storing key
  await AsyncStorage.setItem('@access_token', ACCESS_TOKEN);
  
  
  //getting key
  await fetch(API_URL_DEV + '/user/auth/get-locations', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer'+(await AsyncStorage.getItem('@access_token')),
      // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTQ3NzU3MTIsImRhdGEiOnsiaWQiOjUxMSwibW9iaWxlX251bWJlciI6Ijg3NTA4NzI5OTAiLCJuYW1lIjoiVG9ueSIsInJvbGVfaWQiOjEsImlzX3NpX3VzZXIiOjB9LCJpYXQiOjE2NTQxNzA5MTJ9.tGk2hwAQktTZFcDH0JCo1nz1yiezTqT8cCjC8olkEOk',
      //'Bearer ' + (await AsyncStorage.getItem('@access_token',token)),
    },
  })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData);
      return responseData;
    })
    .catch(error => {
      console.error(error);
    });
};
export {GetStoreLocations};
