import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import cardStyles from './styles/CardStylesheet';
import {dateToFromNowDaily} from '../utility/CommonFunc'


const CardTime = ({ time='', createdAt='' }) => {
    return (
        <View style={ cardStyles.cardTimeContainer }>
            <View style={ cardStyles.cardTimeIcon }></View>
            <Text style={ cardStyles.cardTime }>
                {console.log('createdAt :-', time)}
            {dateToFromNowDaily(time)}

            {/* {(createdAt != '' && (moment().diff(createdAt, 'days')) > 7) 
            ? moment(createdAt).format('DD/MM/YYYY')
            : (createdAt != '' && moment(createdAt).format('dddd'))
            }
            {time !='' && moment(time).format("hh:mm A")} */}
            </Text>
        </View>
    )
}

export default CardTime;