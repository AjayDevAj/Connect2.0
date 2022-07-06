import React, {useEffect, useState, useCallback} from 'react';
import {View, ImageBackground } from 'react-native';
import TopHeader from '../../Header/TopHeader';
import chatStyles from '../../AllChat/styles/AllChatChatStylesheet';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import { loadLeadData, sendLeadData } from '../../actions/CustomerAction';
import PurchaseLeadForm from './PurchaseLeadForm';
// No customer data screen, close chat reason in api, 

const PurchaseLeadComponent = ({navigation, route, firstIcon, color='', name, logo, 
    menuHandler, conversation_id, dataComponent='', type='', customer_intent='', }) => {
    const dispatch = useDispatch();
    const isFocused = useIsFocused();

    var GetLeadResponseData= useSelector(
        store => store.GetLeadResponseData
    );
    
    const SendLeadResponseData= useSelector(
        store => store.SendLeadResponseData
    );

    const getLeadApi = (location_id=0, id=0, conversation_id='') => {
        dispatch(loadLeadData(location_id, id, conversation_id));
    }

    const saveAPI = (name='', mobile_number='', email='', conversation_id='', interests='', comments='', intents='', entry_points='', location_id=0, id=0) => {
        dispatch(sendLeadData(name, mobile_number, email, conversation_id, interests, comments, intents, entry_points, location_id, id))
    };

    useEffect(() => {
        if (conversation_id) {
            getLeadApi(0,0,conversation_id);
        }
    }, [conversation_id]);

    const formHandler = (customerFormValue) => {
        saveAPI(customerFormValue.display_name, customerFormValue.mobile_number, 
          customerFormValue.email, customerFormValue.conversation_id, 
          customerFormValue.interests, customerFormValue.comments, 
          customerFormValue.intents, customerFormValue.entry_points, 
          customerFormValue.location_id, customerFormValue.id 
        );
        console.log('===== Set Lead Value API =====', customerFormValue);
        getLeadApi(0,0,customerFormValue.conversation_id);
    }
    console.log('===== Get Lead Value API =====', GetLeadResponseData);
    
    return (
        <View style={[chatStyles.chatMainContainer, {backgroundColor: '#FFF' }]}>
            <TopHeader
                firstIcon={firstIcon}
                secondIcon=""
                thirdIcon=""
                color={color}
                name={name}
                menuHandler={menuHandler}
                logo={logo}
            />

            {GetLeadResponseData !== undefined && 
            GetLeadResponseData.data !== undefined && 
            GetLeadResponseData.data.customer_lead !== undefined && (
                <PurchaseLeadForm 
                    formData={GetLeadResponseData.data.customer_lead} 
                    navigation={navigation}
                    formHandler={formHandler}
                    conversation_id={conversation_id}
                    name={name}
                    dataComponent={dataComponent}
                    type={type}
                    customer_intent={customer_intent}
                    cancelHandler={menuHandler}
                /> 
            )}
        </View>
    );
};

export default PurchaseLeadComponent;