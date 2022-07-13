
import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import cardStyles from './styles/CardStylesheet';
import CardLocation from './CardLocation';
import CardIcon from './CardIcon';

const CardRowThree = ({ name, type='', email='', mobile_number='', status }) => {
    return (
        <>
        {type == 'customer' ? (
            <View style={ [cardStyles.cardRowThree, { marginTop: 10}] }>
                <View style={ cardStyles.cardAgentNameContainer}>
                    <Icon name='person-add-alt' size={14} color={'rgba(101, 113, 128, 1)'}  style={{marginLeft: 10}}/>
                    <Text style={ cardStyles.cardAgentName }>{ name }</Text>
                </View> 

                <View style={{ flexDirection: 'row', alignSelf: 'baseline'}}>
                    {email != null && (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                            <TouchableOpacity onPress={() => {Linking.openURL(`mailto:${email}`)}}>
                                <Icon name="mail-outline" size={20} color="#5F6368" style={{alignSelf: 'flex-start', marginRight: 20}} />
                            </TouchableOpacity>
                            
                            <View style={ [cardStyles.cardTimeIcon, {backgroundColor: '#BA0101',  marginVertical: 2, marginLeft: -19, marginRight: 15 }] }></View>
                        </View>
                    )}
                    {mobile_number != null && (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                            <TouchableOpacity onPress={() => {Linking.openURL(`tel:${mobile_number}`)}}>
                                <Icon name="phone" size={20} color="#5F6368" style={{}} />
                            </TouchableOpacity>
                            <View style={ [cardStyles.cardTimeIcon, {backgroundColor: '#BA0101',  marginVertical: 2, marginLeft: -6 }] }></View>
                        </View>
                    )}
                </View>         
            </View>
        ) : (
            <View style={ cardStyles.cardRowThree }>
                <View style={ cardStyles.cardAgentNameContainer}>
                    <Icon name='person-add-alt' size={14} color={'rgba(101, 113, 128, 1)'}  style={{marginLeft: 10}}/>
                    <Text style={ cardStyles.cardAgentName }>{ name }</Text>
                </View>          
            </View>
        )}
        </>
    )
}
export default CardRowThree;