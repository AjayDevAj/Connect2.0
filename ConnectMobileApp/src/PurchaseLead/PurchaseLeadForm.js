import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Switch, TextInput, Dimensions, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import TagInput from 'react-native-tags-input';

import purchaseLeadStyles from './styles/PurchaseLeadStylesheet';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const ValidatePurchaseSchema = yup.object({
    // display_name: yup.string(),
    // intents: yup.string(),
    // publisher_type: yup.string(),
    // location_id: yup.string(),
    // interests: yup.string(),
    // comments: yup.string(),

    mobile_number: yup
    .string()
    // .matches(/(01)(\d){8}\b/, 'Enter a valid mobile number')
    .matches(phoneRegExp, 'Entered mobile number is not valid')
    .required('Mobile number is required'),
    email: yup
    .string()
    // .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    .email("Please enter valid email")
    .required('Email is required'),
});

const PurchaseLeadForm = ({  
    type='', 
    formHandler, 
    cancelHandler,
    conversation_id, 
    formData,
    id,
    customer_intent=[],
    name='',
    customer_interest=[]
    
}) => {
    // var initial_interest_value = '';
    const [isEnabled, setIsEnabled] = useState(true);
    const [intentsVal, setIntentsVal] = useState([]);
    
    const [interestVal, setInterestVal] = useState([]);
    const [initialInterestValue, setInitialInterestValue] = useState('');
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
        if(customer_intent !== '' || customer_intent !== undefined) {
            customer_intent.map((item) => {
                (!intentsVal.includes(item)) &&
                setIntentsVal(current => [...current, item])
                })
        }
    }, [customer_intent]);

    useEffect(() => {
        if(customer_interest !== '' || customer_interest !== undefined) {
            customer_interest.map((item) => {
                (!interestVal.includes(item)) &&
                setInterestVal(current => [...current, item])
                })
                setInitialInterestValue(interestVal.toString())
        }
    }, [customer_interest]);
    
    const customerInterestVal = (interest_entered_value='') => {
        {interest_entered_value !== '' &&
            Array.isArray(interest_entered_value) ?
                interest_entered_value.map((item) => {
                (!interestVal.includes(item)) &&
                    setInterestVal(current => [...current, item])
                })
            : (!interestVal.includes(item)) &&
            setInterestVal(current => [...current, item])
        }
        
        return interestVal;
    }
    console.log('=== set State customer Value ===', interestVal);
    console.log('=== set State string customer Value ===', initialInterestValue);
    return (
        <ScrollView style={ purchaseLeadStyles.purchaseLeadFormContainer }>
            <Formik 
                initialValues={{ 
                    display_name: name, 
                    intents: intentsVal, 
                    entry_points: formData.entry_points,
                    location_id: formData.location_id, 
                    location_name: formData.location, 
                    mobile_number: formData.mobile_number,
                    email: formData.email,
                    interests: initialInterestValue,
                    // interests: interestVal.toString(),
                    comments: formData.comments,
                    conversation_id: conversation_id,
                    id: formData.id
                }}
                validationSchema={ValidatePurchaseSchema}
                onSubmit={(values, actions) => {
                    values.intents = intentsVal.toString();
                    {values.interests !== undefined && customerInterestVal(values.interests.split(/[\s,]+/))}
                    values.interests = interestVal.toString();
                    console.log('===== Form Values =====',values);

                    formHandler(values);
                    alert(name + ' customer data updated successfully');
                    // actions.resetForm();
                }}
            >
                
                {(props) => (
                    <>
                    <Text style={ purchaseLeadStyles.purchaseLeadFormLabel }>Customer Name</Text>
                    <TextInput 
                        style={ purchaseLeadStyles.purchaseLeadFormTextInput }
                        onChangeText={props.handleChange('display_name')}
                        value={props.values.display_name}
                        onBlur={props.handleBlur('display_name')}
                    />
                    <Text style={ purchaseLeadStyles.errorText }>{props.touched.display_name && props.errors.display_name}</Text>

                    <View>
                        <Text style={purchaseLeadStyles.purchaseLeadFormLabel}>Intent</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, marginRight: '30%'}}>
                            <TouchableOpacity style={intentsVal.includes(1) ? [purchaseLeadStyles.intentButton, { borderColor: '#2F6EF3', backgroundColor: '#FAFDFF',}] : purchaseLeadStyles.intentButton}  onPress={() => {
                                (!intentsVal.includes(1)) 
                                    ? 
                                        setIntentsVal(current => [...current, 1])
                                    : 
                                        setIntentsVal((current) => {
                                            return current.filter((todos) => todos !== 1);
                                        })
                                }}>
                                <Text style={intentsVal.includes(1) ? [purchaseLeadStyles.intentText, { color: '#2F6EF3', }] : purchaseLeadStyles.intentText}>Purchase</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={intentsVal.includes(4) ? [purchaseLeadStyles.intentButton, { borderColor: '#2F6EF3', backgroundColor: '#FAFDFF',}] : purchaseLeadStyles.intentButton}  onPress={() => {
                                (!intentsVal.includes(4)) 
                                    ? 
                                        setIntentsVal(current => [...current, 4])
                                    : 
                                        setIntentsVal((current) => {
                                            return current.filter((todos) => todos !== 4);
                                        })
                                }}>
                                <Text style={intentsVal.includes(4) ? [purchaseLeadStyles.intentText, { color: '#2F6EF3', }] : purchaseLeadStyles.intentText}>Engagement</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={intentsVal.includes(3) ? [purchaseLeadStyles.intentButton, { borderColor: '#2F6EF3', backgroundColor: '#FAFDFF',}] : purchaseLeadStyles.intentButton}  onPress={() => {
                                (!intentsVal.includes(3)) 
                                    ? 
                                        setIntentsVal(current => [...current, 3]) 
                                    : 
                                        setIntentsVal((current) => {
                                            return current.filter((todos) => todos !== 3);
                                        })
                                }}>
                                <Text style={intentsVal.includes(3) ? [purchaseLeadStyles.intentText, { color: '#2F6EF3', }] : purchaseLeadStyles.intentText}>Support</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Purchase - hot lead */}
                        {/* Engagement -follow up required */}

                        {(intentsVal != '' && !intentsVal.includes(3)) ? (
                            <View style={ purchaseLeadStyles.intentSwitchContainer }>
                                <Text style={[purchaseLeadStyles.purchaseLeadFormLabel, { fontWeight: 'bold', textAlign: 'left', marginRight: 100, opacity: 0.7}]}>{intentsVal.includes(1) ? 'Hot Lead' : intentsVal.includes(4) ? 'Follow up required' : ''}</Text>
                                <Switch
                                    trackColor={{ false: "#F4F4F4", true: "#0070FC" }}
                                    thumbColor={isEnabled ? "#FFFFFF" : "#E4E4E4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        ) : (
                            <View style={{ marginVertical: 12 }}></View>
                        )}
                    </View>

                    <Text style={ purchaseLeadStyles.purchaseLeadFormLabel }>Entry Point</Text>
                    <TextInput 
                        style={ [purchaseLeadStyles.purchaseLeadFormTextInput, { backgroundColor: '#F8F8F8'}] }
                        onChangeText={props.handleChange('entry_points')}
                        value={props.values.entry_points}
                        onBlur={props.handleBlur('entry_points')}
                    />
                    <Text style={ purchaseLeadStyles.errorText }>{props.touched.publisher_type && props.errors.publisher_type}</Text>

                    <Text style={ purchaseLeadStyles.purchaseLeadFormLabel }>Location</Text>
                    <TextInput 
                        style={ purchaseLeadStyles.purchaseLeadFormTextInput }
                        onChangeText={props.handleChange('location_name')}
                        value={props.values.location_name}
                        onBlur={props.handleBlur('location_name')}
                    />
                    <Text style={ purchaseLeadStyles.errorText }>{props.touched.location_name && props.errors.location_name}</Text>

                    <Text style={ purchaseLeadStyles.purchaseLeadFormLabel }>Mobile Number</Text>
                    
                    <TextInput 
                        style={ purchaseLeadStyles.purchaseLeadFormTextInput }
                        onChangeText={props.handleChange('mobile_number')}
                        value={props.values.mobile_number}
                        onBlur={props.handleBlur('mobile_number')}
                    />
                    <Text style={ purchaseLeadStyles.errorText }>{props.touched.mobile_number && props.errors.mobile_number}</Text>

                    <Text style={ purchaseLeadStyles.purchaseLeadFormLabel }>Email ID</Text>
                    <TextInput 
                        style={ [purchaseLeadStyles.purchaseLeadFormTextInput, { textTransform : 'none'}] }
                        onChangeText={props.handleChange('email')}
                        value={props.values.email}
                        onBlur={props.handleBlur('email')}
                    />
                    <Text style={ purchaseLeadStyles.errorText }>{props.touched.email && props.errors.email}</Text>

                    <Text style={ purchaseLeadStyles.purchaseLeadFormLabel }>Interests</Text>
                    <TextInput 
                        style={ purchaseLeadStyles.purchaseLeadFormTextInput }
                        onChangeText={props.handleChange('interests')}
                        value={props.values.interests}
                        onBlur={props.handleBlur('interests')}
                    />
                    <Text style={ purchaseLeadStyles.errorText }>{props.touched.interests && props.errors.interests}</Text>

                    <Text style={ purchaseLeadStyles.purchaseLeadFormLabel }>Comments</Text>
                    <TextInput 
                        multiline minHeight={80}
                        style={ purchaseLeadStyles.purchaseLeadFormTextInput }
                        onChangeText={props.handleChange('comments')}
                        value={props.values.comments}
                        onBlur={props.handleBlur('comments')}
                    />
                    <Text style={ purchaseLeadStyles.errorText }>{props.touched.comments && props.errors.comments}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-around', marginBottom: 80}}>
                        <TouchableOpacity onPress={cancelHandler}>
                            <View style={purchaseLeadStyles.cancelButton}>
                                <Text style={purchaseLeadStyles.cancelButtonText}>Cancel</Text>
                            </View>
                        </TouchableOpacity>  

                        <TouchableOpacity onPress={props.handleSubmit}>
                            <View style={purchaseLeadStyles.updateButtonStyle}>
                                <Text style={purchaseLeadStyles.updateButtonTextStyle}>{type == 'add' ? 'Add Customer' : 'Update' }</Text>
                            </View>
                        </TouchableOpacity>  
                    </View>
                    
                    </>
                )}
            </Formik>
        </ScrollView>
    )
};

export default PurchaseLeadForm;