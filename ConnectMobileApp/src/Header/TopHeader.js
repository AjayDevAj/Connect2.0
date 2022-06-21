/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: header.js
** UsedFor: Header component at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**              Header component
** ==========================================================
*
**
*/

/*
**
*
** Common react packages import
*
** 
*/

import React from 'react';
import { Text, View } from 'react-native';

import headerStyles from './styles/headerStyleSheet';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TopHeader = ({ firstIcon, name, secondIcon, thirdIcon, menuHandler, searchHandler, filterHandler, color=null, arrowDownIcon='', arrowDownHandler='' }) => {
    return (
        <View style={ headerStyles.mainContainer }>
            <View style={{ flexDirection: 'row', marginTop: '15%', justifyContent: 'space-between', }}>

                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', }}>
                    <Icon name={firstIcon} size={28} style={ headerStyles.headerMenuIcon } onPress={menuHandler} />
                    {arrowDownIcon != '' ? 
                        (
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={ headerStyles.headerText } onPress={arrowDownHandler}>{name}</Text>
                                <Icon name={arrowDownIcon} size={24} color="#FFF" onPress={arrowDownHandler} style={{ marginTop: '1%', marginLeft: '1%' }} />
                            </View>
                        ) 
                    : 
                        <Text style={ headerStyles.headerText }>{name}</Text>
                    }
                </View>
                
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around', }}>
                    <Icon name={secondIcon} size={28} style={ headerStyles.headerSearchIcon }
                    onPress={searchHandler} 
                    color={color == null ? '#FFFFFF': color}
                    />
                    <Icon name={thirdIcon} size={28} style={ headerStyles.headerFilterIcon } onPress={filterHandler} />
                </View>
                
            </View>
        </View>
    );
}

export default TopHeader;
