import {StyleSheet, Text, View, FlatList, SafeAreaView ,TouchableOpacity} from 'react-native';
import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import PencilIcon from '../../../assets/svg/penciliconwithCircle.svg'
import fontfaimly from '../../utility/Font-Declarations';
import TopHeader from '../../Header/TopHeader';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { loadpostlistdata } from '../../actions/PostListAction';
import {useDispatch, useSelector} from 'react-redux';
const MyPostHome = () => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
  return (
    <View style={{flex: 1, backgroundColor: '#F7FCFF'}}>
      <TopHeader
        name={'My Posts'}
        firstIcon={'menu'}
        secondIcon={'search'}
        thirdIcon={'filter-list'}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: 15,
        }}>
        <Card
          style={{
            width: 100,
            height: 68,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            elevation: 5,
          }}
          mode="elevated">
          <Text>Total Posts</Text>
          <Text>2.3K</Text>
        </Card>

        <Card
          style={{
            width: 100,
            height: 68,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            elevation: 5,
          }}
          mode="elevated">
          <Text>Total Posts</Text>
          <Text>2.3K</Text>
        </Card>

        <Card
          style={{
            width: 100,
            height: 68,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            elevation: 5,
          }}
          mode="elevated">
          <Text>Total Posts</Text>
          <Text>2.3K</Text>
        </Card>
      </View>
      <View style={{alignItems:'center',paddingTop:20}}>
      <FlatList
        data={DATA}
        
          renderItem={({ item }) => (
           
            <Card
            style={{
              borderRadius: 8,
              borderColor: '#00000017',
              elevation: 5,
              width: 350,
              height: 312,
            
            }}
            mode="elevated">
            {/* <Card.Actions>
       <Icon name='edit'/>
      </Card.Actions> */}
            <Card.Cover
              style={{borderTopEndRadius:9}}
              source={{uri: 'https://picsum.photos/700'}}
            />
            <View
              style={{
                
                position: 'absolute',
                top: 10,
                right: 10,
                elevation: 10,
              }}>
                <TouchableOpacity onPress={()=> chooseFile() }>
              <PencilIcon height={50} width={50}/>
              </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => alert('show complete details')}
                  style={{
                    backgroundColor: '#0E0071',
                    with: '100%',
                    height: '60%',
                    borderRadius: 6,
                    justifyContent: 'center',
                    //alignItems:'center',
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: fontfaimly.Alte_DIN,
                      color: '#FFFFFF',
                      fontSize: 14,
                    }}>
                    LEARN MORE
                  </Text>
                </TouchableOpacity>
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
          )}
        keyExtractor={item => item.id}
      />
      <View style={{width:100,height:100,backgroundColor:'#0070FC'}}></View>
      </View>
      
    </View>
  );
};

export default MyPostHome;

const styles = StyleSheet.create({});
