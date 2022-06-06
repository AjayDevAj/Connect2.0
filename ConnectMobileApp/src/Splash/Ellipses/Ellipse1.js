import React from 'react';
import { StyleSheet, View } from 'react-native';

const Ellipse1 = () => {
    return (
        <View style={ styles.Container }>
            <View style={ styles.image3623 }></View>
            <View style={ styles.image3624 }></View>
            <View style={ styles.image3625 }></View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flexDirection:'row',
        justifyContent:'space-between',
        // overflow:'hidden',
    },
    textStyle: {
        color: '#000'
    },
    image3623: {
        opacity: 0.1,
        width:197,
        height:197,
        backgroundColor:'#0E0071',
        borderRadius:197/2,
        top:-55,
        left:-43,
    },
    image3624: {
        opacity: 0.2,
        top: -20,
        left: 112,
        // width: 146,
        // height: 146,
        width:99,
        height:99,
        backgroundColor:'#0070FC',
        borderRadius:99/2,
    },
    image3625: {
        opacity: 0.1,
        width:65,
        height:65,
        backgroundColor:'#00C158',
        borderRadius:65/2,
        top: 180,
        left: 30,
        zIndex:1
    }
});

export default Ellipse1;