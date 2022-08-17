import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopHeader from '../../Header/TopHeader';
import fontfamily from '../../utility/Font-Declarations';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Getuser from '../../api/Getuser';
import {API_URL_STAGING} from '../../utility/Config_File';
import {getOtpResponse} from '../../utility/StorageClass';
import {otpResponse_Storage_Key} from '../../utility/Constant';

const Profile = ({navigation}) => {
    const [userdata, setuserData] = useState([]);
//   const usr = await getOtpResponse(otpResponse_Storage_Key);
//   console.log('UserID-------->',usr ?.token)
   console.log('data from the use api ====>',userdata )
 const Get_token_userId  = async ()=>{
  const usr = await getOtpResponse(otpResponse_Storage_Key);

   var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${usr ?.token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(API_URL_STAGING + `/user/auth/get-user/${usr.user.id}`, requestOptions)
      .then(response => response.json())
      .then(result => setuserData(result))
      .catch(error => console.log('error', error));
 }


  useEffect(() => {
   Get_token_userId();
  }, []);

  function menuHandler  (){
navigation.openDrawer();
  }

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(247, 252, 255, 1)'}}>
      <TopHeader firstIcon={'menu'} name={'My Profile'} 
      menuHandler={menuHandler}/>
      <View style={{margin: 20}}>
        <View style={{flexDirection: 'row'}}>
          {/* Circle */}
          <View
            style={{
              minWidth: 60,
              minHeight: 60,
              borderRadius: 60 / 2,
              backgroundColor: 'rgba(136, 28, 168, 1)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: fontfamily.Alte_DIN,
                fontSize: 18,
                color: 'white',
              }}>
              SA
            </Text>
          </View>
          <Text
            style={{
              fontFamily: fontfamily.Alte_DIN,
              fontSize: 18,
              paddingTop: 18,
              paddingLeft: 15,
            }}>
            {userdata.data ?.name} {'\n'}
            <Text
              style={{
                fontFamily: fontfamily.Poppins,
                fontSize: 14,
                color: 'rgba(124, 130, 138, 1)',
              }}>
              Manager
            </Text>
          </Text>
        </View>
        {/* Contact */}
        <Text
          style={{
            paddingTop: 30,
            fontFamily: fontfamily.Alte_DIN,
            fontSize: 18,
          }}>
          Contact
        </Text>
        <View style={{flexDirection: 'row', paddingTop: 15}}>
          <Icon name={'call'} size={20} color={'rgba(124, 130, 138, 1)'} />
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: fontfamily.Poppins,
              color: 'rgba(124, 130, 138, 1)',
            }}>
            +91 {userdata.data ?.mobile_number}
          </Text>
        </View>

        <View style={{flexDirection: 'row', paddingTop: 15}}>
          <Icon
            name={'mail-outline'}
            size={20}
            color={'rgba(124, 130, 138, 1)'}
          />
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: fontfamily.Poppins,
              color: 'rgba(124, 130, 138, 1)',
            }}>
            Test@gmail.com
          </Text>
        </View>

        {/* Permissons */}

        <Text
          style={{
            paddingTop: 30,
            fontFamily: fontfamily.Alte_DIN,
            fontSize: 18,
          }}>
          Permissons
        </Text>
        <View style={{flexDirection: 'row', paddingTop: 15}}>
          <Icon name={'forum'} size={20} color={'rgba(0, 175, 80, 1)'} />
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: fontfamily.Poppins,
              color: 'rgba(124, 130, 138, 1)',
            }}>
            Chat with customers
          </Text>
        </View>

        <View style={{flexDirection: 'row', paddingTop: 15}}>
          <Icon name={'groups'} size={20} color={'rgba(124, 130, 138, 1)'} />
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: fontfamily.Poppins,
              color: 'rgba(124, 130, 138, 1)',
            }}>
            Manage Team
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 15}}>
          <Icon
            name={'dashboard-customize'}
            size={20}
            color={'rgba(136, 28, 168, 1)'}
          />
          <Text
            style={{
              paddingLeft: 10,
              fontFamily: fontfamily.Poppins,
              color: 'rgba(124, 130, 138, 1)',
            }}>
            View Dashboard
          </Text>
        </View>

        {/* Locations access */}

        <Text
          style={{
            paddingTop: 30,
            fontFamily: fontfamily.Alte_DIN,
            fontSize: 18,
            paddingBottom: 10,
          }}>
          Locations Access
        </Text>
        <Text
          style={{
            fontFamily: fontfamily.Poppins,
            color: 'rgba(124, 130, 138, 1)',
          }}>
          Sikandrabaad
        </Text>
        <Text
          style={{
            fontFamily: fontfamily.Poppins,
            color: 'rgba(124, 130, 138, 1)',
            paddingTop: 5,
          }}>
          Shop No223,Bisla Road, Krishna ngr Near Jhumka Churaha Moradabad
        </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Titlelabel: {},
});
