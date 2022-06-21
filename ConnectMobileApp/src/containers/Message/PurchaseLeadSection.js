import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import purchaseLeadStyles from './styles/PurchaseLeadStylesheet';

const PurchaseLeadSection = ({ purchaseHandler }) => {
    
    return (
        <View style={ purchaseLeadStyles.purchaseLeadMainContainer }>
            <TouchableOpacity onPress={purchaseHandler}>
                <View style={ purchaseLeadStyles.purchaseLeadtLeftSection }>
                    <View style={ [purchaseLeadStyles.purchaseLeadDotIcon, { backgroundColor: '#0070FC'}] }></View>
                    <Text style={ purchaseLeadStyles.purchaseLeadText }>Purchase</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => alert('Hot lead is clicked')}>
                <View style={ purchaseLeadStyles.purchaseLeadMidSection }>
                    <View style={ [purchaseLeadStyles.purchaseLeadDotIcon, { backgroundColor: '#BA0101' }] }></View>
                    <Text style={ purchaseLeadStyles.purchaseLeadText }>Hot Lead</Text>
                </View>
            </TouchableOpacity>
          
            <TouchableOpacity onPress={() => alert('Right Icon is clicked')}>
                <View style={ purchaseLeadStyles.purchaseLeadtRightSection }>
                    <Icon name="chevron-right" size={22} style={ purchaseLeadStyles.purchaseLeadRightIcon } />
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default PurchaseLeadSection;