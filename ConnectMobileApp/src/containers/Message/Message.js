import React, {useEffect, useState, useCallback} from 'react';
import {View, Dimensions} from 'react-native';
import TopHeader from '../../Header/TopHeader';
import chatStyles from '../../AllChat/styles/AllChatChatStylesheet';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {GiftedChat, Time} from 'react-native-gifted-chat';
import {
  renderComposer,
  renderSend,
  renderInputToolbar,
  renderBubble,
  renderDays,
  renderTime,
  renderCustomView,
  renderMessageImage,
  render_Blank_InputToolbar,
} from './Gifted_Chat_Extention';
import {loadAllChat_Conversation_Data} from '../../actions/AllChat_Conversation_Action';
import {getOtpResponse} from '../../utility/StorageClass';
import {otpResponse_Storage_Key} from '../../utility/Constant';
import {loadIsImportantData} from '../../actions/IsImportantAction';
import {send_Chat_Message_Data} from '../../actions/Send_Message_Action';
// import FileViewer from "react-native-file-viewer";
import DocumentPicker from "react-native-document-picker";
import {OpenGalary,OpenCam} from './OpenMedia';
import MaterialMenu from '../../MaterialMenu/MaterialMenu';

const Message = ({navigation, route}) => {
  const ws = React.useRef(new WebSocket('ws://test-chat.starify.co')).current;

  const [loginUserData, setLoginUserData] = useState();
  const [reloadTopView, setReloadTopView] = useState(false);
  const [dotClicked, setDotClicked] = useState(false);

  const getUserData = async () => {
    var test = await getOtpResponse(otpResponse_Storage_Key);
    setLoginUserData(test);
  };
  const menuHandler = () => {
    navigation.goBack();
  };

  const markasImportant = () => {
    dispatch(
      loadIsImportantData(
        getDataFromParam.selected_Item.conversation_id,
        getDataFromParam.selected_Item.is_important == 1 ? 0 : 1,
      ),
    );
  };

  const filterHandler = async () => {
  //  const getVal = await OpenGalary()
  //  console.log('getImages',getVal)
  //  dispatch(send_Chat_Message_Data())
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    // await FileViewer.open(res.uri);
  } catch (e) {
    // error
  }
  
  };

  const dotHandler = async () => {
    !dotClicked ? setDotClicked(true) : setDotClicked(false);
  }

  const dispatch = useDispatch();
  const allChat_Conversation_Data = useSelector(
    store => store.allChat_Conversation_Data,
  );

  const isImportantResonceData = useSelector(
    store => store.isImportantResonceData,
  );

  const isFocused = useIsFocused();
  const getDataFromParam = route.params;
  const [messages, setMessages] = useState([]);

  const Incoming_Chat_Socket_Subscribe = () => {
    console.log("uWebsocket Connected to the server")

    ws.onopen = () => {
        console.log("uWebsocket Connected to the server")
        ws.send(JSON.stringify({action: 'subscribe_message', agent_id: 52}));

      };
      ws.onclose = (e) => {
        console.log("uWebsocket Disconnected. Check internet or server.")
      };
      ws.onerror = (e) => {
        console.log('uWebsocket incomming chat onerror',e)
      };
      ws.onmessage = (e) => {
        console.log('uWebsocket incomming chat onmessage',e.data)
        
        // if (xtype.type(e.data) === 'object') {
          console.log('uWebsocket incomming chat')

        // setMessages(previousMessages =>
        //   GiftedChat.append(previousMessages, e.data),
        // );
        // }
      };
}

  useEffect(() => {
    Incoming_Chat_Socket_Subscribe()

    if (isFocused) {
      callAPI();
      getUserData();
    }
  }, [isFocused]);

  useEffect(() => {
    if (
      allChat_Conversation_Data.data != undefined &&
      allChat_Conversation_Data.data.data.length > 0
    ) {
      setMessages(allChat_Conversation_Data.data.data);
      console.log(
        'Testing 123 isImportantResonceData marked',
        allChat_Conversation_Data.data.data,
      );
    }
  }, [allChat_Conversation_Data]);

  useEffect(() => {
    if (isImportantResonceData.data != undefined) {
      console.log('isImportantResonceData.data',isImportantResonceData)
      setReloadTopView(true);
    }
  }, [isImportantResonceData]);

  const callAPI = () => {
    console.log('getDataFromParam ', getDataFromParam.allChat);
    dispatch(
      loadAllChat_Conversation_Data(
        getDataFromParam.selected_Item.conversation_id,
        0,
        getDataFromParam.selected_Item.sub_conversation_id,
        0,
        0,
        getDataFromParam.selected_Item.chat_status,
      ),
    );
  };

  const [unSendMessage, setUnSendMessage] = useState({
    message: null,
    createdAt: null,
    user: {
      agent_name: null,
      _id: null,
    },
    _id: null,
  });

  const onSend = useCallback((messages = []) => {
    console.log('onSend messages', messages);
    setUnSendMessage({
      message: messages[0].text,
      createdAt: messages[0].createdAt,
      user: {
        agent_name: messages[0].user.agent_name,
        _id: messages[0].user._id,
      },
      _id: messages[0]._id,
    });
  }, []);

  useEffect(() => {
    if (unSendMessage._id != null) {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [unSendMessage]),
      );
      dispatch(
        send_Chat_Message_Data(
          'google',
          getDataFromParam.selected_Item.conversation_id,
          unSendMessage.message,
        ),
      );
    }
  }, [unSendMessage]);

  const Send_Message_ResponceData = useSelector(
    store => store.Send_Message_ResponceData,
  );

  useEffect(() => {
    console.log(
      'SendMessageApi api testing Send_Message_ResponceData :- ',
      Send_Message_ResponceData,
    );
  }, [Send_Message_ResponceData]);

  const materialMenuItemData = [
    {
      id: 1,
      value: 'Close chat',
    }, {
      id: 2,
      value: 'Mark as unread',
    }, {
      id: 3,
      value: 'Assign to other',
    },
  ];

  return (
    <View style={chatStyles.chatMainContainer}>
      <TopHeader
        firstIcon="arrow-back"
        secondIcon="star-border"
        thirdIcon="more-vert"
        color={
          reloadTopView | (getDataFromParam.selected_Item.is_important == 1)
            ? '#FFAA00'
            : null
        }
        name={getDataFromParam.selected_Item.display_name}
        menuHandler={menuHandler}
        searchHandler={markasImportant}
        filterHandler={dotHandler}
      />
      {dotClicked && <MaterialMenu itemData={materialMenuItemData} /> }
      <View style={{flex: 1}}>
        {allChat_Conversation_Data.data && loginUserData != undefined && (
          <GiftedChat
            infiniteScroll={true}
            alignTop={true}
            messages={messages}
            onSend={messages => onSend(messages)}
            renderComposer={renderComposer}
            renderSend={renderSend}
            renderInputToolbar={
              getDataFromParam.allChat == true ? render_Blank_InputToolbar : 
              getDataFromParam.selected_Item.chat_status == 'closed'
              ? render_Blank_InputToolbar
              : renderInputToolbar
            }
            renderBubble={renderBubble}
            renderCustomView={renderCustomView}
            // renderMessageImage={renderMessageImage}
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