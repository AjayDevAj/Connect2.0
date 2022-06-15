import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, TextInput, View, Text,Pressable} from 'react-native';
import {SegmentComponent} from '../component/SegmentComponent';
import fontFamily from '../utility/Font-Declarations';

export const AllChat_Open_Team = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
      <>
      { modalVisible &&
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
            <TopHeader_ onClickObj={() => 
            setModalVisible(!modalVisible)
            }/>
          </View>
        </View>
      </Modal>
    </View>
}
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

export const TopHeader_ = ({onClickObj}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          backgroundColor: '#F7FCFF',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft:16
        }}>
        <Text style={{fontSize: 18, color: '#000000', fontFamily: fontFamily.Alte_DIN}}>
          Select team member
        </Text>
        <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onClickObj()}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
      </View>
      <TextInput
        clearButtonMode="always"
        placeholder="Search Here..."
        //   onChange={(e) => {
        //     setUserSearch(e.nativeEvent.text);
        //   }}
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
      <SegmentComponent
        onClickSegmentChanged={value => {
          console.log('value');
        }}
        style={{position: 'relative'}}
        //   badgesValue={[
        //   ]}
        segment_Value={['Admin', 'Managers']}
      />
    </>
  );
};
