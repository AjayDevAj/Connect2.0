import React from 'react'
import {InputToolbar,Composer,Send} from 'react-native-gifted-chat';
import {View,Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export const renderComposer = (props) => (
    <Composer
      {...props}
      textInputStyle={{
        color: '#222B45',
        // backgroundColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E4E9F2',
        marginRight: 125,
        // left: -200,
        width: Dimensions.get('window').width,
        paddingTop: 8.5,
        paddingHorizontal: 12,
        marginLeft: 0,
      }}
    />
  );

  export const renderSend = (props) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <TouchableOpacity
        hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
        onPress={() => actionSheetRef.current?.setModalVisible()}>
        <View
          style={{
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          {/* <Icon icon="innerChatSend" width="32" height="32" color="#444" /> */}
          <Icon name={firstIcon} size={28} style={ headerStyles.headerMenuIcon } onPress={menuHandler} />

        </View>
      </TouchableOpacity>
      <Send
        {...props}
        alwaysShowSend={props.text > 0}
        disabled={!props.text}
        containerStyle={{
          width: 32,
          height: 32,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#EDF1F7',
          borderRadius: 30,
          marginRight: 10,
        }}>
        <Icon name={firstIcon} size={28} style={ headerStyles.headerMenuIcon } onPress={menuHandler} />

        {/* <Icon icon="innerChatAttachment" width="32" height="32" color="#444" /> */}
      </Send>
    </View>
  );