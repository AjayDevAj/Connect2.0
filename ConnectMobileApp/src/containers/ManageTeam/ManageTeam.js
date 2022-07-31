
import { View, Text, TextInput, FlatList, SafeAreaView, TouchableOpacity, Pr, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopHeader from '../../Header/TopHeader';
import manageTeamStyles from './ManageTeamStyleSheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import fontFamily from '../../utility/Font-Declarations';
import { getOtpResponse } from '../../utility/StorageClass';
import { otpResponse_Storage_Key } from '../../utility/Constant';
import { API_URL_STAGING } from '../../utility/Config_File';
 import {signOut} from '../../navigation/Routes'
import { useIsFocused } from "@react-navigation/native";
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { result } from 'lodash';
import AddNewMember from './AddNewMember';
import NavigationString from '../../utility/NavigationString'


export default function ManageTeam({ navigation }) {

    var userdata
    const isFocused = useIsFocused();
    const [UserListwith_Role, setUserListwith_Role] = useState(0);
    const [customStyleIndex, setCustomStyleIndex] = useState(0);
    const [customSelectedIndex, setCustomSelectedIndex] = useState(0);
    const [n, setN] = useState({ data: { admin: {} } });
    const [manager, setmanager] = useState({ data: { manager: {} } });
    const [usercount, setusercount] = useState({ data: { count: {} } });


    const handleCustomIndexSelect = (index) => {
        // Tab selection for custom Tab Selection
        setCustomStyleIndex(index);
    };

    const menuHandler = () => {
        navigation.goBack();
    };

    useEffect(() => {
        if (isFocused) {
            console.log("use effect......")
            getAllUserData();
        }
    }, [isFocused]);

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 1,
                    width: '90%',
                    marginLeft: 15,
                    backgroundColor: '#00000010',
                    marginTop: 20
                }}
            />
        );
    };

    //Calling API.
    const getAllUserData = async () => {

        var data = "";

        /****** get token from store asy class... */
        const token_Value = await getOtpResponse(otpResponse_Storage_Key)

        var api_url = API_URL_STAGING + '/user/auth/get-user-with-role';
        var headers = {
            Authorization:
                `Bearer ${token_Value.token}`,
            'Content-Type': 'application/json',
        }
        var Params = {
            location_id: '1',
            all_user: '1'
        }
        const response = await fetch(api_url, {
            method: 'GET',
            headers: headers,
            Params: Params
        })
            .then((response) => response.json())
            .then((responseJson) => {

                data = responseJson;
                console.log(responseJson);
                console.log("Promisees from API Responce------>", responseJson)

                //const user_Name = responseJson.data
                if (responseJson != undefined && responseJson.data != undefined && responseJson.data.admin != undefined) {
                    console.log("..........");
                    console.log(responseJson)
                    setUserListwith_Role(responseJson)
                    setN(responseJson)
                    setmanager(responseJson)
                    setusercount(responseJson
                    )
                    userdata = responseJson
                }

                console.log("user data ====>>>>>>> ", userdata.data.admin);
                const user_Phone_num = userdata.data.admin[0].mobile_number
                console.log("user_Phone_num ====>>>>>>> ", user_Phone_num);

            })
            .catch((error) => {
                console.error(error);
            });

        switch (response.status) {
            case response.status > 400:
                console.log("11111");
                throw new Error(data.errors);
                break;
            case 204:
                console.log("22222");
                throw new Error("NO Data")
                break;
            case 401:
                console.log("3x3x3x");
                signOut()
        }
        return data;
    }

    return (
        <View style={manageTeamStyles.manageTeamMainContainer}>

            <TopHeader
                name={'Uddyog Vihar'}
                firstIcon={'arrow-back'}
                //name={headerName.name}
                menuHandler={menuHandler}
                arrowDownIcon={"keyboard-arrow-down"}
            
            />

            <TouchableOpacity style={manageTeamStyles.addMemberView}
               onPress={() => navigation.navigate(NavigationString.AddNewMember)}>
                <Icon name='group-add' size={28} style={{ marginLeft: 20, alignSelf: 'center', color: '#0E0071' }} />
                <Text style={{ marginLeft: 10, alignSelf: 'center', fontWeight: 'bold', fontFamily: fontFamily.Alte_DIN, fontSize: 16, color: '#0E0071' }} > Add New Member</Text>
                <Icon name='chevron-right' size={28} style={{ alignSelf: 'center', color: '#0E0071', left: 150 }} />
                
            </TouchableOpacity>

            <View style={manageTeamStyles.searchItem}>
                <TextInput
                    style={manageTeamStyles.searchTextInputStyle}
                    placeholder="Search hear..."
                />
                <Icon name='search' size={20} style={{ alignSelf: 'center', color: '#657180', right: 30, position: 'absolute' }} />
            </View>

            <View style={manageTeamStyles.addSegmentView}>
                <SegmentedControlTab
                    values={["Admin", "Managers", ""]}
                    tabStyle={manageTeamStyles.tabStyle}
                    tabTextStyle={manageTeamStyles.tabTextStyle}
                    activeTabStyle={manageTeamStyles.activeTabStyle}
                    activeTabTextStyle={manageTeamStyles.activeTabTextStyle}
                    selectedIndex={customStyleIndex}
                   // badges={usercount.data.count[0].admin_count}
                  // badges={[adminCount]}
                    
                    onTabPress={handleCustomIndexSelect}
                />
            </View>

            {customStyleIndex === 0 && (
                <View style={{ flex: 1, backgroundColor: 'white' }}>

                    <FlatList
                        ItemSeparatorComponent={ItemSeparatorView}
                        data={n.data.admin}
                        renderItem={({ item }) => (

                            <TouchableOpacity style={{ width: '100%', marginTop: 2, flexDirection: 'row' }}
                              onPress={() => navigation.navigate(NavigationString.EditMember,{
                                name:item.name,
                                number:item.mobile_number
                              })}>

                                <View style={{ backgroundColor: '#F8D1FF', width: 25, height: 25, marginTop: 15, alignItems: 'center', marginLeft: 15, borderRadius: 25 / 2 }}>
                                    <Text style={{ marginTop: 4, color: '#0E0071', fontSize: 13 }}>{item.name.charAt(0)}</Text>

                                </View>

                                <View style={{ width: '75%', }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14, marginLeft: 15, marginTop: 15, fontFamily: fontFamily.Alte_DIN, }}>{item.name} </Text>
                                    <Text style={{ color: 'black', fontSize: 12, marginLeft: 15, marginTop: 5, fontFamily: fontFamily.Poppins, }}>{item.mobile_number}</Text>
                                </View>

                                <View>
                                    <Icon name='chevron-right' size={20} style={{ left: 5, marginTop: 20, color: 'gray' }} />
                                </View>

                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}

            {/* for manager tab */}
            {customStyleIndex === 1 && (
                <View style={{ backgroundColor: 'white', flex: 1 }}>
                    <FlatList

                        ItemSeparatorComponent={ItemSeparatorView}
                        data={n.data.manager}
                        renderItem={({ item }) => (

                            <TouchableOpacity style={{ width: '100%', marginTop: 2, flexDirection: 'row' }}>

                                <View style={{ backgroundColor: '#685CBA', width: 25, height: 25, marginTop: 15, alignItems: 'center', marginLeft: 15, borderRadius: 25 / 2 }}>
                                    <Text style={{ marginTop: 4, color: 'white', fontSize: 13 }}>{item.name.charAt(0)}</Text>
                                </View>

                                <View style={{ width: '75%', }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14, marginLeft: 15, marginTop: 15, fontFamily: fontFamily.Alte_DIN, }}>{item.name} </Text>
                                    <Text style={{ color: 'black', fontSize: 12, marginLeft: 15, marginTop: 5, fontFamily: fontFamily.Poppins, }}>{item.mobile_number}</Text>
                                </View>

                                <View>
                                    <Icon name='chevron-right' size={20} style={{ left: 5, marginTop: 20, color: 'gray' }} />
                                </View>

                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    )
}