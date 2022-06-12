import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import TopHeader from '../../Header/TopHeader';
import chatStyles from '../../AllChat/styles/AllChatChatStylesheet';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
// import { GiftedChat } from 'react-native-gifted-chat';

const Message = ({navigation,route}) => {
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
  const getDataFromParam = route.params
  useEffect(() => {
  console.log('check value',getDataFromParam)
  }, [isFocused]);
  useEffect(() => {}, [chatResponseData]);

  const callAPI = (type ='open' ) => {
    // dispatch(loadChatData(0, null, 0, 'DESC', type, '1', 1, ""));
  }

  return (
    <View style={chatStyles.chatMainContainer}>
      <TopHeader
        firstIcon="arrow-back"
        secondIcon="star-border"
        thirdIcon="more-vert"
        name={getDataFromParam.selected_Item.display_name}
        menuHandler={menuHandler}
        searchHandler={searchHandler}
        filterHandler={filterHandler}
      />
    </View>
  );
};

export default Message;
