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
import chatStyles from './styles/ChatStylesheet';
import {SegmentComponent} from '../component/SegmentComponent';
import {useSelector, useDispatch} from 'react-redux';
import {loadChatData} from '../actions/ChatAction';
import ChatList from '../Chat/ChatList';
import navigationString from '../utility/NavigationString';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../utility/Loader';
import SearchBox from '../Search/SearchBox';
import {signOut} from '../navigation/Routes'
import Drawer from '../navigation/Drawer';
import Filter from '../containers/dashboard/Filter';

const Chat = ({navigation}) => {
  const isFocused = useIsFocused();
  const menuHandler = () => {
    // console.log('Menu Handler');
    // alert('Menu Handler');
    // Drawer.openDrawer()
   
  };

  const searchHandler = () => {
    !clicked ? setClicked(true) : setClicked(false);
  };

  const filterHandler = () => {
    //alert('Filter Handler');
    navigation.navigate(navigationString.Filter)
  };

  const dispatch = useDispatch();
  const chatResponseData = useSelector(store => store.ChatResponseData);

  /**
   * Api call when page load
   */
  useEffect(() => {
    if (isFocused) {
      callAPI(currentTabStatus);
    }
  }, [isFocused]);

  useEffect(() => {
    if (chatResponseData == 'Error: 401') {
      signOut(navigation)
    }
  }, [chatResponseData]);

  /**
   *
   * @param {*} is_important is used for filter purpose
   * @param {*} location_id optional value
   * @param {*} unread is used for filter purpose
   * @param {*} order_by Defult value is 'DESC'.Mostly it is used for filter purpose.
   * @param {*} chat_status It depends on the selected tab(open,closed,assign_chat).Defult value is 'open'
   * @param {*} pagination Defult value is 0.
   * @param {*} other_chat If you wish to see other chats then passcode is '1'.Defult value is '0' to see own chat
   * @param {*} user_id Login user_id
   * @param {*} search_text 
   */

  const callAPI = (type = 'open', searchText = '') => {
    searchText !== null ? 
      dispatch(loadChatData(0, null, 0, 'DESC', type, 1, 0, 557, searchText))
    :
      dispatch(loadChatData(0, null, 0, 'DESC', type, 1, 0, 557))
  };

  const [searchText, setSearchText] = useState('');
  const [clicked, setClicked] = useState(false);
  const [currentTabStatus, setCurrentTabStatus] = useState('open');

  /**
   * Search Api call
   * @param {*} searchTextParam
   */
  const chatSearchHandler = searchTextParam => {
    setSearchText(searchTextParam);
    searchTextParam ? callAPI(currentTabStatus, searchTextParam) : callAPI(currentTabStatus)
  };
  
  return (
    <View style={chatStyles.chatMainContainer}>
      {!clicked ? (
        <TopHeader
          firstIcon="menu"
          secondIcon="search"
          thirdIcon="filter-list"
          name="My Chats"
          menuHandler={menuHandler}
          searchHandler={searchHandler}
          filterHandler={filterHandler}
        />
      ) : (
        <SearchBox
          clicked={clicked}
          searchText={searchText}
          chatSearchHandler={chatSearchHandler}
          menuHandler={menuHandler}
          searchHandler={searchHandler}
          filterHandler={filterHandler}
        />
      )}
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
        />
      )}

      {chatResponseData.data != undefined &&
        chatResponseData.data.otherMessageCount != undefined && (
          <HeaderNotification
            left="people"
            message={`${
              chatResponseData.data.otherMessageCount
            } ${currentTabStatus.toUpperCase()} chats with team`}
            right="chevron-right"
            openAllChat={() => navigation.navigate(navigationString.AllChat,{
              openTab:currentTabStatus
            })}
          />
        )}

      {chatResponseData.data != null && (
        <ChatList
          onPress_Chat={selected_Item =>
            navigation.navigate(navigationString.Message, {selected_Item,allChat:false})
          }
          data={chatResponseData.data.result}
        />
      )}
    </View>
  );
};

export default Chat;
