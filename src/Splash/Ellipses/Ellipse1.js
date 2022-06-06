// import React from 'react';
// import { StyleSheet, View } from 'react-native';

// // First Splash screen circle view
// const Ellipse1 = () => {
//     return (
//         <View style={ styles.Container }>
//             <View style={ styles.image3623 }></View>
//             <View style={ styles.image3624 }></View>
//             <View style={ styles.image3625 }></View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     Container: {
//         flexDirection:'row',
//         justifyContent:'space-between'
//     },
//     textStyle: {
//         color: '#000'
//     },
//     image3623: {
//         opacity: 0.12,
//         width:197,
//         height:197,
//         backgroundColor:'#0E0071',
//         borderRadius:197/2,
//         top:-30,
//         left:-38,
//     },
//     image3624: {
//         opacity: 0.12,
//         top: -5,
//         left: 115,
//         width: 109,
//         height: 109,
//         backgroundColor:'#0070FC',
//         borderRadius: 109/2,
//     },
//     image3625: {
//         opacity: 0.1,
//         width:65,
//         height:65,
//         backgroundColor:'#00C158',
//         borderRadius:65/2,
//         top: 200,
//         left: 30,
//     }
// });

// export default Ellipse1;

import React from 'react';
import { StyleSheet, View } from 'react-native';

// First Splash screen circle view
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
        justifyContent:'space-between'
    },
    textStyle: {
        color: '#000'
    },
    image3623: {
        opacity: 0.12,
        width:197,
        height:197,
        backgroundColor:'#0E0071',
        borderRadius:197/2,
        top:-30,
        left:-38,
    },
    image3624: {
        opacity: 0.12,
        top: -5,
        left: 115,
        width: 109,
        height: 109,
        backgroundColor:'#0070FC',
        borderRadius: 109/2,
    },
    image3625: {
        opacity: 0.1,
        width:65,
        height:65,
        backgroundColor:'#00C158',
        borderRadius:65/2,
        top: 200,
        left: 30,
    }
});

export default Ellipse1;