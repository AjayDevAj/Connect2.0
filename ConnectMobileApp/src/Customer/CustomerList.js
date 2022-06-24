/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: ChatList.js
** UsedFor: Chat List at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**              Chat List component
** ==========================================================
*
**
*/

import React, {useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';


import customerStyles from './styles/customerStylesheet';

import Card from '../Card/Card';
import CardRowOne from '../Card/CardRowOne';
import CardRowTwo from '../Card/CardRowTwo';
import CardRowThree from '../Card/CardRowThree';
    
const CustomerList = ({data, onPress_Customer }) => {
    return (
        <View style={ customerStyles.customerListMainContainer }>
            <FlatList 
                animation={true}
                data={data}
                renderItem={( { item }) => (
                    <TouchableOpacity onPress={(val) => onPress_Customer(item.id)}>
                        <Card>
                            <CardRowOne logo={item.publisher_type} name={item.display_name} createdAt={item.created_at} />
                            <CardRowTwo status={item.chat_status} type="customer" intentData={item.customer_intent} />
                            
                            <CardRowThree name={item.agent_name} status={item.chat_status} type="customer" />
                            
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default CustomerList;