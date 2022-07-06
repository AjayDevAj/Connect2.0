
import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import cardStyles from './styles/CardStylesheet';
import CardLocation from './CardLocation';
import CardIcon from './CardIcon';

const CardRowThree = ({ name, type='', status }) => {
    return (
        <>
        {type == 'customer' ? (
            <View style={ [cardStyles.cardRowThree, { marginTop: 10}] }>
                <View style={ cardStyles.cardAgentNameContainer}>
                    <Icon name='person-add-alt' size={14} color={'rgba(101, 113, 128, 1)'}  style={{marginLeft: 10}}/>
                    <Text style={ cardStyles.cardAgentName }>{ name }</Text>
                </View> 

                <View style={{ flexDirection: 'row', alignSelf: 'baseline'}}>
                    {status == 'Open' ? (
                        <>
                        <Icon name="mail-outline" size={17} color="#5F6368" style={{marginRight: 20}} />
                         <View style={{ flexDirection: 'row', justifyContent: 'space-around',}}>
                            <Icon name="phone" size={17} color="#5F6368" style={{}} />
                            <View style={ [cardStyles.cardTimeIcon, {backgroundColor: '#BA0101',  marginVertical: 2 }] }></View>
                        </View>
                        </>
                    ) : (
                        <>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around',}}>
                            <Icon name="mail-outline" size={17} color="#5F6368" style={{marginRight: 20}} />
                            <View style={ [cardStyles.cardTimeIcon, {backgroundColor: '#BA0101', marginRight: 2}] }></View>
                        </View>
                        <Icon name="phone" size={17} color="#5F6368" />
                        </>
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