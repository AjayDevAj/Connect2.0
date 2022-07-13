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
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import NoDataFoundSvg from './assets/Group3072.svg';

import customerStyles from './styles/customerStylesheet';

import Card from '../Card/Card';
import CardRowOne from '../Card/CardRowOne';
import CardRowTwo from '../Card/CardRowTwo';
import CardRowThree from '../Card/CardRowThree';

import MaterialMenu from '../MaterialMenu/MaterialMenu';
import { materialMenuCustomerData } from '../utility/Constant';
import navigationString from '../utility/NavigationString';
    
const CustomerList = ({data, onPress_Customer, loadMoreCustomerData, page, custCount=0, navigation }) => {
    const [customerData, setPrevCustomerData] = useState([]);
    const [dotClicked, setDotClicked] = useState(false);
    const [selectedCustomerId, setSelectedCustomerId] = useState(0);
    const [selectedCustomerData, setSelectedCustomerData] = useState('');

    const dotHandler = (id) => {
        {id > 0 && (
            setSelectedCustomerId(id),
            data.map((item) => {
                item.id == id && setSelectedCustomerData(item)
            })
        )}
        setDotClicked(!dotClicked);
    }

    const newChatHandler = (selected_Item) => {
        navigation.navigate(navigationString.Message, {
        selected_Item,
        allChat: true,
        })
    }

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
                                <CardRowOne logo={item.publisher_type} name={item.display_name} createdAt={item.created_at} item_id={item.id} dotHandler={dotHandler} />
                                <CardRowTwo status={item.chat_status} type="customer" intentData={item.customer_intent} />
                                <CardRowThree name={item.agent_name} status={item.chat_status} email={item.lead_has.email} mobile_number={item.lead_has.mobile_number} type="customer" />
                            </Card>
                        </TouchableOpacity>
                    )}
                />

                {dotClicked && (
                    <MaterialMenu
                    itemData={materialMenuCustomerData}
                    style={{ height: '5%' }}
                    onClick={index => {
                        switch (index) {
                        case 1:
                            setDotClicked(false);
                            onPress_Customer(selectedCustomerId);
                            break;
                        case 2:
                            newChatHandler(selectedCustomerData);
                            break;
                        default:
                            break;
                        }
                    }}
                    />
                )}
            </View>
        ) : (
            <View style={ customerStyles.noCustomerAssignedMainContainer }>
                <View style={ customerStyles.noCustomerAssignedSvgView }>
                    <NoDataFoundSvg /> 
                </View>

                <View style={ customerStyles.noCustomerAssignedTextView }>
                    <Text style={ customerStyles.noCustomerAssignedText }>No Data Found !!!</Text>
                    <Text style={ customerStyles.noCustomerAssignedDesc }>Lorem ipsum dolor sit amet. Vel minus voluptas non dicta reprehenderit est sunt dolor qui repellat deserunt.</Text>

                    <TouchableOpacity onPress={() => alert('Try Again')}>
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