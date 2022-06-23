/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: AddNewCustomer.js
** UsedFor: Add New Customer at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**              Add New Customer component
** ==========================================================
*
**
*/

import React, {useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import customerStyles from './styles/customerStylesheet';
    
const AddNewCustomer = ({purchaseHandler}) => {
    return (
        <TouchableOpacity onPress={purchaseHandler}>
            <View style={ customerStyles.addNewCustomerView }>
                <Icon name="group-add" size={28} color="#0E0071" />
                <Text style={customerStyles.addNewCustomerText }>Add New Customer</Text>
                <Icon name="chevron-right" size={22} style={ customerStyles.addNewCustomerRightIcon } />
            </View>
        </TouchableOpacity>
    );
}

export default AddNewCustomer;