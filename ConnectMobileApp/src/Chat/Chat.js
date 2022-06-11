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

const Chat = ({navigation}) => {
  const isFocused = useIsFocused();
  const [reloadFlatlist,setReloadFlatlist] = useState(false)

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
      console.log('chatResponseData API check')
      dispatch(loadChatData(0, null, 0, 'DESC', 'open', 1, 0, 557));
    }
  },[isFocused]);
  useEffect(() => {  
    // setReloadFlatlist(true)
    console.log('chatResponseData response check')
  }, [chatResponseData]);

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
      <SegmentComponent onClickSegmentChanged={value => console.log(value)} />
      {chatResponseData.data != undefined &&
        chatResponseData.data.otherMessageCount != undefined && (
          <HeaderNotification
            left="people"
            message={`${chatResponseData.data.otherMessageCount} Open chats with team`}
            right="chevron-right"
            openAllChat={() =>
                navigation.navigate(navigationString.AllChat)
                // console.log('check gkp',navigation)
            }
          />
        )}
       
       {reloadFlatlist &&
        <ChatList data={chatResponseData.data.result}/>
      }
    </View>
  );
};

export default Chat;
