import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Form, FormItem } from 'react-native-form-component';

import purchaseLeadStyles from './styles/PurchaseLeadStylesheet';

const PurchaseLeadForm = () => {
    return (
        <ScrollView style={ purchaseLeadStyles.purchaseLeadFormContainer }>
            <Form onButtonPress={() => console.warn('do something')}>
            <FormItem
                label="Customer Name"
                labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                value=""
                textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
            />

            <FormItem
                label="Intent"
                labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                value=""
                textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
            />

            <FormItem
                label="Hot Lead"
                labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                value=""
                textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
            />

            <FormItem
                label="Entry Point"
                labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                value=""
                textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
            />

            <FormItem
                label="Location"
                labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                value=""
                textInputStyle={purchaseLeadStyles.purchaseLeadFormTextInput}
            />

            <FormItem
                label="Mobile Number"
                labelStyle={purchaseLeadStyles.purchaseLeadFormLabel}
                value=""
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
            />
            </Form>
        </ScrollView>
    )
};

export default PurchaseLeadForm;