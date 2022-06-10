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

/**
 * This class is for imcoming chat icon.
 * * Its visible when atleast incoming count is one.
 */
const Incoming_Chat = () => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
  });
  const dispatch = useDispatch();
  const [username, SetuserName] = useState('Priyanka11');
  const [isPanelActive, setIsPanelActive] = useState(true);
  const unassigned_Chat_Response = useSelector(store => store.Unassigned_Chat);

  useEffect(() => {
    console.log('unassigned_Chat_Response:- ',unassigned_Chat_Response) 
  }, [unassigned_Chat_Response]);


  const unassigned_Chat_API_Call = () => {
    console.log('unassigned_Chat_API_Call:- ') 
    dispatch(Unassigned_Chat());
  };

  return (
    <>
      <Action_Sheet />
      <Draggable
        x={Dimensions.get('window').width - 100}
        y={Dimensions.get('window').height - 170}
        onShortPressRelease={() => {
          // openSheet();
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
          <Count_Badge topRight={-5} top={-5} />
        </View>
      </Draggable>
    </>
  );
};

export default Incoming_Chat;
