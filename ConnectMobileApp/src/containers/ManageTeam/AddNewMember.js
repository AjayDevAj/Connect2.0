
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import TopHeader from '../../Header/TopHeader';
import addManageTeamStyles from './AddNewMemberStyleSheet';

export default function AddNewMember({ navigation }) {

    const menuHandler = () => {
        navigation.goBack();
    };

    return (
        <View style={addManageTeamStyles.addManageTeamMainContainer}>

            <TopHeader
                name={'Add Member'}
                firstIcon={'arrow-back'}
               // thirdIcon={'more-vert'}
                //name={headerName.name}
                menuHandler={menuHandler}
            />

            <ScrollView>
                <View>
                    <Text style={addManageTeamStyles.textDataStyle}>
                        Enter Name
                    </Text>

                    <TextInput style={addManageTeamStyles.texInputStyle}
                        placeholder="Enter Name"


                    >

                    </TextInput>

                    <Text style={addManageTeamStyles.textDataStyle}>
                        Mobile Number
                    </Text>

                    <TextInput style={addManageTeamStyles.texInputStyle}
                        placeholder="Enter Mobile Number"

                    >


                    </TextInput>

                    <Text style={addManageTeamStyles.chooseTextStyle}>
                        Choose A Role
                    </Text>

                    <View style={addManageTeamStyles.chooseViewStyle}>

                        <Text style={addManageTeamStyles.radioBtnAdminStyle}>
                            Admin
                        </Text>

                        <Text style={addManageTeamStyles.radioBtnManagerStyle}>
                            Manager
                        </Text>

                    </View>

                    <Text style={addManageTeamStyles.chooseTextStyle}>
                        Allow access to
                    </Text>

                </View>

            </ScrollView>

            <View style={addManageTeamStyles.bottomBtnView}>
                <TouchableOpacity style={addManageTeamStyles.cancleBtnStyle}
                  onPress={() => navigation.goBack()}>
                    <Text style={addManageTeamStyles.cancleTextStyle}>
                        CANCLE
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity style={addManageTeamStyles.updateBtnStyle}>
                <Text style={addManageTeamStyles.updateTextStyle}>
                        UPDATE
                </Text>
                </TouchableOpacity>




            </View>




        </View>
    )
}