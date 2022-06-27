/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: Ellipse2.js
** UsedFor: Ellipse2 at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                     Ellipse2 Component
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
import { StyleSheet, View } from 'react-native';


/*
**
*
** Circle view for splashscreen2, named Ellipse2
*
** 
*/

const Ellipse2 = () => {
    return (
        <View style={ styles.Container }>
            <View style={ styles.image3676 }></View>
            <View style={ styles.image3625 }></View>
            <View style={ styles.image3623 }></View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textStyle: {
        color: '#000'
    },
    image3676: {
        opacity: 0.2,
        width:99,
        height:99,
        backgroundColor:'#0070FC',
        borderRadius:99/2,
        top: -21,
        left: -40,
    },
    image3625: {
        opacity: 0.1,
        width:65,
        height:65,
        backgroundColor:'#00C158',
        borderRadius:65/2,
        top: 181,
        left: -140,
    },
    image3623: {
        opacity: 0.1,
        width:197,
        height:197,
        backgroundColor:'#0E0071',
        borderRadius:197/2,
        top: -45,
        left: 58,
        
    }
});

export default Ellipse2;