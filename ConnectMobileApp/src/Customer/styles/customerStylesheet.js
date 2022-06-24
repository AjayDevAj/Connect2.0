/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: customerStylesheet.js
** UsedFor: Customer StyleSheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                   Customer Stylesheet
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

import { StyleSheet } from 'react-native';
import FontFamily from '../../utility/Font-Declarations';

const customerStyles = StyleSheet.create({
    customerMainContainer: {
        backgroundColor: '#F7FCFF',
        width: '100%', 
        height: '100%',
    },
    customerListMainContainer: {
        backgroundColor: '#fff', 
        width: '100%',
        flex:1,
    },
   
    addNewCustomerView: {
        flexDirection: 'row',  
        height: 33, 
        width: '100%',
        padding: 8,
        marginVertical: 20, 
        height: 50,
        justifyContent: 'space-evenly'
    },
    
    addNewCustomerText: {
        color: '#0E0071',
        fontSize: 16,
        opacity: 1,
        fontFamily: FontFamily.Alte_DIN,
        paddingTop: 5,
        fontWeight: 'bold'
    },
    addNewCustomerRightIcon: {
        // position: 'absolute',
        color: '#5F6368',
        opacity: 1,
        alignItems: 'flex-end',
        marginLeft: '40%',
        color: '#0E0071'
    },
});

export default customerStyles;