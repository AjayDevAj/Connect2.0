import React, {useEffect, useState, useCallback} from 'react';
import {View, Dimensions} from 'react-native';
import TopHeader from '../../Header/TopHeader';
import chatStyles from '../../AllChat/styles/AllChatChatStylesheet';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {GiftedChat, InputToolbar, Composer} from 'react-native-gifted-chat';
import {renderComposer, renderSend, renderInputToolbar,renderBubble} from './BottomToolbar';
import {loadAllChat_Conversation_Data} from '../../actions/AllChat_Conversation_Action';
import {getOtpResponse} from '../../utility/StorageClass';
import {otpResponse_Storage_Key} from '../../utility/Constant'

const Message = ({navigation, route}) => {
  const [loginUserData, setLoginUserData] = useState();

  const getUserData = async () => {
   var test = await getOtpResponse(otpResponse_Storage_Key);
   setLoginUserData(test)
  }
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
  const allChat_Conversation_Data = useSelector(store => store.allChat_Conversation_Data);
  const isFocused = useIsFocused();
  const getDataFromParam = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (isFocused) {
    getUserData()
    callAPI()
    }
  }, [isFocused]);

  useEffect(() => {
    if (allChat_Conversation_Data.data) {
    setMessages(allChat_Conversation_Data.data.data)
    }
  }, [allChat_Conversation_Data]);

  const callAPI = () => {
    dispatch(
      loadAllChat_Conversation_Data(
        getDataFromParam.selected_Item.conversation_id,
        0,
        getDataFromParam.selected_Item.sub_conversation_id,
        0,
        0,
        'open',
      ),
    );
  };

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

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
      <View style={{flex:1}}>
      {console.log('loginUserData',loginUserData)}

        {allChat_Conversation_Data.data && loginUserData != undefined &&
      <GiftedChat
        infiniteScroll={true}
        alignTop={true}
        messages={messages}
        onSend={messages => onSend(messages)}
        renderComposer={renderComposer}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        renderBubble={renderBubble}
        user={{
          // _id: 'a',
          agent_name: loginUserData.user.name,
        }}
      />
}
    </View>

    </View>
  );
};

export default Message;
