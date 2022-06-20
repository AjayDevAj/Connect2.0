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

export const AllChat_Open_Team = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const isFocused = useIsFocused();
  const [DATA, setDATA] = useState(true);

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

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = '#6e3b6e';
    const color = 'white';

    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
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
                <TopHeader_ onClickObj={() => setModalVisible(!modalVisible)}  />
                <FlatList
                  data={DATA.data.admin}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  // extraData={selectedId}
                />
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

export const TopHeader_ = ({onClickObj,onClickSegmentChanged}) => {
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
          style={[styles.button, styles.buttonClose]}
          onPress={() => onClickObj()}>
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
        width={'65%'}
        onClickSegmentChanged={value => {
          onClickSegmentChanged(value)
        }}
        style={{position: 'relative'}}
        //   badgesValue={[
        //   ]}
        segment_Value={['Admin', 'Managers']}
      />
    </>
  );
};
