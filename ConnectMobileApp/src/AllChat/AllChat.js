/*
 **
 *
 ** ========================================================
 **
 ** AppName: Connect2.0
 ** Version: X.0.0
 ** FileName: AllChat.js
 ** UsedFor: AllChat at connect 2.0 app
 ** Author:
 **
 ** ========================================================
 *
 **
 **
 *
 ** ==========================================================
 **                  AllChat component
 ** ==========================================================
 *
 **
 */

 import React, {useEffect, useState} from 'react';
 import {View} from 'react-native';
 import TopHeader from '../Header/TopHeader';
 import chatStyles from './styles/AllChatChatStylesheet';
 import {SegmentComponent} from '../component/SegmentComponent';
 import {getChatList} from '../api/ChatApi';
 import ChatList from '../Chat/ChatList';
 import {useIsFocused} from '@react-navigation/native';
 import navigationString from '../utility/NavigationString';
 import {AllChat_Open_Team} from './AllChat_Open_Team';
 
 const AllChat = ({navigation, route}) => {
   const [isSearch, setIsSearch] = useState(false);
   const [searchText, setSearchText] = useState('');
   const [pageNo, setPageNo] = useState(1);
   const [totalChatPageCount, setTotalChatPageCount] = useState(1);
 
   const menuHandler = () => {
     navigation.goBack();
   };
 
   const searchHandler = () => {
     setIsSearch(!isSearch)
   };
 
   const filterHandler = () => {};
 
   const arrowDownHandler = () => {
     setShowAllUser(true);
   };
 
   const [chatResponseData, setChatResponseData] = useState({});

   const isFocused = useIsFocused();
   const [currentTabStatus, setCurrentTabStatus] = useState(
     route.params.openTab,
   );
   const [showAllUser, setShowAllUser] = useState(false);
   const [headerName, setHeaderName] = useState({
     id: null,
     name: 'All Chats',
   });
 
   useEffect(() => {
     if (isFocused) {
       console.log('all_chat ', route.params);
       setShowAllUser(false);
       callAPI(currentTabStatus);
     }
   }, [isFocused]);
 
   useEffect(()=> {
     callAPI(currentTabStatus);
   },[headerName])
 
   useEffect(() => {}, [chatResponseData]);
 
   /**
    * Search Api call
    * @param {*} type
    */
   const callAPI = async (type = 'open', searchText = '', pageNo=1) => {
    var chatResponse =  await getChatList(0, null, 0, 'DESC', type, pageNo, 1,headerName.id == null ? "":headerName.id, searchText !== null ? searchText:null);
    setChatResponseData(chatResponse);
    return chatResponse;
   };
 
 
   /**
    * Search Api call
    * @param {*} searchTextParam
    */
   const chatSearchHandler = searchTextParam => {
     setSearchText(searchTextParam);
     searchTextParam
       ? callAPI(currentTabStatus, searchTextParam)
       : callAPI(currentTabStatus);
   };
 
   const loadMoreChatData = (updatedPageNo) => {
     {chatResponseData.data != undefined && chatResponseData.data.totalPage != undefined && 
       (setTotalChatPageCount(chatResponseData.data.totalPage))}
     setPageNo(updatedPageNo);
     ((updatedPageNo > 0) && (updatedPageNo <= totalChatPageCount)) 
     ? callAPI(currentTabStatus, searchText, updatedPageNo) 
     : callAPI(currentTabStatus, searchText)
   }
 
   return (
     <View style={chatStyles.chatMainContainer}>
       <TopHeader
         firstIcon="arrow-back"
         secondIcon="search"
         thirdIcon="filter-list"
         name={headerName.name}
         menuHandler={menuHandler}
         searchHandler={searchHandler}
         filterHandler={filterHandler}
         arrowDownIcon="keyboard-arrow-down"
         arrowDownHandler={arrowDownHandler}
         chatSearchHandler={chatSearchHandler}
         isSearchEnable={isSearch}
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
           selectedIndexTab={
             route.params.openTab == 'closed'
               ? 1
               : route.params.openTab == 'assign_chat'
               ? 2
               : 0
           }
         />
       )}
 
       {chatResponseData.data != null && (
         <ChatList
           onPress_Chat={selected_Item =>
             navigation.navigate(navigationString.Message, {
               selected_Item,
               allChat: true,
               currentTab: currentTabStatus,
             })
           }
           data={chatResponseData.data.result}
           isShowRowThree={true}
           msgCount={currentTabStatus == 'open' ? chatResponseData.data.openMessageCount 
           : currentTabStatus == 'closed' ? chatResponseData.data.closedMessageCount 
           : chatResponseData.data.assignedMessageCount}
           tabName={currentTabStatus}
           loadMoreChatData={loadMoreChatData}
           page={pageNo}
         />
       )}
       {showAllUser && (
         <AllChat_Open_Team
           closeButtonCall={value => {
             console.log('closeButtonCall',value)
             if (value != undefined) {
               setHeaderName({
                 id: value.id,
                 name: value.name,
               });
 
             }
             setShowAllUser(false);
           }}
           alreadySelectedData={headerName.id != null ? headerName : null}
         />
       )}
       {/* <RouteTabBar /> */}
     </View>
   );
 };
 
 export default AllChat;
 