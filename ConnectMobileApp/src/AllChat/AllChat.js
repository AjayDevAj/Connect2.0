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

import React, {useEffect, useState} from 'react';
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
      callAPI()
    }
  }, [isFocused]);
  useEffect(() => {}, [chatResponseData]);

  const callAPI = (type ='open' ) => {
    dispatch(loadChatData(0, null, 0, 'DESC', type, '1', 1, ""));
  }

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
      <SegmentComponent onClickSegmentChanged={value => callAPI(value)} />
      {chatResponseData.data != null && (
        <ChatList data={chatResponseData.data.result} />
      )}
    </View>
  );
};

export default AllChat;
