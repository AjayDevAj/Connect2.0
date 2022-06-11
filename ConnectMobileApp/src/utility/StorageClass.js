import React, {useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveObject = async (storeObject,Store_Key) => {
    console.log("Before storage",JSON.stringify(storeObject));

    AsyncStorage.setItem(Store_Key, JSON.stringify(storeObject), (err)=> {
        if(err){
            console.log("an error");
            throw err;
        }
        console.log("successfully stored");
    }).catch((err)=> {
        console.log("error is fail to store: " + err);
    });

} 

export const getOtpResponse = async (Store_Key) => {
    try {
        const value = await AsyncStorage.getItem(Store_Key);
        if (value !== null) {
            // We have data!!
            console.log('stored value:- ', JSON.parse(value));
            return JSON.parse(value)
        }
    } catch (error) {
        // Error retrieving data
    }
}