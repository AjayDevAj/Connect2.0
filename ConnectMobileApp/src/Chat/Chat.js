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

<<<<<<< HEAD
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

const Chat = ({navigation}) => {
  const isFocused = useIsFocused();
  const menuHandler = () => {
    console.log('Menu Handler');
    alert('Menu Handler');
  };

  const searchHandler = () => {
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  const filterHandler = () => {
    alert('Filter Handler');
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
    console.log('chatResponseData testing', chatResponseData);
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
    dispatch(loadChatData(0, null, 0, 'DESC', type, 1, 0, 557, searchText));
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
    console.log(searchTextParam);
    if (searchTextParam) {
      callAPI('', searchTextParam);
    }
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
=======
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
 import SearchBox from '../Search/SearchBox';
 import Drawer from '../navigation/Drawer';
 
 const Chat = ({navigation}) => {
   const isFocused = useIsFocused();
 
   const menuHandler = () => {
     console.log('Menu Handler');
     //alert('Menu Handler');
    navigation.openDrawer()
    
   };
 
   const searchHandler = () => {
     if (!clicked) {
       setClicked(true);
     } else {
       setClicked(false);
     } 
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
 
   const callAPI = (type ='open', searchText = '' ) => {
     dispatch(loadChatData(0, null, 0, 'DESC', type, 1, 0, 557, searchText));
   }
 
   const [searchText, setSearchText] = useState('');
   const [clicked, setClicked] = useState(false);
   
   const chatSearchHandler = (searchTextParam) => {
     setSearchText(searchTextParam);
     console.log(searchTextParam);
     if (searchTextParam) {
       callAPI('', searchTextParam);
     }
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
          // navigation={navigation}
         />
       ) : 
         <SearchBox 
           clicked={clicked} 
           searchText={searchText}
           chatSearchHandler={chatSearchHandler} 
           />
       }
       
       
       <SegmentComponent onClickSegmentChanged={value => callAPI(value)} style={{ position: 'relative' }} />
      
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
>>>>>>> SearchScreen
