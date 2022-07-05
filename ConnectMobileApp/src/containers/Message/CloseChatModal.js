import React, { useState } from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity, Button } from 'react-native';
import RadioButton from 'react-native-radio-button';
import { closeChatReason } from '../../utility/Constant';
import closeChatStyles from './styles/closeChatStylesheet';

const CloseChatModal = ({ closeChatHandler }) => {
    const [modalVisible, setModalVisible] = useState(true);
    const [radioButton, setRadioButton] = useState({
        id: null,
        name: null,
    });

    return (
        <>
      {modalVisible && (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            // onRequestClose={() => {
            //   setModalVisible(!modalVisible)
            // }} 
        >
            <View style={[closeChatStyles.centeredView]}>
                <View style={closeChatStyles.modalView}>

                    <Text style={closeChatStyles.modalHeaderText}>Choose reason</Text>

                    <View style={closeChatStyles.listView}>
                        <FlatList
                            animation={true}
                            data={closeChatReason}
                            keyExtractor={item => item.id}
                            renderItem={( { item }) => (
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
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
                                            name: item.value,
                                            })
                                        }
                                        outerColor={radioButton.id == item.id ? "#0070FC" : "#5F6368"}
                                        innerColor={radioButton.id == item.id ? "#0070FC" : "#5F6368"}
                                    />
                                    <Text style={closeChatStyles.closeChatText}>{item.value}</Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={closeChatStyles.closeButtonView}>
                        <TouchableOpacity style={closeChatStyles.cancelButton} onPress={() => {
                            setRadioButton({
                                id: null,
                                name: null,
                            })
                        }}>
                            <Text style={closeChatStyles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={closeChatStyles.closeButton} onPress={() => {
                            setModalVisible(!modalVisible);
                            closeChatHandler()
                            }}>
                            <Text style={closeChatStyles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
      )}
    </>
    )
}

export default CloseChatModal;