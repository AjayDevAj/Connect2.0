import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export var store_Value = null;

/**
 * * This function is for storing data in local storage(AsyncStorage)
 * @param {*} storeObject 
 * @param {*} Store_Key 
 */
export const saveObject = async (storeObject,Store_Key) => {
    console.log("Before storage-------",JSON.stringify(storeObject));
    
    await AsyncStorage.setItem(Store_Key, JSON.stringify(storeObject), (err)=> {
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
export const getOtpResponse = async (Store_Key, val_type='') => {

    if ((store_Value !== null) && (val_type != 'location')) {
        console.log("store_Value error is fail to store: if " + store_Value);
        return store_Value
    } else {
        // console.log("store_Value error is fail to store: else " + store_Value);
        try {
            const value = await AsyncStorage.getItem(Store_Key);
            if (value !== null) {
                console.log("store_Value error is fail to store: else value :- " + value);
                store_Value = JSON.parse(value)
                console.log("store_Value error is fail to store: else store_Value :- " + store_Value);
                return JSON.parse(value)
            }
        } catch (error) {
            console.log("@store_Value Exception : " + error);
        }
    }
}

/**
 * Delete all data 
 */
export const deleteAll = () => {
    try {
        AsyncStorage.clear();
        store_Value=null
        //  AsyncStorage.setItem(viewed_Onboarding, 'true');
    } catch (error) {
    }
}
