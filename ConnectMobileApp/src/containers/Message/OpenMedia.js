import React from 'react'
import {View,StyleSheet} from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {DocumentPicker} from 'react-native-document-picker';


export const  OpenGalary = async () => {
  const result = await launchImageLibrary({selectionLimit:5});
  console.log('galary selected item',result)
  return result
  // sendVal(result)
}

export const  OpenCam = async () => {
  const result = await launchCamera();
  console.log('selected item',result)
}