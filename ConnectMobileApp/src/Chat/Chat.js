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
 import {getChatList} from '../api/ChatApi';
 import ChatList from '../Chat/ChatList';
 import navigationString from '../utility/NavigationString';
 import { useIsFocused } from '@react-navigation/native';
 import {signOut} from '../navigation/Routes';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import {searchedListData} from '../utility/Constant';
 import {store_Value} from '../utility/StorageClass';
 
 // import uWebSockets from '../component/uWebSockets'
 
 const Chat = ({ navigation, route }) => {
   const ws = React.useRef(new WebSocket('ws://test-chat.starify.co/')).current;
 
   const isFocused = useIsFocused();
   const [isSearch, setIsSearch] = useState(false);
   const [isFilterApplied, setIsFilterApplied] = useState(true);
   const [searchText, setSearchText] = useState('');
   const [currentTabStatus, setCurrentTabStatus] = useState('open');
   const [pageNo, setPageNo] = useState(1);
   const [totalChatPageCount, setTotalChatPageCount] = useState(1);
 
    const menuHandler = () => {
      navigation.openDrawer();
    };
 
    const searchHandler = () => {
      setIsSearch(!isSearch)
    };
 
    const filterHandler = () => {
      setIsFilterApplied(!isFilterApplied);
      navigation.navigate(navigationString.Filter, {
        isnavigtedfromchat:'true',
        navigateToScreen: navigationString.Chat
      });
    };
 
   const [chatResponseData, setChatResponseData] = useState({});
   const getFilterDataParams = route.params;
   //alert(getFilterDataParams?.testData);
 console.log('=====Char filter params =====', getFilterDataParams)
   /**
    * Api call when page load
    */
    useEffect(() => {
      if (isFocused) {
        Incoming_Chat_Socket_Subscribe()
        callAPI(currentTabStatus);
      }
    }, [isFocused]);
 
    useEffect(() => {
      if (chatResponseData === 'Error: 401') {
        signOut()
      }
    }, [chatResponseData]);

    useEffect(() => {
      if (getFilterDataParams?.chat_status) {
        console.log('Filter Data - ', getFilterDataParams?.chat_status);
      }
    }, [getFilterDataParams]);
 
   const Incoming_Chat_Socket_Subscribe = () => {
     console.log('uWebsocket Connected to the server Message',store_Value.id);
 
     ws.onopen = () => {
       ws.send(JSON.stringify({action: 'subscribe_message', agent_id: store_Value.id}));
     };
     ws.onclose = e => {
       console.log('uWebsocket Disconnected. Check internet or server.', e);
     };
     ws.onerror = e => {
       console.log('uWebsocket incomming chat onerror', e);
     };
     ws.onmessage = e => {
       let json_Data = JSON.parse(e.data);
       console.log(
         'uWebsocket Chat page onmessage print before e',
         json_Data,
       );
        switch (json_Data.socket_name) {
          case 'subscribe_message':
            callAPI(currentTabStatus);
            break;
          default:
            break;
        }
     };
   };
 
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
 
    const callAPI = async (type = 'open', searchText = '', pageNo=1) => {
     var chatResponse =  await getChatList(0, null, 0, 'DESC', type, pageNo, 0,null, searchText !== null ? searchText:null);
     setChatResponseData(chatResponse);
     return chatResponse;
    };
 
   /**
    * Search Api call
    * @param {*} searchTextParam
    */
    const chatSearchHandler = async (searchTextParam) => {
      setSearchText(searchTextParam);

      searchTextParam 
      ? callAPI(currentTabStatus, searchTextParam) 
      : callAPI(currentTabStatus)

    //  const keys = await AsyncStorage.getAllKeys();
    //  if (keys.includes(searchedListData)) {
    //    try {
    //      const searchItemListData = [];
    //      const searchItemListArrayData = await AsyncStorage.getItem(searchedListData);
    //      searchItemListData = JSON.parse(searchItemListArrayData);
         
    //      searchItemListData.push({
    //        value:searchTextParam
    //      });
    //      console.log('Search List Data - ', JSON.stringify(searchItemListData));
    //      await AsyncStorage.setItem(searchedListData, JSON.stringify(searchItemListData));
    //    } catch (error) {
    //      console.log('Save searched item in list exception ', error);
    //    }
    //  }
    };
 
   const Capitalize = (str) => {
     return str.charAt(0).toUpperCase() + str.slice(1);
   }
 
   const loadMoreChatData = (updatedPageNo) => {
     {typeof chatResponseData?.data && 
       typeof chatResponseData?.data?.totalPage && 
       (setTotalChatPageCount(chatResponseData.data.totalPage))
     }
     setPageNo(updatedPageNo);
 
     ((updatedPageNo > 0) && (updatedPageNo <= totalChatPageCount)) 
     ? callAPI(currentTabStatus, searchText, updatedPageNo) 
     : callAPI(currentTabStatus, searchText)
   }

  //  console.log('===== Open chat count =====', chatResponseData);
   
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
        navigation={navigation}
        chatSearchHandler={chatSearchHandler}
        isSearchEnable={isSearch}
        isFilterApplied={isFilterApplied}
      />
     
      {chatResponseData.data != null && (
        <SegmentComponent
          onClickSegmentChanged={value => {
            setCurrentTabStatus(value);
            callAPI(value);
          }}
          style={{position: 'relative', marginTop: '2%' }}
          badgesValue={[
            chatResponseData.data.openMessageCount,
            chatResponseData.data.closedMessageCount,
            chatResponseData.data.assignedMessageCount,
          ]}
        />
      )}

      {chatResponseData.data != undefined &&
        chatResponseData.data.otherMessageCount != undefined && 
          chatResponseData.data.otherMessageCount > 0 && (
          <HeaderNotification
            left="people"
            message={`${
              chatResponseData.data.otherMessageCount
            } ${Capitalize(currentTabStatus)} chats with team`}
            right="chevron-right"
            openAllChat={() => {
              navigation.navigate(navigationString.AllChat,{
              openTab:currentTabStatus
            })}
          }
          />
        )}

      {chatResponseData.data != null && (
        <ChatList
          onPress_Chat={selected_Item =>
            {
              return navigation.navigate(navigationString.Message, { 
                selected_Item, 
                allChat: false,
                currentTab: currentTabStatus,
               });
            }
          }
          data={chatResponseData.data.result}
          msgCount={currentTabStatus == 'open' ? chatResponseData.data.openMessageCount 
          : currentTabStatus == 'closed' ? chatResponseData.data.closedMessageCount 
          : chatResponseData.data.assignedMessageCount}
          tabName={currentTabStatus}
          loadMoreChatData={loadMoreChatData}
          page={pageNo}
        />
      )}
    </View>
  );
 };
 
 export default Chat;
 