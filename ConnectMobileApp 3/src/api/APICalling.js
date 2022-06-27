
const BASE_URL = 'https://test-chat-1.starify.co'

const getLogIn = async (mobileNumber) => {
    
    console.log('mobile : ',mobileNumber)
    const bodyData = new FormData();
    bodyData.append('phonenumber',mobileNumber)
    const response = await fetch(BASE_URL + '/user/auth/getOTP', {
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

export { getLogIn }