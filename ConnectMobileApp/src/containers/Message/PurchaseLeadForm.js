import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Switch, TextInput, Button } from 'react-native';
import { Form, FormItem, Label } from 'react-native-form-component';

import purchaseLeadStyles from './styles/PurchaseLeadStylesheet';

const PurchaseLeadForm = ({ formData, navigation }) => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
    ]

    return (
        <ScrollView style={ purchaseLeadStyles.purchaseLeadFormContainer }>
            <Form buttonText='Update' 
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
                        <TouchableOpacity style={[purchaseLeadStyles.intentButton, { borderColor: '#2F6EF3', backgroundColor: '#FAFDFF',}]}  onPress={() => {}}>
                            <Text style={[purchaseLeadStyles.intentText, { color: '#2F6EF3', }]}>Purchase</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={purchaseLeadStyles.intentButton}  onPress={() => {}}>
                            <Text style={purchaseLeadStyles.intentText}>Engagement</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={purchaseLeadStyles.intentButton}  onPress={() => {}}>
                            <Text style={purchaseLeadStyles.intentText}>Support</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20}}>
                        <Label text="Hot Lead" style={purchaseLeadStyles.purchaseLeadFormLabel} />
                        <Switch
                            trackColor={{ false: "#F4F4F4", true: "#0070FC" }}
                            thumbColor={isEnabled ? "#FFFFFF" : "#E4E4E4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
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
                    value={formData.phone}
                    textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
                />

                <FormItem
                    label="Email ID"
                    labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                    value=""
                    textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
                />

                <FormItem
                    label="Interests"
                    labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                    value=""
                    textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
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