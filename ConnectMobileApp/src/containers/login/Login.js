
import React, { useEffect, useState } from 'react';
import {
    View, Alert,
    Text, StyleSheet,
    TextInput, Image,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView, ScrollView, Platform
} from 'react-native';

import { image } from '../images/Image';
import { Component } from 'react';
import { Node } from 'react';
import { connect } from 'react-redux';
import { loadLoginData } from '../../actions/LoginAction';
import { useDispatch, useSelector } from 'react-redux';
import styles from './LoginStyleSheet';
import navigationString from '../../constent/navigationString';
import Routes from '../../navigation/Routes';



const Login = ({navigation}) => {

    const dispatch = useDispatch();
    const loginResponce = useSelector(store => store.loginDataResponse)
    const [textInputPhoneNum, setTextInputPhoneNum] = useState('');

    const [activeBtn, setActiveBtn] = useState('rgba(112, 112, 112, 0.22)');
    const [inputVal, setInputVal] = useState('');

    const [disbaleval, setVisbal] = useState(true);
    const [responseerror,setError] = useState('false');


    useEffect(() => {
        console.log("loginResponce : ", JSON.stringify(loginResponce.message));

        if (JSON.stringify(loginResponce.message) != null) {
            console.log("Login Msg type Error :=>>>", JSON.stringify(loginResponce))
            // console.log("Login Msg type Msg :=>>>", loginResponce.message)

            if ((loginResponce.error) == true ) {
                setError('true');
                console.log("useEffect loginResponce true ::::",loginResponce)


            }else{
                setError('false');
                console.log("useEffect loginResponce false ::::",loginResponce)

            }
        }
    }, [loginResponce]);


    //Check for the Phone Number TextInput
    const checkTextInput = async () => {
        if (!textInputPhoneNum.trim()) {
            alert('Please Enter Mobile Number');
        }
        else if (textInputPhoneNum.trim().length != 10) {
            alert('Please enter 10 digit valid mobile number');


        } else {
            //calling API login
            dispatch(loadLoginData(textInputPhoneNum))
             

        }
    };

    const onChangeTextChar = (enterString) => {
        console.log(`onChangeText: ${enterString}`);
        if (enterString.trim().length > 0) {
            // setError('false')
            if (/^-?\d+$/.test(enterString)) {
                setInputVal(enterString);
            } else {
                Alert.alert("Please enter a valid phone number.")
            }
        } else {
            setInputVal(enterString.trim());
        }
    };

    return (
        <SafeAreaView
            style={{ flex: 1 }}>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''} animated={true}
                style={{ backgroundColor: 'rgba(247, 252, 255, 1)', flex: 1 }} >

                <View>
                    <View
                        style={styles.CircilePostion}
                    ></View>
                </View>

                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <View style={{ position: 'absolute', bottom: 0, width: "100%" }}>

                        <View
                            style={styles.UpperView}>
                            <Image
                                style={styles.ImageView}
                                resizeMode='contain'
                                source={image.backgroundImage}
                            />
                        </View>

                        <View
                            style={styles.BottomView}>
                            <Text
                                style={styles.EnterText}> Enter Your </Text>
                            <Text
                                style={styles.MobileText}> Mobile Number </Text>
                            <Text
                                style={styles.NormalText}> A 4 digit OTP will be sent to verify your number
                            </Text>
                              {console.log("UIView: 118: ",responseerror)}
                            <View style={responseerror  == 'true' ? styles.TextInputViewError : styles.TextInputView}
                            >
                                <Text style={{
                                    fontSize: 15,
                                    marginLeft: 5,

                                }}> +91 </Text>

                                <TextInput
                                    placeholder="Enter 10 Digit Mobile No."
                                    placeholderTextColor="gray"
                                    keyboardType={'phone-pad'}
                                    maxLength={10}
                                    dataDetector="phoneNumber"
                                    value={inputVal}
                                    onChangeText={
                                        (value) => {
                                            //console.log('TextInput value : ', value)
                                            onChangeTextChar(value)
                                            setTextInputPhoneNum(value)
                                            if (value.trim().length === 10) {
                                                setActiveBtn('rgba(rgba(14, 0, 113, 1))')
                                                setVisbal(false)
                                            } else {
                                                setActiveBtn('rgba(112, 112, 112, 0.22)')
                                                setVisbal(true)
                                            }
                                        }
                                    }
                                    style={styles.TextInput}>
                                </TextInput>
                            </View>

                            {console.log("UIView 150:",responseerror)}

                            {responseerror  == 'true' ? <Text style={styles.errorMsg}>
                                Mobile no. doesn't exist
                            </Text> : null}

                            <TouchableOpacity disabled={disbaleval}
                                style={[styles.OtpBtn, { backgroundColor: activeBtn }]} onPress={()=>navigation.navigate(navigationString.GetOtpScreen)}>

                                <Text style={styles.OtpText}>
                                    GET OTP
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Login;

