/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: CustomerList.js
** UsedFor: Customer List at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**              Customer List component
** ==========================================================
*
**
*/

import React, {useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import NoDataFoundSvg from './assets/Group3072.svg';

import customerStyles from './styles/customerStylesheet';

import Card from '../Card/Card';
import CardRowOne from '../Card/CardRowOne';
import CardRowTwo from '../Card/CardRowTwo';
import CardRowThree from '../Card/CardRowThree';
    
const CustomerList = ({data, onPress_Customer, loadMoreCustomerData, page, custCount=0 }) => {
    const [customerData, setPrevCustomerData] = useState([]);

    return (
        <>
        {(data != '' && custCount > 0) ? (
            <View style={ customerStyles.customerListMainContainer }>
                <FlatList 
                    animation={true}
                    data={data}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        setPrevCustomerData(customerData.concat(data))
                        loadMoreCustomerData(page+1)
                    }}
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
        ) : (
            <View style={ customerStyles.noCustomerAssignedMainContainer }>
                <View style={ customerStyles.noCustomerAssignedSvgView }>
                    <NoDataFoundSvg /> 
                </View>

                <View style={ customerStyles.noCustomerAssignedTextView }>
                    <Text style={ customerStyles.noCustomerAssignedText }>No Data Found !!!</Text>
                    <Text style={ customerStyles.noCustomerAssignedDesc }>Lorem ipsum dolor sit amet. Vel minus voluptas non dicta reprehenderit est sunt dolor qui repellat deserunt.</Text>

                    <TouchableOpacity onPress={alert('Try Again')}>
                        <View style={customerStyles.tryAgainButton}>
                            <Text style={customerStyles.tryAgainButtonText}>Try Again</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
        )}
        </>
    );
}

export default CustomerList;