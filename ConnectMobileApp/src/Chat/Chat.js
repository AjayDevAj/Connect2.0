/*
 **
 *
 ** ========================================================
 **
 ** AppName: Connect2.0
 ** Version: X.0.0
 ** FileName: Chat.js
 ** UsedFor: Chat at connect 2.0 app
 ** Author:
 **
 ** ========================================================
 *
 **
 **
 *
 ** ==========================================================
 **                  Chat component
 ** ==========================================================
 *
 **
 */

import React, {useEffect,useState} from 'react';
import {View} from 'react-native';
import TopHeader from '../Header/TopHeader';
import HeaderNotification from '../Header/HeaderNotification';
import chatStyles from './styles/ChatStylesheet';
import {SegmentComponent} from '../component/SegmentComponent';
import {useSelector, useDispatch} from 'react-redux';
import {loadChatData} from '../actions/ChatAction';
import ChatList from '../Chat/ChatList';
import navigationString from '../utility/NavigationString';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../utility/Loader';

const Chat = ({navigation}) => {
  const isFocused = useIsFocused();

  const menuHandler = () => {
    console.log('Menu Handler');
    alert('Menu Handler');
  };

  const searchHandler = () => {
    alert('Search Handler');
  };

  const filterHandler = () => {
    alert('Filter Handler');
  };
  const dispatch = useDispatch();
  const chatResponseData = useSelector(store => store.ChatResponseData);

  useEffect(() => {
    if (isFocused) {
      callAPI()
    }
  },[isFocused]);
  useEffect(() => {  
  }, [chatResponseData]);

  const callAPI = (type ='open' ) => {
    dispatch(loadChatData(0, null, 0, 'DESC', type, 1, 0, 557));
  }

  return (
    <View style={chatStyles.chatMainContainer}>
      <TopHeader
        firstIcon="menu"
        secondIcon="search"
        thirdIcon="filter-list"
        name="My Chats"
        menuHandler={menuHandler}
        searchHandler={searchHandler}
        filterHandler={filterHandler}
      />
      
      <SegmentComponent onClickSegmentChanged={value => callAPI(value)} />
     
      {chatResponseData.data != undefined &&
        chatResponseData.data.otherMessageCount != undefined && (
          <HeaderNotification
            left="people"
            message={`${chatResponseData.data.otherMessageCount} Open chats with team`}
            right="chevron-right"
            openAllChat={() =>
                navigation.navigate(navigationString.AllChat)
            }
          />
        )}
       
       {(chatResponseData.data != null )&&
        <ChatList onPress_Chat={(selected_Item) => 
          // console.log('testObj',testObj)
          navigation.navigate(navigationString.Message,{selected_Item})

        } data={
          chatResponseData.data.result
        }/>
      }
    </View>
  );
};

export default Chat;
