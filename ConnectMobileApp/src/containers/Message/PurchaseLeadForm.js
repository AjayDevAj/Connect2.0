import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Switch, TextInput, Dimensions, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
// import TagInput from 'react-native-tags-input';

import purchaseLeadStyles from './styles/PurchaseLeadStylesheet';

const ValidatePurchaseSchema = yup.object({
    display_name: yup.string(),
    intents: yup.string(),
    publisher_type: yup.string(),
    location_id: yup.string(),
    email: yup.string(),
    interests: yup.string(),
    comments: yup.string(),
    // mobile_number: yup.string(),
    
    // .test('is-num-10', 'Mobile No. must be of 10 digit', (val) => {
    //     return parseInt(val) == 10;
    // })
});

const PurchaseLeadForm = ({ 
    formData, 
    navigation, 
    type='', 
    dataComponent='', 
    formHandler, 
    conversation_id, 
    customer_intent='',
    name='' 
}) => {
    const [isEnabled, setIsEnabled] = useState(true);
    const [interestVal, setInterestVal] = useState("dbdhdj");
    const [intentsVal, setIntentsVal] = useState(0);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    {dataComponent == 'customer' ? (
       <>
        {customer_intent !== '' 
            ? 
            customer_intent.map((item) => {
                setIntentsVal(item.id)
            }) 
            : ''
        }
        </>
    ) : ''}
    
    const [interestTags, setInterestTags] = useState({
        tag: "",
        tagsArray: ["dbdhdj", "cbjckd"]
    });
    const [tagsColor, setTagsColor] = useState('');
    const [tagsText, setTagsText] = useState('');

    const updateTagState = (state) => {
        setInterestTags({
            ...interestTags, 
            state
        });
        console.log("Interest Tags - ", interestTags);
    };
    
    return (
        <ScrollView style={ purchaseLeadStyles.purchaseLeadFormContainer }>
            <Formik 
                initialValues={{ 
                    display_name: name, 
                    intents: intentsVal, 
                    publisher_type: formData.channel, 
                    entry_points: formData.entry_points,
                    location_id: formData.location_id, 
                    location_name: formData.location, 
                    mobile_number: formData.mobile_number,
                    email: formData.email,
                    interests: interestVal,
                    comments: formData.comments,
                    conversation_id: conversation_id,
                    id: formData.id
                }}
                validationSchema={ValidatePurchaseSchema}
                onSubmit={(values, actions) => {
                    // console.log('===== Values =====',values);
                    // formHandler(values)
                    actions.resetForm();
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
                        // {...formData.getFieldProps('display_name')}
                    />
                    <Text style={ purchaseLeadStyles.errorText }>{props.touched.display_name && props.errors.display_name}</Text>

                    <View>
                        <Text style={purchaseLeadStyles.purchaseLeadFormLabel}>Intent</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, marginRight: '30%'}}>
                            <TouchableOpacity style={intentsVal == 1 ? [purchaseLeadStyles.intentButton, { borderColor: '#2F6EF3', backgroundColor: '#FAFDFF',}] : purchaseLeadStyles.intentButton}  onPress={() => setIntentsVal(1)}>
                                <Text style={intentsVal ==  1 ? [purchaseLeadStyles.intentText, { color: '#2F6EF3', }] : purchaseLeadStyles.intentText}>Purchase</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={intentsVal == 4 ? [purchaseLeadStyles.intentButton, { borderColor: '#2F6EF3', backgroundColor: '#FAFDFF',}] : purchaseLeadStyles.intentButton}  onPress={() => setIntentsVal(4)}>
                                <Text style={intentsVal == 4 ? [purchaseLeadStyles.intentText, { color: '#2F6EF3', }] : purchaseLeadStyles.intentText}>Engagement</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={intentsVal == 3 ? [purchaseLeadStyles.intentButton, { borderColor: '#2F6EF3', backgroundColor: '#FAFDFF',}] : purchaseLeadStyles.intentButton}  onPress={() => setIntentsVal(3)}>
                                <Text style={intentsVal == 3 ? [purchaseLeadStyles.intentText, { color: '#2F6EF3', }] : purchaseLeadStyles.intentText}>Support</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Purchase - hot lead */}
                        {/* Engagement -follow up required */}

                        {(intentsVal != '' && intentsVal != 3) ? (
                            <View style={ purchaseLeadStyles.intentSwitchContainer }>
                                <Text style={[purchaseLeadStyles.purchaseLeadFormLabel, { fontWeight: 'bold', textAlign: 'left', marginRight: 100, opacity: 0.7}]}>{(intentsVal == 1) ? 'Hot Lead' : (intentsVal == 4) ? 'Follow up required' : ''}</Text>
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

                    <View style={{width:0,height:0}}>
                        <TextInput
                            style={{width:0,height:0}}
                            onChangeText={props.handleChange('intents')}
                            value={props.values.intents}
                            onBlur={props.handleBlur('intents')}
                        />
                    </View>

                    <Text style={ purchaseLeadStyles.purchaseLeadFormLabel }>Entry Point</Text>
                    <TextInput 
                        style={ [purchaseLeadStyles.purchaseLeadFormTextInput, { backgroundColor: '#F8F8F8'}] }
                        onChangeText={props.handleChange('publisher_type')}
                        value={props.values.publisher_type}
                        onBlur={props.handleBlur('publisher_type')}
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

                    {/* <TagInput
                        updateState={updateTagState}
                        tags={interestTags}
                        label="Interests"
                        labelStyle={[purchaseLeadStyles.purchaseLeadFormLabel, { marginTop: 0}]}

                        leftElementContainerStyle={{marginLeft: 3}}
                        inputContainerStyle={[purchaseLeadStyles.purchaseLeadFormTextInput, {height: 45, marginBottom: 25, padding: 2}]}
                        inputStyle={{color: '#5F6368' }}
                        onFocus={() => {
                            setTagsColor('#5F6368');
                            setTagsText('#0E0071');
                        }}
                        onBlur={() => {
                            setTagsColor('#5F6368');
                            setTagsText('#0E0071');
                        }}
                        autoCorrect={false}
                        tagStyle={{ backgroundColor: '#fff' }}
                        tagTextStyle={{ color: '#5F6368' }}
                        keysForTag={', '}
                    /> */}

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
                        <TouchableOpacity onPress={() => {navigation.goBack()}}>
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