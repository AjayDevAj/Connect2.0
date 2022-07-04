import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Switch, Dimensions, Button } from 'react-native';
import { Form, FormItem, Label } from 'react-native-form-component';
import TagInput from 'react-native-tags-input';

import Icon from 'react-native-vector-icons/MaterialIcons';

import purchaseLeadStyles from './styles/PurchaseLeadStylesheet';

const mainColor = '#3ca897';

const PurchaseLeadForm = ({ formData, navigation, type='', dataComponent='' }) => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    var intent_val = mobile_number = email = '';
    {dataComponent == 'customer' ? (
       <>
        {(typeof formData.customer_intent !== 'undefined' && formData.customer_intent != '') ? 
        formData.customer_intent.map((item) => {
            intent_val = item.intent
        }) : ''}

        {(typeof formData.lead_has !== 'undefined' && typeof formData.lead_has.mobile_number !== 'undefined' && formData.lead_has.mobile_number != null) ? 
        (mobile_number = formData.lead_has.mobile_number) : ''}

        {(typeof formData.lead_has !== 'undefined' && typeof formData.lead_has.email !== 'undefined' && formData.lead_has.email != null) ? 
        (email = formData.lead_has.email) : ''}
        </>
    ) : ''}

    const intentData = [
        {
            id: 1,
            value: 'Purchase'
        },
        {
            id: 2,
            value: 'Engagement'
        },
        {
            id: 3,
            value: 'Support'
        }
    ];
   
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
            <Form buttonText={type == 'add' ? 'Add Customer' : 'Update' }
                buttonTextStyle={ purchaseLeadStyles.updateButtonTextStyle } 
                buttonStyle={purchaseLeadStyles.updateButtonStyle}
                onButtonPress={() => alert('Update button pressed')}
            >
                <FormItem
                    label="Customer Name"
                    labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                    value={formData.display_name != '' ? formData.display_name : ''}
                    textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
                />

                <View>
                    <Label text="Intent" style={purchaseLeadStyles.purchaseLeadFormLabel} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, marginRight: '30%'}}>
                        <TouchableOpacity style={intent_val == 'Purchase' ? [purchaseLeadStyles.intentButton, { borderColor: '#2F6EF3', backgroundColor: '#FAFDFF',}] : purchaseLeadStyles.intentButton}  onPress={() => {}}>
                            <Text style={intent_val == 'Purchase' ? [purchaseLeadStyles.intentText, { color: '#2F6EF3', }] : purchaseLeadStyles.intentText}>Purchase</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={intent_val == 'Engagement' ? [purchaseLeadStyles.intentButton, { borderColor: '#2F6EF3', backgroundColor: '#FAFDFF',}] : purchaseLeadStyles.intentButton}  onPress={() => {}}>
                            <Text style={intent_val == 'Engagement' ? [purchaseLeadStyles.intentText, { color: '#2F6EF3', }] : purchaseLeadStyles.intentText}>Engagement</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={intent_val == 'Support' ? [purchaseLeadStyles.intentButton, { borderColor: '#2F6EF3', backgroundColor: '#FAFDFF',}] : purchaseLeadStyles.intentButton}  onPress={() => {}}>
                            <Text style={intent_val == 'Support' ? [purchaseLeadStyles.intentText, { color: '#2F6EF3', }] : purchaseLeadStyles.intentText}>Support</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Purchase - hot lead */}
                    {/* Engagement -follow up required */}

                    {intent_val != '' ? (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20}}>
                            <Label text={(intent_val == 'Purchase') ? 'Hot Lead' : (intent_val == 'Engagement') ? 'Follow up required' : ''} style={purchaseLeadStyles.purchaseLeadFormLabel} />
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
            
                <FormItem
                    label="Entry Point"
                    labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                    value={formData.publisher_type}
                    textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
                />

                <FormItem
                    label="Location"
                    labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                    value={formData.location_name}
                    textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
                />

                <FormItem
                    label="Mobile Number"
                    labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                    value={mobile_number}
                    textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
                />

                <FormItem
                    label="Email ID"
                    labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                    value={email}
                    textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
                />

                {/* <FormItem
                    label="Interests"
                    labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                    value={interestVal}
                    textInputStyle={[purchaseLeadStyles.purchaseLeadFormTextInput, {

                    }]}
                    // onChangeText={(val) => {handleTags(val)}}
                    onKeyPress={(e) => e.key === 'Enter' && handleTags(e.value)}
                /> */}

                <TagInput
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
                />

                <FormItem
                    label="Comments"
                    labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                    value=""
                    textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
                    textArea={true}
                />
                
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <View style={purchaseLeadStyles.cancelButton}>
                        <Text style={purchaseLeadStyles.cancelButtonText}>Cancel</Text>
                    </View>
                </TouchableOpacity>      
            </Form>
        </ScrollView>
    )
};

export default PurchaseLeadForm;