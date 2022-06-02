import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Login = () => {
    return (
        <View style={ styles.Container }>
            <Text style={{ color: '#000', fontSize: 28 }}>Login</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#000'
    }
});

export default Login;