import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  TextInput,
  FlatList,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {SegmentComponent} from '../component/SegmentComponent';
import fontFamily from '../utility/Font-Declarations';
import {getUserdata} from '../api/getUserdata';
import {useIsFocused} from '@react-navigation/native';
// import RadioButtonRN from 'radio-buttons-react-native';
import RadioButton from 'react-native-radio-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const AllChat_Open_Team = ({closeButtonCall,alreadySelectedData}) => {
  const [modalVisible, setModalVisible] = useState(true);
  const isFocused = useIsFocused();
  const [DATA, setDATA] = useState(null);
  const [cuttentTap, setCuttentTap] = useState('Admin');
  const [radioButton, setRadioButton] = useState({
    id: null,
    name: null,
  });

  useEffect(() => {
    if (isFocused) {
      if (alreadySelectedData != null)
      {
        setRadioButton(alreadySelectedData)
      }
      call_getUserdata();
    }
  }, [isFocused]);

  const call_getUserdata = async () => {
    let data = await getUserdata();
    // console.log('call_getUserdata', data);
    setDATA(data);
  };

  const Item = ({item, onPress}) => (
    <TouchableOpacity
      onPress={()=> {
        // onPress()
        setRadioButton({
          id: item.id,
          name: item.name,
        })
        closeButtonCall({
          id: item.id,
          name: item.name,
        })
      }}
      style={{
        paddingLeft: 30,
        justifyContent: 'center',
        minHeight: 54,
        marginTop: 15,
      }}>
      <Text
        style={{
          fontSize: 14,
          fontFamily: fontFamily.Alte_DIN,
        }}>
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 20,
        }}>
        <Text
          style={{
            fontSize: 12,
            color: 'gray',
            marginTop: 5,
            fontFamily: fontFamily.Poppins,
          }}>
          {item.mobile_number}
        </Text>
        <RadioButton
          animation={'bounceIn'}
          size={10}
          isSelected={
            radioButton.id == null
              ? false
              : radioButton.id == item.id
              ? true
              : false
          }
          onPress={() =>
            setRadioButton({
              id: item.id,
              name: item.name,
            })
          }
        />
      </View>
      <View
        style={{
          flex: 1,
          borderBottomWidth: 0.8,
          borderBottomColor: 'rgba(0, 0, 0, 0.06)',
        }}
      />
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = '#6e3b6e';
    const color = 'white';

    return (
      <Item
        item={item}
        onPress={() => console.log("sasasasas")}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <>
      {modalVisible && (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TopHeader_
                  onClickObj={() => {
                    closeButtonCall()
                    setModalVisible(!modalVisible)
                  }
                  }                
                  onClickSegmentChanged={value => setCuttentTap(value)}
                  onChange={value => console.log('setCuttentTap', value)}
                />
                {DATA != null && (
                  <SegmentComponent
                    width={'65%'}
                    for_allUser={true}
                    onClickSegmentChanged={value => {
                      setCuttentTap(value);
                    }}
                    style={{position: 'relative'}}
                    badgesValue={[
                      DATA.data.admin.length,
                      DATA.data.manager.length,
                    ]}
                    segment_Value={['Admin', 'Managers']}
                  />
                )}
                {DATA != null && (
                  <FlatList
                    data={
                      cuttentTap == 'Admin'
                        ? DATA.data.admin
                        : DATA.data.manager
                    }
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    // extraData={selectedId}
                  />
                )}
              </View>
            </View>
          </Modal>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: '#F7FCFF',
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: 'hidden',
  },
});

export const TopHeader_ = ({onClickObj, onChange}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          backgroundColor: '#F7FCFF',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 16,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#000000',
            fontFamily: fontFamily.Alte_DIN,
          }}>
          Select team member
        </Text>
        <Pressable
          style={{marginRight:10}}
          onPress={() => onClickObj()}>
          <Icon name="close" size={18} color='#000' />
        </Pressable>
      </View>
      <TextInput
        clearButtonMode="always"
        placeholder="Search Here..."
        onChange={e => {
          onChange(e.nativeEvent.text);
        }}
        style={{
          width: '100%',
          borderRadius: 10,
          fontSize: 14,
          color: '#333',
          paddingVertical: 8,
          paddingLeft: 16,
          paddingRight: 40,
          backgroundColor: '#FFFFFF',
          height: 40,
        }}
        placeholderTextColor="rgba(0,0,0,.66)"
      />
    </>
  );
};
