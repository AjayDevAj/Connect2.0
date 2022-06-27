/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: Bubble.js
** UsedFor: Show Bubble at login screen at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
** Login screen top bubble component
** ==========================================================
*
**
*/



/*
**
*
** Common react packages import
*
** 
*/

import { StyleSheet, View } from 'react-native';
import React from 'react';



/*
**
*
** Common view created with style to create a bubble
** exported it to make an import of the component 
** in other component
*
** 
*/

export default function Bubble() {

  return (
    <View  style={{ flexDirection: 'row', width:'100%' }}>
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'rgba(0, 193, 88, 0.10)',
          borderRadius: 150 / 2,
          top: -50,
          right: -50,
          position:'absolute',
          alignSelf: 'flex-end',
        }}>
      </View>
    </View>
  );
}



/*
**
*
** Style will be defined using StyleSheet component
*
** 
*/

const styles = StyleSheet.create({

});
