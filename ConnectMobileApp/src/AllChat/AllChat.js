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

import React, {useEffect} from 'react';
import {View} from 'react-native';
import TopHeader from '../Header/TopHeader';
import HeaderNotification from '../Header/HeaderNotification';
import chatStyles from './styles/AllChatChatStylesheet';
import {SegmentComponent} from '../component/SegmentComponent';
import {useSelector, useDispatch} from 'react-redux';
import {loadChatData} from '../actions/ChatAction';
import ChatList from '../Chat/ChatList';
import {useIsFocused} from '@react-navigation/native';

const AllChat = ({navigation}) => {
  const menuHandler = () => {
    navigation.goBack();
  };

  const searchHandler = () => {
    alert('Search Handler');
  };

  const filterHandler = () => {
    alert('Filter Handler');
  };
  const dispatch = useDispatch();
  const chatResponseData = useSelector(store => store.ChatResponseData);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(loadChatData(0, null, 0, 'DESC', 'open', '1', 1, 557));
    }
  }, [isFocused]);
  useEffect(() => {}, [chatResponseData]);

  return (
    <View style={chatStyles.chatMainContainer}>
      <TopHeader
        firstIcon="arrow-back"
        secondIcon="search"
        thirdIcon="filter-list"
        name="All Chats"
        menuHandler={menuHandler}
        searchHandler={searchHandler}
        filterHandler={filterHandler}
      />
      <SegmentComponent onClickSegmentChanged={value => console.log(value)} />
      {
        (typeof(chatResponseData.data.result ) !== 'undefined' && value != chatResponseData.data.result )  &&
        <ChatList data={chatResponseData.data.result}/>
      }
      
    </View>
  );
};

export default AllChat;
