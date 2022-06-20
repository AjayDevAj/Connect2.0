import React, { useState, useEffect } from 'react';
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
import { SegmentComponent } from '../component/SegmentComponent';
import fontFamily from '../utility/Font-Declarations';
import { getUserdata } from '../api/getUserdata';
import { useIsFocused } from '@react-navigation/native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
// import { Icon } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/MaterialIcons';



export const AllChat_Open_Team = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const isFocused = useIsFocused();
  const [DATA, setDATA] = useState(null);
  const [cuttentTap, setCuttentTap] = useState('Admin');
  const [radioValue, setRadioValue] = useState('false')
  const [value, setvalue] = React.useState('first')


  useEffect(() => {
    if (isFocused) {
      call_getUserdata();
    }
  }, [isFocused]);

  const call_getUserdata = async () => {
    let data = await getUserdata();
    console.log('call_getUserdata', data);
    setDATA(data);
  };

  var radio_props = [
    { value: 0 },
    
  ];


  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      {/* <Text style={[styles.title, textColor]}>{item.name}</Text>
      <Text style={[styles.title, textColor]}>{item.mobile_number}</Text> */}

      <View style={{ position:'absolute',left: 10, height: 25, width: 25,backgroundColor: 'red', top: 20, borderRadius: 25/2 }}>
        <Text style={{fontSize: 15, alignSelf: 'center', marginTop: 3}}>
          {item.name.charAt(0)}
        </Text>
      </View>

      <Text style={{ fontSize: 16, marginLeft: 50, marginTop: 15, fontFamily: fontFamily.Alte_DIN }}>{item.name}</Text>
      <View style={{ position:'absolute', right: 15, top: 25}}>
        <RadioForm
          radio_props={radio_props}
          initial={1}
          buttonColor={'rgba(95, 99, 104, 1)'}
          buttonSize={10}
          onPress={(value) => {Alert.alert("Click Me")}}
        />
      </View>
      
      <Text style={{ fontSize: 14, marginLeft: 55, color: 'gray', marginTop: 5, fontFamily: fontFamily.Poppins }}>{item.mobile_number}</Text>
      <View style={{ marginTop: 10, flex: 1, borderWidth: 0.8, borderColor: 'rgba(0, 0, 0, 0.06)', margin: 15 }}> 
      </View>

      

    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = '#6e3b6e';
    const color = 'white';

    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
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
                  onClickObj={() => setModalVisible(!modalVisible)}
                  onClickSegmentChanged={value => setCuttentTap(value)}
                  onChange={(value) =>
                    console.log('setCuttentTap', value)

                  }
                />
                {DATA != null && (
                  <SegmentComponent
                    width={'65%'}
                    for_allUser={true}
                    onClickSegmentChanged={value => {
                      // console.log('setCuttentTap',value)
                      setCuttentTap(value)
                    }}

                    style={{ position: 'relative' }}
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
  },
});

export const TopHeader_ = ({ onClickObj, onChange }) => {
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
          width: '95%',
          marginTop: 5
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
         // style={[styles.button, styles.buttonClose]}
          onPress={() => onClickObj()}>
          {/* <Text style={styles.textStyle}>Hide Modal</Text> */}
          <Icon name='close' size={20} color={'rgba(95, 99, 104, 1)'} style={{ right:15 }} />
        </Pressable>
      </View>

        <TextInput
        clearButtonMode="always"
        placeholder="Search here..."
        onChange={(e) => {
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
