import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import LineChart from '../../component/LineChat';
import fontFamily from '../../utility/Font-Declarations';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Custom_Capsul} from '../../component/CustomCapsul';
import {useSelector, useDispatch} from 'react-redux';
import {dateToFromNowDaily} from '../../utility/CommonFunc'

const Item = () => {
  const [isExpend, SetExpend] = useState(false);
  const OverAllReducer_ResponceData = useSelector(store => store.OverAllReducer_ResponceData);
  return (
    <View style={styles.item}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            fontFamily: fontFamily.Alte_DIN,
            fontSize: 16,
            color: '#0E0071',
          }}>
          Overall Rating
        </Text>
        <TouchableOpacity onPress={() => SetExpend(!isExpend)}>
          <Text
            style={{
              fontFamily: fontFamily.Alte_DIN,
              fontSize: 14,
              color: '#000000',
            }}>
            Rating OverView
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
        <Text
          style={{
            fontFamily: fontFamily.Alte_DIN,
            fontSize: 28,
            color: '#000000',
          }}>
          {OverAllReducer_ResponceData.data.review_data.average_rating}
        </Text>
        <Icon name={'star'} size={21} color={'#FFAA00'} />
      </View>
      <Text
        style={{
          fontFamily: fontFamily.Poppins,
          fontSize: 12,
          color: '#000000',
          marginTop: 5,
        }}>
        {`Based on ${OverAllReducer_ResponceData.data.review_data.total_reviews} Reviews`}
      </Text>
      {isExpend && (
        <View
          style={{
            minHeight: 50,
            paddingTop: 10,
          }}>
          <LineChart title={5}/>
          <LineChart title={4}/>
          <LineChart title={3}/>
          <LineChart title={2}/>
          <LineChart title={1}/>
        </View>
      )}
    </View>
  );
};

const ItemSecond = () => {
  const OverAllReducer_ResponceData = useSelector(store => store.OverAllReducer_ResponceData);

  return (
    <View
      style={[
        styles.item,
        {
          backgroundColor: 'rgba(101, 113, 128, 0.1)',
          height: 140,
        },
      ]}>
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 14,
          },
        ]}>
        <Text
          style={{
            fontFamily: fontFamily.Alte_DIN,
            fontSize: 14,
            color: 'rgba(14, 0, 113, 1)',
            flex: 8,
          }}>
          All Reviews
        </Text>
        <View
          style={[
            {
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            },
          ]}>
          <Icon name={'open-in-new'} size={16} color={'#5F6368'} />
          <Icon name={'save-alt'} size={16} color={'#5F6368'} />
        </View>
      </View>
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        ]}>
        <Custom_Capsul title={'Total Reviews'} count={OverAllReducer_ResponceData.data.review_data.total_reviews}/>
        <Custom_Capsul title={'Replied'} count={OverAllReducer_ResponceData.data.review_data.reviews_reply_count.review_with_reply}/>
        <Custom_Capsul title={'Unreplied'} count={OverAllReducer_ResponceData.data.review_data.reviews_reply_count.review_without_reply}/>
      </View>
    </View>
  );
};

const ItemReview = ({item}) => {
  
  const [isExpend, SetExpend] = useState(item.review_reply);
  const [isReplied, setReplied] = useState(true);
{console.log('item ItemReview',item)}
  return (
    <View
      style={{
        backgroundColor: '#fff',
        minHeight: 150,
        paddingHorizontal: 16,
        marginVertical: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: '#0E0071',
              justifyContent:'center',
              alignItems:'center'
            }}>
               <Text
              style={{
                fontFamily: fontFamily.Alte_DIN,
                fontSize: 15,
                color: '#FFF',
                fontWeight:'bold'
              }}>
              {item.reviewer_name.charAt(0)}
            </Text>
            </View>
          <View style={{paddingHorizontal: 12, justifyContent: 'center'}}>
            <Text
              style={{
                fontFamily: fontFamily.Alte_DIN,
                fontSize: 14,
                color: '#000',
              }}>
              {item.reviewer_name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 5,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: fontFamily.Alte_DIN,
                  color: '#000',
                  fontSize: 15,
                  paddingRight: 10,
                }}>
                {item.rating}
              </Text>
              <Icon name={'star-border'} size={14} color={'#FFAA00'} />
              <Icon name={'star-border'} size={14} color={'#FFAA00'} />
              <Icon name={'star-border'} size={14} color={'#FFAA00'} />
              <Icon name={'star-border'} size={14} color={'#FFAA00'} />
              <Icon name={'star-border'} size={14} color={'#FFAA00'} />
            </View>
          </View>
        </View>
        <Icon name={'sentiment-very-satisfied'} size={24} color={'#FFAA00'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 15,
        }}>
        <Text
          style={{
            color: '#666666',
            fontFamily: fontFamily.Poppins,
            fontSize: 14,
            flex: 9,
          }}>
          {item.review}
        </Text>
        <Text
          style={{
            color: '#000',
            fontFamily: fontFamily.Poppins,
            fontSize: 10,
            flex: 1.5,
            paddingTop: 4,
            
          }}>
          {dateToFromNowDaily(item.review_date)}
        </Text>
      </View>
      {isExpend == null && (
        <TouchableOpacity onPress={() => SetExpend(!isExpend)}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'red',
              height: 25,
              width: 73,
              borderColor: '#A9CEE56E',
              borderWidth: 1,
              backgroundColor: '#F4FBFF',
              borderRadius: 4,
            }}>
            <Text
              style={{
                fontFamily: fontFamily.Poppins,
                fontSize: 12,
                color: '#000',
                paddingRight: 5,
                paddingLeft: 10,
              }}>
              Reply
            </Text>
            <Icon name={'reply'} size={14} color={'#657180'} />
          </View>
        </TouchableOpacity>
      )}
      {isExpend && (
        <View
          style={{
            borderColor: '#67717F2F',
            borderWidth: 1,
            borderRadius: 4,
            minHeight: 32,
            maxHeight: 100,
            paddingLeft: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            //   alignItems:'center',
          }}>
          <TextInput
            placeholder={'Write a reply….'}
            multiline={true}
            style={{
              // backgroundColor: 'red',
              paddingLeft: 8,
              paddingRight: 8,
              flex: 9,
            }}
          />
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Icon name={'send'} size={14} color="#657180" />
          </View>
        </View>
      )}
       {/* <View
        style={{
          flexDirection: 'row',
          borderColor:'#FFE6BF',
          borderWidth:1,
          backgroundColor:'#FFF8EA',
          borderRadius:4,
          paddingHorizontal:16,
          minHeight:45,
          alignItems:'flex-start',
          paddingTop:10
        }}>
        <Icon name={'subdirectory-arrow-right'} size={14} color={'#626C79'} />
        <Text
          style={{
            color: '#666666',
            fontFamily: fontFamily.Poppins,
            fontSize: 14,
            paddingRight:15,
            marginLeft:10
          }}>
          ExcellentExcellentExcellent
        </Text>

        
      </View>
    */}
    </View>
  );
};

const Review_SectionList = ({DATA}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        //  contentContainerStyle={{flexDirection : "row", flexWrap : "wrap",flex:1}}
        data={DATA}
        // keyExtractor={(item, index) => item + index}
        refreshing={true}
        renderItem={({item, index}) =>
        index == 0 ? (
            <Item title={item} />
          ) : index == 1 ? (
            <ItemSecond title={item} />
          ) : (
            <ItemReview item={item} />
          )
        }
        // renderSectionHeader={({section: {title}}) => <></>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  item: {
    paddingTop: 20,
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default Review_SectionList;
