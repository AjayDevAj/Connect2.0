import React from 'react';
import { StyleSheet, View } from 'react-native';

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
        top: -15,
        left: -25,
    },
    image3625: {
        opacity: 0.1,
        width:65,
        height:65,
        backgroundColor:'#00C158',
        borderRadius:65/2,
        top: 180,
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