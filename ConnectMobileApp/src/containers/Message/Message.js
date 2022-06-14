import React, {useEffect, useState, useCallback} from 'react';
import {View, Dimensions} from 'react-native';
import TopHeader from '../../Header/TopHeader';
import chatStyles from '../../AllChat/styles/AllChatChatStylesheet';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {GiftedChat,Time} from 'react-native-gifted-chat';
import {
  renderComposer,
  renderSend,
  renderInputToolbar,
  renderBubble,
  renderDays,
  renderTime,
} from './BottomToolbar';
import {loadAllChat_Conversation_Data} from '../../actions/AllChat_Conversation_Action';
import {getOtpResponse} from '../../utility/StorageClass';
import {otpResponse_Storage_Key} from '../../utility/Constant';
import {loadIsImportantData} from '../../actions/IsImportantAction';

const Message = ({navigation, route}) => {
  const [loginUserData, setLoginUserData] = useState();

  const getUserData = async () => {
    var test = await getOtpResponse(otpResponse_Storage_Key);
    setLoginUserData(test);
  };
  const menuHandler = () => {
    navigation.goBack();
  };

  const searchHandler = () => {
    alert('Search Handler');
    dispatch(
      loadIsImportantData(
        getDataFromParam.selected_Item.conversation_id,
        getDataFromParam.selected_Item.is_important == 1 ? 0 : 1,
      ),
    );
  };

  const filterHandler = () => {
    alert('Filter Handler');
  };
  const dispatch = useDispatch();
  const allChat_Conversation_Data = useSelector(
    store => store.allChat_Conversation_Data,
  );
  const isFocused = useIsFocused();
  const getDataFromParam = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (isFocused) {
      getUserData();
      callAPI();
    }
  }, [isFocused]);

  useEffect(() => {
    if (allChat_Conversation_Data.data) {
      console.log('allChat_Conversation_Data ',allChat_Conversation_Data.data.data)
      setMessages(allChat_Conversation_Data.data.data);
    }
  }, [allChat_Conversation_Data]);

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //     {
  //       _id: 1,
  //       text: 'My message',
  //       createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         // avatar: 'https://facebook.github.io/react/img/logo_og.png',
  //       },
  //       image: 'https://placeimg.com/140/140/any',
  //       // You can also add a video prop:
  //       // Mark the message as sent, using one tick
  //       sent: true,
  //       // Mark the message as received, using two tick
  //       received: true,
  //       // Mark the message as pending with a clock loader
  //       pending: true,
  //       // Any additional custom parameters are passed through
  //     }
  //   ])
  // }, [])

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
      <View style={{flex: 1}}>
        {console.log('messages data verify', messages)}

        {allChat_Conversation_Data.data && loginUserData != undefined && (
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
              _id: 'a',
              agent_name: loginUserData.user.name,
            }}
            renderDay={renderDays}
            renderTime={renderTime}
          />
        )}
      </View>
    </View>
  );
};

export default Message;
