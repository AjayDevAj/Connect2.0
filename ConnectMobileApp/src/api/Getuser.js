import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {API_URL_STAGING} from '../utility/Config_File';
import {getOtpResponse} from '../utility/StorageClass';
import {otpResponse_Storage_Key} from '../utility/Constant';
import {signOut} from '../navigation/Routes';

const Getuser = async () => {
  const[usrData,setusrData]=useState(null)
 
  //const uri = url.usr.user.id 
  
   const usr = await getOtpResponse(otpResponse_Storage_Key);

    

  
  console.log('getotp response',usrData)
  
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${usr ?.token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };
  
  const [data, setData] = useState(null);
  let url = API_URL_STAGING + `/get-user/${usr.user.id}`
  console.log(usr);
  const response = await fetch (url,requestOptions)
  .then(res => res.json())
  .then(data => setData(data));
  
  return [data];
};

export default Getuser;
