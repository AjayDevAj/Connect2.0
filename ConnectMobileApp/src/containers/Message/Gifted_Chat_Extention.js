import React from 'react';
import {
  InputToolbar,
  Composer,
  Send,
  Bubble,
  Day,
  Time,
} from 'react-native-gifted-chat';
import {View, Dimensions, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import fontFamily from '../../utility/Font-Declarations';
import {decode} from 'html-entities';

export const renderInputToolbar = props => (
  <InputToolbar
    {...props}
    containerStyle={{
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 64,
    }}
    primaryStyle={{
      alignItems: 'center',
      backgroundColor: '#F2F2F2',
      borderRadius: 8,
      margin: 12,
    }}
  />
);

export const render_Blank_InputToolbar = props => <></>;

export const renderComposer = props => (
  <Composer
    {...props}
    textInputStyle={{
      color: '#222B45',
      borderRadius: 5,
      width: Dimensions.get('window').width,
      paddingTop: 8.5,
      paddingHorizontal: 12,
      marginLeft: 0,
    }}
  />
);

export const renderSend = ({
  selectFile,
  selectImage,
  ...props
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <TouchableOpacity
        // hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
        onPress={() => selectImage()}
      >
        <View
          style={{
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Icon name={'photo-camera'} size={22} color="#657180" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        // hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
      onPress={() => selectFile()}
      >
        <View
          style={{
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Icon name={'attach-file'} size={22} color="#657180" />
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
          marginRight: 10,
        }}>
        <Icon name={'send'} size={22} />
      </Send>
    </View>
  );
};

export const renderBubble = props => {
  return (
    <Bubble
      {...props}
      touchableProps={{disabled: true}} // <= put this in to fix!
      renderCustomView={() => (
        <View style={{minWidth: 70}}>
          <Text
            style={{
              color: '#5F6368',
              fontFamily: fontFamily.Poppins,
              fontSize: 12,
            }}>
            {decode(props.currentMessage.message)}
          </Text>
        </View>
      )}
      containerStyle={{
        left: {
          paddingBottom: 15,
          marginLeft: -20,
        },
        right: {
          paddingBottom: 15,
          marginRight: 16,
        },
      }}
      wrapperStyle={{
        left: {
          backgroundColor: '#FFFFFF',
          borderBottomLeftRadius: 0,
          padding: 8,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.1,
          elevation: 1,
        },
        right: {
          backgroundColor: '#F4FBFF',
          borderBottomLeftRadius: 0,
          padding: 8,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.1,
          elevation: 1,
        },
      }}
    />
  );
};

export const renderDays = props => {
  return (
    <Day
      {...props}
      textStyle={{
        color: '#657180',
        fontFamily: fontFamily.Poppins,
        fontSize: 10,
        lineHeight: 16,
        marginBottom: 10,
      }}
      dateFormat={'DD MMM YYYY'}
    />
  );
};

export const renderTime = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        // backgroundColor:'red'
      }}>
      <View
        style={{
          backgroundColor: '#5F6368',
          height: 4,
          width: 4,
          borderRadius: 2,
        }}></View>
      <Time
        {...props}
        timeTextStyle={{
          left: {
            color: '#5F6368',
            paddingTop: 4,
            fontFamily: fontFamily.Poppins,
            fontSize: 10,
          },
          right: {
            color: '#5F6368',
            paddingTop: 4,
            fontFamily: fontFamily.Poppins,
            fontSize: 10,
          },
        }}
        containerStyle={{
          left: {
            marginLeft: 5,
          },
          right: {
            marginLeft: 5,
          },
        }}
        // dateFormat={'YY MMM YYYY'}
      />
    </View>
  );
};

export const renderCustomView = ({currentMessage, ...props}) => {
  return <>{currentMessage.media_type == 'file' && <View></View>}</>;
};

// renderMessageImage
export const renderMessageImage = ({currentMessage, ...props}) => {
  return (
    <>
      {/* {currentMessage.media_type == 'file' && ( */}
      <View
        style={{
          width: 150,
          height: 100,
        }}>
        {/* <ImageBackground
           source={require('../../assets/images/placholder_image.png')}
           resizeMode="contain"
           style={{flex: 1, justifyContent: 'center'}}> */}
        {/* <SingleImage uri={currentMessage.image}> */}
        <Image
          key={new Date()}
          source={{uri: currentMessage.image}}
          style={{
            width: 150,
            height: 100,
          }}
          resizeMode="cover"
        />
        {/* </SingleImage> */}
        {/* </ImageBackground> */}
      </View>
      {/* )} */}
    </>
  );
};
