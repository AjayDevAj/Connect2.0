import React from 'react';
import { StyleSheet, View } from 'react-native';

// Circle view for splashscreen2, named Ellipse2
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
        opacity: 0.12,
        width:119,
        height:119,
        backgroundColor:'#0070FC',
        borderRadius:119/2,
        top: -10,
        left: -50,
    },
    image3625: {
        opacity: 0.1,
        width:65,
        height:65,
        backgroundColor:'#00C158',
        borderRadius:65/2,
        top: 200,
        left: -150,
    },
    image3623: {
        opacity: 0.12,
        width:197,
        height:197,
        backgroundColor:'#0E0071',
        borderRadius:197/2,
        top: -45,
        left: 50,
        
    }
});

export default Ellipse2;