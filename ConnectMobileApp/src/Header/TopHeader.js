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

const TopHeader = ({ name, menuHandler, searchHandler, filterHandler }) => {
    return (
        <View style={ headerStyles.mainContainer }>
            <Icon name="menu" size={28} style={ headerStyles.headerMenuIcon } onPress={menuHandler} />
            <Text style={ headerStyles.headerText }>{name}</Text>
            <Icon name="search" size={28} style={ headerStyles.headerSearchIcon } onPress={searchHandler} />
            <Icon name="filter-list" size={28} style={ headerStyles.headerFilterIcon } onPress={filterHandler} />
        </View>
    );
}

export default TopHeader;

