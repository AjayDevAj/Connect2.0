import {API_URL_DEV, API_URL_STAGING} from '../utility/Config_File';

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
  await fetch(API_URL_DEV + '/user/auth/get-locations', {
    method: 'get',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTQ3NzU3MTIsImRhdGEiOnsiaWQiOjUxMSwibW9iaWxlX251bWJlciI6Ijg3NTA4NzI5OTAiLCJuYW1lIjoiVG9ueSIsInJvbGVfaWQiOjEsImlzX3NpX3VzZXIiOjB9LCJpYXQiOjE2NTQxNzA5MTJ9.tGk2hwAQktTZFcDH0JCo1nz1yiezTqT8cCjC8olkEOk',
    },
  })
    .then(response => response.json())
    .then(responseData => {
      console.log([responseData.data.locations]);
      return responseData;
    })
    .catch(error => {
      console.error(error);
    });
};
export {GetStoreLocations};
