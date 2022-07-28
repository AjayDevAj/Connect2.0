import React from 'react';
import {View, ImageBackground } from 'react-native';
import TopHeader from '../Header/TopHeader';
import chatStyles from '../AllChat/styles/AllChatChatStylesheet';
import { sendLead } from '../api/sendLead';
import PurchaseLeadForm from './PurchaseLeadForm';

const PurchaseLeadComponent = ({ navigation, route }) => {
    const getLeadDataParams = route.params;
    console.log('getLeadDataParams ', getLeadDataParams);
    var GetLeadResponseData = getLeadDataParams.selectedLeadItem;
    var customerIntentVal = getLeadDataParams.selectedLeadIntentVal;
    var customerInterestVal = getLeadDataParams.selectedLeadInterestVal;

    const formHandler = (customerFormValue) => {
        console.log('===== Set Lead Value API =====', customerFormValue);
        sendLead(
            customerFormValue.display_name, customerFormValue.mobile_number, 
            customerFormValue.email, customerFormValue.conversation_id, 
            customerFormValue.interests, customerFormValue.comments, 
            customerFormValue.intents, customerFormValue.entry_points, 
            customerFormValue.location_id, customerFormValue.id 
        );
        navigation.goBack();
    }
    
    return (
        <View style={[chatStyles.chatMainContainer, {backgroundColor: '#FFF' }]}>
            <TopHeader
                firstIcon={getLeadDataParams.firstIcon}
                secondIcon=""
                thirdIcon=""
                color={getLeadDataParams.color}
                name={getLeadDataParams.name}
                menuHandler={() => {
                    navigation.goBack()
                }}
                logo={getLeadDataParams.logo}
            />

            {GetLeadResponseData !== undefined && (
                <PurchaseLeadForm 
                    type={getLeadDataParams.type}
                    formHandler={formHandler}
                    cancelHandler={() => {
                        navigation.goBack()
                    }}
                    formData={GetLeadResponseData} 
                    customer_interest={customerInterestVal} 
                    conversation_id={getLeadDataParams.conversation_id}
                    name={getLeadDataParams.name}
                    customer_intent={customerIntentVal}
                /> 
            )} 
        </View>
    );
};

export default PurchaseLeadComponent;