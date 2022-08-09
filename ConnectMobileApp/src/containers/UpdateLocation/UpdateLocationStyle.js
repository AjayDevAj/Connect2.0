import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fontfamily from '../../utility/Font-Declarations'



  export default StyleSheet.create({
    tabStyle: {
      minHeight: 50,
      borderRadius: 0,
      borderColor: '#F7FCFF',
      backgroundColor: '#F7FCFF',
    },
    tabTextStyle: {
      color: '#657180',
      fontFamily: fontfamily.Alte_DIN,
      fontSize: 18,
    },
    activeTabStyle: {
      borderBottomColor: '#0070FC',
      backgroundColor: '#F7FCFF',
    },
    activeTabTextStyle: {
      color: '#0070FC',
    },
    InputText: {
      minHeight: 40,
      minWidth: 328,
      borderWidth: 0.5,
      borderRadius: 8,
      borderColor: '#C3C7D9',
      color: '#5F6368',
      fontSize: 12,
      fontFamily: fontfamily.Poppins,
      padding: 10,
    },
    MultilineTextinout: {
      minHeight: 75,
      minWidth: 328,
      borderWidth: 0.5,
      borderRadius: 8,
      borderColor: '#C3C7D9',
      fontFamily: fontfamily.Poppins,
      padding: 10,
      paddingTop: 10,
      fontSize: 12,
      color: '#657180',
    },
    TitleTextlable: {
      fontSize: 14,
      color: '#657180',
      fontFamily: fontfamily.Alte_DIN,
      paddingTop: 24,
      paddingBottom: 10,
    },
    UpdateButton: {
      backgroundColor: 'rgba(14, 0, 113, 1)',
      //width: 328,
      //height: 40,
      minHeight: 40,
      minWidth: 328,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      bottom: 50,
    },
    UpdatebtnLebelText: {
      fontSize: 16,
      fontFamily: fontfamily.Alte_DIN,
      color: '#FFFFFF',
    },
    map_view: {
      minHeight: 132,
      minWidth: 328,
      paddingTop: 20,
    },
    ToggleLabel: {
      fontSize: 16,
      fontFamily: fontfamily.Alte_DIN,
      color: 'rgba(0, 0, 0, 0.8)',
    },
    TimerLabel: {
      fontSize: 12,
      color: 'rgba(0, 0, 0, 0.7)',
      paddingRight: 60,
      fontFamily: fontfamily.Poppins,
    },
    card: {
      minHeight:48,
      minWidth:328,
      backgroundColor: 'rgba(255, 255, 255, 8)',
      borderRadius: 8,
      justifyContent: 'center',
      shadowColor: '#657180',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    
      top:15,
     marginLeft:15,
      marginRight:15
     
      
    },
    cardTop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      paddingRight:20,
      paddingLeft:20
      
      
    },
    cardContent: {
      borderTopWidth: 1,
      borderColor: '#fff',
    },

  })