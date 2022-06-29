import React, {useEffect, useState, useCallback} from 'react';
import {View, ImageBackground } from 'react-native';
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
import DocumentPicker from 'react-native-document-picker';
import {OpenGalary, OpenCam} from './OpenMedia';
import MaterialMenu from '../../MaterialMenu/MaterialMenu';
import {getIsImportantData} from '../../api/IsImportantApi';
import {mark_Unread_Chat} from '../../api/UnreadChat';
import PurchaseLeadSection from './PurchaseLeadSection';
import PurchaseLeadForm from './PurchaseLeadForm';
import CloseChatModal from './CloseChatModal';

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

  const markasImportant = async () => {
    const data = await getIsImportantData(
      getDataFromParam.selected_Item.conversation_id,
      reloadTopView == 1 ? 0 : 1,
    );
    setReloadTopView(data.data.is_important);
  };

  const mark_Unread_Api = async () => {
    const data = await mark_Unread_Chat(
      getDataFromParam.selected_Item.conversation_id,
    );
    navigation.goBack()
  };

  const openImage = async () => {
    const messages = await OpenGalary();
    setUnSendMessage({
      image: messages.assets[0].uri,
      createdAt: new Date(),
      user: {
        agent_name: messages.assets[0].fileName,
        _id: messages.assets[0].fileSize,
      },
      _id: messages.assets[0].fileSize,
      file_type: 'sendChat',
    });

    //  dispatch(send_Chat_Message_Data())
  };
  const openFile = async () => {
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

  const dotHandler = () => {
    setDotClicked(!dotClicked);
  };

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
    console.log('uWebsocket Connected to the server');

    ws.onopen = () => {
      console.log('uWebsocket Connected to the server');
      ws.send(JSON.stringify({action: 'subscribe_message', agent_id: 64}));
    };
    ws.onclose = e => {
      console.log('uWebsocket Disconnected. Check internet or server.');
    };
    ws.onerror = e => {
      console.log('uWebsocket incomming chat onerror', e);
    };
    ws.onmessage = e => {
      // if (Object.keys(e.data).length == 0) {
      console.log('uWebsocket incomming chat onmessage', e.data);
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [e.data]),
      );
      // }
    };
  };

  useEffect(() => {
    setReloadTopView(
      getDataFromParam.selected_Item.is_important == 1 ? true : false,
    );

    if (isFocused) {
      Incoming_Chat_Socket_Subscribe();
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
    },
    {
      id: 2,
      value: 'Mark as unread',
    },
    {
      id: 3,
      value: 'Assign to other',
    },
  ];

  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [isClosedChatClicked, setIsClosedChatClicked] = useState(false);

  const purchaseHandler = () => {
    setShowPurchaseForm(!showPurchaseForm)
  }

  return (
    <View style={[chatStyles.chatMainContainer, {backgroundColor: '#FFF' }]}>

      {showPurchaseForm ? 
      ( 
        <>
        <TopHeader
        firstIcon="arrow-back"
        secondIcon=""
        thirdIcon=""
        color={reloadTopView ? '#FFAA00' : null}
        name={getDataFromParam.selected_Item.display_name}
        menuHandler={menuHandler}
        logo={getDataFromParam.selected_Item.publisher_type}
      />
        <PurchaseLeadForm 
          formData={getDataFromParam.selected_Item} 
          navigation={navigation}
          /> 
        </>
      ) : (
        <>
        <TopHeader
        firstIcon="arrow-back"
        secondIcon="star-border"
        thirdIcon="more-vert"
        color={reloadTopView ? '#FFAA00' : null}
        name={getDataFromParam.selected_Item.display_name}
        menuHandler={menuHandler}
        searchHandler={markasImportant}
        filterHandler={dotHandler}
        logo={getDataFromParam.selected_Item.publisher_type}
      />

      <PurchaseLeadSection purchaseHandler={purchaseHandler} />
      
      {dotClicked && (
        <MaterialMenu
          itemData={materialMenuItemData}
          onClick={index => {
            switch (index) {
              case 1:
                setIsClosedChatClicked(!isClosedChatClicked);
                setDotClicked(!dotClicked);
                break;
              case 2:
                mark_Unread_Api()
                break;
              case 3:
                break;

              default:
                break;
            }
          }}
        />
      )}

      
      <View style={{flex: 1}}>
        {isClosedChatClicked && <CloseChatModal />}
        {allChat_Conversation_Data.data && loginUserData != undefined && (
        // <ImageBackground source={require('./img/MaskGroup17.svg')} >
          <GiftedChat
          listViewProps={{
            contentContainerStyle: {
              flexGrow: 0.02,
              paddingTop: 20,
            },
            onEndReachedThreshold: 0.2,
          }}
          infiniteScroll={true}
          alignTop={true}
          messages={messages}
          onSend={messages => onSend(messages)}
          renderComposer={renderComposer}
          renderSend={renderSend}
          renderInputToolbar={
            getDataFromParam.allChat == true
              ? render_Blank_InputToolbar
              : getDataFromParam.selected_Item.chat_status == 'closed'
              ? render_Blank_InputToolbar
              : renderInputToolbar
          }
          selectFile={openFile}
          selectImage={openImage}
          renderBubble={renderBubble}
          renderCustomView={renderCustomView}
          renderMessageImage={renderMessageImage}
          user={{
            _id: 'a',
            agent_name: loginUserData.user.name,
          }}
          renderDay={renderDays}
          renderTime={renderTime}
        />
            // {/* </ImageBackground> */}
        )}
      </View>
      </>
      )}
    </View>
  );
};

export default Message;