import React, {useEffect, useState, useCallback} from 'react';
import {View,Dimensions} from 'react-native';
import TopHeader from '../../Header/TopHeader';
import chatStyles from '../../AllChat/styles/AllChatChatStylesheet';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {GiftedChat,InputToolbar,Composer} from 'react-native-gifted-chat';
import {renderComposer,renderSend} from './BottomToolbar'

const Message = ({navigation, route}) => {
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
  const getDataFromParam = route.params;
  useEffect(() => {
    console.log('check value', getDataFromParam);
  }, [isFocused]);
  useEffect(() => {}, [chatResponseData]);

  const callAPI = (type = 'open') => {
    // dispatch(loadChatData(0, null, 0, 'DESC', type, '1', 1, ""));
  };
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

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
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        renderComposer={(props)=> renderComposer(props)}
       renderSend={(props) => renderSend(props)}
        // renderBubble={messageContainerStyle()}

        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default Message;

