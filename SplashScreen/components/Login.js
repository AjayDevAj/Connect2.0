import React from "react";
import { View, Text } from "react-native";

import loginStyles from "../assets/styles/LoginStyleSheet";

const Login = () => {
    return (
        <View style={ loginStyles.container }>
            <Text style={ loginStyles.textStyle }>Login</Text>
        </View>
    );
}

export default Login;