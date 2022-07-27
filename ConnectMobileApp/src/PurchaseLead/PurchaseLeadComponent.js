import React, {useEffect, useState } from 'react';
import {View, ImageBackground } from 'react-native';
import TopHeader from '../Header/TopHeader';
import chatStyles from '../AllChat/styles/AllChatChatStylesheet';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import { loadLeadData } from '../actions/CustomerAction';
import { sendLead } from '../api/sendLead';
import PurchaseLeadForm from './PurchaseLeadForm';

const PurchaseLeadComponent = ({navigation, route, firstIcon, color='', name, logo, 
    menuHandler, conversation_id, type='', customer_intent=''}) => {
        const [customerIntentVal, setCustomerIntentVal] = useState([]);
        const [customerInterestVal, setCustomerInterestVal] = useState([]);
        const dispatch = useDispatch();
        const isFocused = useIsFocused();

        var GetLeadResponseData= useSelector(
            store => store.GetLeadResponseData
        );
        
        const getLeadApi = (location_id=0, id=0, conversation_id='') => {
            dispatch(loadLeadData(location_id, id, conversation_id));
        }

        useEffect(() => {
            if (conversation_id) {
                getLeadApi(0,0,conversation_id);

                {GetLeadResponseData !== undefined && 
                    GetLeadResponseData.data !== undefined && 
                    GetLeadResponseData.data.intent_list !== undefined && 
                    (GetLeadResponseData.data.intent_list !== '' && 
                        GetLeadResponseData.data.intent_list.map((item) => {
                            ((item.selected == true) && (!customerIntentVal.includes(item.id))) && 
                            setCustomerIntentVal(current => [...current, item.id])
                        })
                    )
                }

                {GetLeadResponseData !== undefined && 
                    GetLeadResponseData.data !== undefined && 
                    GetLeadResponseData.data.customer_interest !== undefined && 
                    (
                        GetLeadResponseData.data.customer_interest !== '' && 
                            GetLeadResponseData.data.customer_interest.map((item) => {
                                (!customerInterestVal.includes(item)) && 
                                setCustomerInterestVal(current => [...current, item])
                            })
                    )
                }
            }
        }, [conversation_id]);

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
                    type={type}
                    formHandler={formHandler}
                    cancelHandler={menuHandler}
                    formData={GetLeadResponseData.data.customer_lead} 
                    customer_interest={customerInterestVal} 
                    conversation_id={conversation_id}
                    name={name}
                    customer_intent={customerIntentVal}
                /> 
            )} 
        </View>
    );
};

export default PurchaseLeadComponent;