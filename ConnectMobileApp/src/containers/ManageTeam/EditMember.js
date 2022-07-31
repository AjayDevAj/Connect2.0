

import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import TopHeader from '../../Header/TopHeader';
import editManageTeamStyles from './EditMemberStyleSheet';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { useIsFocused } from "@react-navigation/native";
import { API_URL_STAGING } from '../../utility/Config_File';
import { getOtpResponse } from '../../utility/StorageClass';
import { otpResponse_Storage_Key } from '../../utility/Constant';
import NavigationString from '../../utility/NavigationString';
import { signOut } from '../../navigation/Routes'


export default function EditMember({ route, navigation }) {

    var myPermissionData
    const isFocused = useIsFocused();

    const { name, number } = route.params;
   // console.log('Name and number======>', name, number)

    const [radioValue, setRadioValue] = useState();

    const [routeTitle, setRouteTitle] = useState([]);
    const [data, setData] = useState([]);


    const menuHandler = () => {
        navigation.goBack();
    };

    var radio_props = [
        { label: 'Admin', value: 0 },
        { label: 'Manager', value: 1 }
    ];

    useEffect(() => {
        if (isFocused) {
            //console.log("use effect calling......")
            getPermissionData();
        }
    }, [isFocused],[]);

    //Calling API.
    const getPermissionData = async () => {

        /****** get token from store asy class... */
        const token_Value = await getOtpResponse(otpResponse_Storage_Key)

        var api_url = API_URL_STAGING + '/permission/permission-list?';
        var headers = {
            Authorization:
                `Bearer ${token_Value.token}`,
            'Content-Type': 'application/json',
        }

        const response = await fetch(api_url, {
            method: 'GET',
            headers: headers,

        })
            .then((response) => response.json())
            .then((responseJson) => {

                setRouteTitle(responseJson.data.route)
                setData(responseJson.data)

                console.log("Permission API Responce ========>>>> ", responseJson.data)

                myPermissionData = responseJson.data
                console.log("myPermissionData API Responce  ==--------=====-------====  ", myPermissionData)

                if (responseJson != undefined && responseJson.data != undefined && responseJson.data.route != undefined) {
                    console.log("..........");
                    console.log(responseJson)
                }
            })
            .catch((error) => {
                console.error(error);
            });

        switch (response.status) {
            case response.status > 400:
                throw new Error(data.errors);
                break;
            case 204:
                throw new Error("NO Data")
                break;
            case 401:
                signOut()
        }
        return data;
    }


    return (
        <View style={editManageTeamStyles.addManageTeamMainContainer}>

            <TopHeader
                name={name}
                firstIcon={'arrow-back'}
                thirdIcon={'more-vert'}
                menuHandler={menuHandler}
            />

            <ScrollView 
                nestedScrollEnabled={true}>
                
                <View>
                    <Text style={editManageTeamStyles.textDataStyle}>
                        Enter Name
                    </Text>

                    <TextInput style={editManageTeamStyles.texInputStyle}
                        placeholder={name}
                    >
                    </TextInput>

                    <Text style={editManageTeamStyles.textDataStyle}>
                        Mobile Number
                    </Text>

                    <TextInput style={editManageTeamStyles.texInputStyle}
                        placeholder={number}
                    >
                    </TextInput>

                    <Text style={editManageTeamStyles.chooseTextStyle}>
                        Choose A Role
                    </Text>

                    <View style={editManageTeamStyles.chooseViewStyle}>

                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            formHorizontal={true}

                            onPress={(e) => {
                                setRadioValue({ value: e })
                                Alert.alert(e.toString())
                            }}
                        />

                        {/* <Text style={editManageTeamStyles.radioBtnAdminStyle}>
                            Admin
                        </Text>

                        <Text style={editManageTeamStyles.radioBtnManagerStyle}>
                            Manager
                        </Text> */}

                    </View>

                    <Text style={editManageTeamStyles.chooseTextStyle}>
                        Allow access to
                    </Text>
                    <FlatList 
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={{ paddingBottom: 10 }}>
                                {console.log("DAATADATATADA====", data)}

                                <Text style={{fontSize: 20,}}>
                                    {item.route}
                                </Text>
                                <Text style={{fontSize: 20,}}>
                                   djfhjdfshfh
                                </Text>
                            </View>
                        )}
                        
                    />
                </View>

            </ScrollView>

            <View style={editManageTeamStyles.bottomBtnView}>
                <TouchableOpacity style={editManageTeamStyles.cancleBtnStyle}
                    onPress={() => navigation.goBack()}>
                    <Text style={editManageTeamStyles.cancleTextStyle}>
                        CANCLE
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity style={editManageTeamStyles.updateBtnStyle}>
                    <Text style={editManageTeamStyles.updateTextStyle}>
                        EDIT
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}