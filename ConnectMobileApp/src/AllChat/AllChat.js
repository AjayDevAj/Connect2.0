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
import navigationString from '../utility/NavigationString';
import {AllChat_Open_Team} from './AllChat_Open_Team'

const AllChat = ({navigation,route}) => {
  const menuHandler = () => {
    navigation.goBack();
  };

  const searchHandler = () => {
    alert('Search Handler');
  };

  const filterHandler = () => {
    // alert('Filter Handler');
    // navigation.pre
    render (
      <AllChat_Open_Team/>
    )
  };
  const dispatch = useDispatch();
  const chatResponseData = useSelector(store => store.ChatResponseData);
  const isFocused = useIsFocused();
  const [currentTabStatus, setCurrentTabStatus] = useState(route.params.openTab);

  useEffect(() => {
    if (isFocused) {
      console.log('all_chat ',route.params)
      callAPI(currentTabStatus);
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
      {chatResponseData.data != null && (
        <SegmentComponent
          onClickSegmentChanged={value => {
            setCurrentTabStatus(value);
            callAPI(value);
          }}
          style={{position: 'relative'}}
          badgesValue={[
            chatResponseData.data.openMessageCount,
            chatResponseData.data.closedMessageCount,
            chatResponseData.data.assignedMessageCount,
          ]}
          selectedIndexTab={route.params.openTab == "closed" ? 1 : 
          route.params.openTab == 'assign_chat' ? 2 : 0}
        />
      )}

    
      {(chatResponseData.data != null )&&
        <ChatList onPress_Chat={(selected_Item) => 
          navigation.navigate(navigationString.Message,{selected_Item,allChat:true})

        } data={
          chatResponseData.data.result
        }
        />
        
      }
       <AllChat_Open_Team/>
    </View>
  );
};

export default AllChat;