
import { View, Text, Alert } from 'react-native'
import React from 'react'
import InternetConnectionAlert from "react-native-internet-connection-alert";


const CheckInterNet = () => {

    return (
            <View style={{ width: '100%', height: '12%' }}>
                <InternetConnectionAlert
                    onChange={(connectionState) => {
                        console.log("Connection State: ", connectionState);
                        //Alert.alert("No Internet")
                    }}>
                    {/* {... Your whole application should be here ... } */}
                </InternetConnectionAlert>
            </View>    
    )
}

export default CheckInterNet;
