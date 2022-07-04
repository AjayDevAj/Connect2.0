import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Draggable from 'react-native-draggable';
import Count_Badge from '../../component/Count_Badge';
import Sms_black_24dp from '../../../assets/svg/sms_black_24dp.svg';
import Action_Sheet, {openSheet} from '../../component/Action_Sheet';
import {Unassigned_Chat} from '../../actions/Unassigned_Chat_Action';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

/**
 * This class is for imcoming chat icon.
 * * Its visible when atleast incoming count is one.
 */
const Incoming_Chat = () => {
  const isFocused = useIsFocused();
  const ws = React.useRef(new WebSocket('ws://test-chat.starify.co')).current;
  const [isVisible, setIsVisible] = useState(true);
  // const [panelProps, setPanelProps] = useState({
  //   fullWidth: true,
  //   onClose: () => closePanel(),
  //   onPressCloseButton: () => closePanel(),
  // });
  const dispatch = useDispatch();
  const unassigned_Chat_Response = useSelector(
    store => store.Unassigned_Chat_Data,
  );

  useEffect(() => {
    console.log('unassigned_Chat_Response status', unassigned_Chat_Response);
    if (unassigned_Chat_Response.data != null) {
      openSheet(unassigned_Chat_Response.data.result);
    }
  }, [unassigned_Chat_Response]);

  useEffect(() => {
    if (isFocused) {
      Incoming_Chat_Socket_Subscribe();
      unassigned_Chat_API_Call();
    }
  }, [isFocused]);

  const unassigned_Chat_API_Call = () => {
    dispatch(Unassigned_Chat());
  };

  const Incoming_Chat_Socket_Subscribe = () => {
    ws.onopen = () => {
      console.log('uWebsocket Connected to the server Message');
      ws.send(
        JSON.stringify({action: 'subscribe_incoming_chat', agent_id: 64}),
      );
      ws.send(
        JSON.stringify({action: 'subscribe_incoming_chat_count', agent_id: 64}),
      );
    };
    ws.onclose = e => {
      console.log('uWebsocket Disconnected. Check internet or server.', e);
    };
    ws.onerror = e => {
      console.log('uWebsocket incomming chat onerror', e);
    };
    ws.onmessage = e => {
      let json_Data = JSON.parse(e.data);
      console.log('uWebsocket incomming chat onmessage print e', json_Data);
    };
  };

  return (
    <>
      {isVisible && (
        <>
          <Action_Sheet />
          <Draggable
            x={Dimensions.get('window').width - 100}
            y={Dimensions.get('window').height - 170}
            onShortPressRelease={() => {
              unassigned_Chat_API_Call();
            }}>
            <View
              style={{
                width: 56,
                height: 56,
                backgroundColor: '#0070FC',
                borderRadius: 56 / 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Sms_black_24dp />
              <Count_Badge topRight={-5} top={-5} badge_Value={
                unassigned_Chat_Response.data != undefined ? 
                unassigned_Chat_Response.data.totalCount:0} />
            </View>
          </Draggable>
        </>
      )}
    </>
  );
};

export default Incoming_Chat;
