import React from 'react';
import { StyleSheet, View } from 'react-native';

const Ellipse3 = () => {
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
        justifyContent:'space-between'
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
        top:-45,
        left:-143,
    },
    image3624: {
        opacity: 0.1,
        top: -10,
        left: 100,
        width:120,
        height:120,
        backgroundColor:'#00C158',
        borderRadius:120/2,
    },
    image3625: {
        opacity: 0.1,
        width:65,
        height:65,
        backgroundColor:'#FFAA00',
        borderRadius:65/2,
        top: 230,
        left: 30,
    }
});

export default Ellipse3;