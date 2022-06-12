import React, {useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * * This function is for storing data in local storage(AsyncStorage)
 * @param {*} storeObject 
 * @param {*} Store_Key 
 */
export const saveObject = async (storeObject,Store_Key) => {
    console.log("Before storage",JSON.stringify(storeObject));

    AsyncStorage.setItem(Store_Key, JSON.stringify(storeObject), (err)=> {
        if(err){
            console.log("an error");
            throw err;
        }
    }).catch((err)=> {
        console.log("error is fail to store: " + err);
    });

} 
/**
 * * This function is to fetch data into local storage(AsyncStorage)
 * @param {*} Store_Key 
 */
export const getOtpResponse = async (Store_Key) => {
    try {
        const value = await AsyncStorage.getItem(Store_Key);
        if (value !== null) {
            return JSON.parse(value)
        }
    } catch (error) {
    }
}

/**
 * Delete all data 
 */
export const deleteAll = () => {
    try {
        AsyncStorage.clear();
    } catch (error) {
    }
}
