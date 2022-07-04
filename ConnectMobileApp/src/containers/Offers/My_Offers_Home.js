import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Alert
} from 'react-native';
import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import PencilIcon from '../../../assets/svg/penciliconwithCircle.svg';
import fontfaimly from '../../utility/Font-Declarations';
import TopHeader from '../../Header/TopHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
const My_Offers_Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#F7FCFF'}}>
      <TopHeader
        name={'My Offers'}
        firstIcon={'menu'}
        secondIcon={'search'}
        thirdIcon={'filter-list'}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: 20,

          flex: 1,
        }}>
        <Card
          style={{
            minWidth: 100,
            // height: '40%',
            maxHeight: '90%',
            padding: 10,
            justifyContent: 'center',
            borderRadius: 8,
            elevation: 5,
          }}
          mode="elevated">
          <Text
            style={{
              fontFamily: fontfaimly.Alte_DIN,
              fontSize: 14,
              color: '#000000',
              opacity: 50,
            }}>
            Total offers
          </Text>
          <Text
            style={{
              fontFamily: fontfaimly.Alte_DIN,
              fontSize: 20,
              color: '#000000',
              opacity: 100,
            }}>
            101K
          </Text>
        </Card>

        <Card
          style={{
            // flex:1,
            minWidth: 100,
            //height: '40%',
            maxHeight: '90%',
            padding: 10,
            justifyContent: 'center',
            borderRadius: 8,
            elevation: 5,
          }}
          mode="elevated">
          <Text
            style={{
              fontFamily: fontfaimly.Alte_DIN,
              fontSize: 14,
              color: '#00A049',
              opacity: 100,
            }}>
            Active Offers
          </Text>
          <Text
            style={{
              fontFamily: fontfaimly.Alte_DIN,
              fontSize: 20,
              color: '#000000',
              opacity: 100,
            }}>
            2.3K
          </Text>
        </Card>

        <Card
          style={{
            minWidth: 100,
            //height: '50%',
            maxHeight: '90%',
            padding: 10,
            justifyContent: 'center',
            borderRadius: 8,
            elevation: 5,
          }}
          mode="elevated">
          <Text
            style={{
              fontFamily: fontfaimly.Alte_DIN,
              fontSize: 14,
              color: '#000000',
              opacity: 50,
            }}>
            Expired
          </Text>
          <Text
            style={{
              fontFamily: fontfaimly.Alte_DIN,
              fontSize: 20,
              color: '#000000',
              opacity: 100,
            }}>
            101K
          </Text>
        </Card>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',

          flex: 6,
          paddingTop: 20,
        }}>
        <Card
          style={{
            borderRadius: 8,
            borderColor: '#00000017',
            elevation: 5,

            minHeight: 350,
            minWidth: 350,
          }}
          mode="elevated">
          {/* <Card.Actions>
       <Icon name='edit'/>
      </Card.Actions> */}
      
          <Card.Cover
            style={{borderTopEndRadius: 9}}
            source={{uri: 'https://picsum.photos/700'}}
          />
           <Text style={{color:'#000000',fontSize:18,opacity:100,fontFamily:fontfaimly.Alte_DIN,paddingTop:10}}>Need A Car ?</Text>
          <View
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              elevation: 10,
            }}>
            <TouchableOpacity onPress={() => chooseFile()}>
              <PencilIcon height={50} width={50} />
            </TouchableOpacity>
            <Pressable onPress={()=>Alert.alert('hello')}>
              <View
                style={{
                  minWidth: 80,
                  minHeight: 80,
                  backgroundColor: '#0070FC',
                  top: 240,
                 right:-9,
                  borderRadius: 100 / 2,
                alignItems:'center',
                justifyContent:'center',
                position:'absolute'
                  
                }}>
                    <Icon name='local-offer' color={'#FFFFFF'} borderColor={'#fff0'} size={30}/>
                </View>
            </Pressable>
          </View>
          <Card.Content>
            <Text
              style={{
                paddingTop: 10,
                fontFamily: fontfaimly.Poppins,
                left: 0,

                fontSize: 14,
              }}>
              {postMessage}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Icon name="event" size={20} color={'#5F6368'} />
                <Text
                  style={{
                    fontFamily: fontfaimly.Poppins,
                    fontSize: 14,
                    color: '#5F6368',
                    padding: 5,
                  }}>
                  Vailid Till :
                </Text>
                {/* // Date from the vailidity */}
                <Text
                  style={{
                    fontFamily: fontfaimly.Poppins,
                    fontSize: 14,
                    color: '#5F6368',
                  }}>
                  22nd feb’ 22
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default My_Offers_Home;

const styles = StyleSheet.create({});
