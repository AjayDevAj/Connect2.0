/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: Storelocation.js
** UsedFor: Get Otp Screen at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**    Store location complete view component
** ==========================================================
*
**
*/



/*
**
*
** Common react packages import
*
** 
*/

import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import UpperviewBG from '../../../assets/svg/Group2491.svg';
import styles from './StorleLocationStylesheet';
// import {SwipeablePanel} from 'rn-swipeable-panel';
import fontFamily from '../../utility/Font-Declarations';
import NavigationString from '../../utility/NavigationString';

export default Storelocation = ({navigation}) => {
  const dispatch = useDispatch();
  const LocationResonce = useSelector(store => store.StoreLocationDataResponse);
  const [responceData, setData] = useState([]);
  console.log(responceData);

  useEffect(() => {
    fetch('https://test-chat-1.starify.co/user/auth/get-locations', {
      method: 'get',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTQ3NzU3MTIsImRhdGEiOnsiaWQiOjUxMSwibW9iaWxlX251bWJlciI6Ijg3NTA4NzI5OTAiLCJuYW1lIjoiVG9ueSIsInJvbGVfaWQiOjEsImlzX3NpX3VzZXIiOjB9LCJpYXQiOjE2NTQxNzA5MTJ9.tGk2hwAQktTZFcDH0JCo1nz1yiezTqT8cCjC8olkEOk',
      },
    })
      .then(response => response.json())
      .then(d => setData([...responceData, d]))
      .catch(error => console.error(error));
  }, [LocationResonce]);

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
  });

  const [username, SetuserName] = useState('Priyanka11');
  const [isPanelActive, setIsPanelActive] = useState(true);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(true);
  };

  return (
    <>
      {/* // Uper View */}

      <View style={{flex: 2,backgroundColor:'rgba(247, 252, 255, 1)'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            padding: 30,
          }}></View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            padding: 30,
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 18,
                fontFamily: fontFamily.Alte_DIN,
              }}>
              Welcome to connect{' '}
              <Text
                style={{
                  color: '#0070FC',
                  opacity: 100,
                  fontFamily: fontFamily.Alte_DIN,
                }}>
                {username}!
              </Text>
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fontFamily.Poppins,
            }}>
            You have access to the following locations. You can manage your
            locations in the “locations” option given in the navigation.
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginEnd: 15,
          }}>
          <UpperviewBG/>
        </View>
      </View>

      {/* BottomView */}

      <View
        style={{
          flex: 1.29,
        }}>
        <SwipeablePanel
          barStyle={{backgroundColor: '#2F6EF329'}}
          style={{
            shadowRadius: 5,
            shadowOpacity:0.8,
             shadowOffset: {
                width: 0,
                height: -5,
            },
            elevation: 10,
            // paddingVertical: 20,
            shadowColor:'rgba(47, 110, 243, 0.16)',
            padding:20,
            bottom: -70,
          }}
          // smallPanelHeight={200}
          disableSwipeIcon={false}
          noBackgroundOpacity={true}
          //scrollViewProps={{backgroundColor:'red'}}
          {...panelProps}
          isActive={isPanelActive}>
         <ScrollView>
            {
            responceData.map((item)=>{
              return(
                <View style={{}}>
                  <Text style={{color:'#000000',opacity:100,fontSize:18,fontWeight:'bold',marginTop:15}}>
                    {item.data.locations[0].name}
                  </Text>
                  <Text style={{color:'gray',opacity:70,fontSize:15,marginTop:10}}>
                    {item.data.locations[0].address1+''+item.data.locations[0].address2+''+item.data.locations[0].locality+''+item.data.locations[0].city+' '+item.data.locations[0].pincode+''}
                  </Text>
                  <View style={{width:'99%',height:1, backgroundColor:'#2F6EF329', marginTop: 15}}></View>
                </View>
              )
            })
          }
          </ScrollView>

        </SwipeablePanel>
      </View>
      <View
        style={{
          height: 80,
          // bottom: 20,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationString.RouteTabBar)}
          style={styles.ContinueButton}>
          <Text style={styles.ContinueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
