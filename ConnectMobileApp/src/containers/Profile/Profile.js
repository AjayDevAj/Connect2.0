import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopHeader from '../../Header/TopHeader';
import fontfamily from '../../utility/Font-Declarations';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(247, 252, 255, 1)'}}>
      <TopHeader firstIcon={'menu'} name={'My Profile'} />
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
            Samarth Ahuja {'\n'}
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
            +91 9819667268
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
            paddingBottom:10
          }}>
          Locations Access
        </Text>
        <Text style={{fontFamily:fontfamily.Poppins,color:'rgba(124, 130, 138, 1)'}}>Sikandrabaad</Text>
        <Text style={{fontFamily:fontfamily.Poppins,color:'rgba(124, 130, 138, 1)',paddingTop:5}}>
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
