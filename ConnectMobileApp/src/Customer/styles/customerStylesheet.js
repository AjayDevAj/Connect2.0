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
import fontFamily from '../../utility/Font-Declarations';

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
        fontFamily: fontFamily.Alte_DIN,
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

    noCustomerAssignedMainContainer: {
        flexDirection: 'column', 
        justifyContent: 'space-between',
        backgroundColor: '#F7FCFF',
        opacity: 1
        
    },
    noCustomerAssignedSvgView: {
        marginTop: '30%',
        alignItems: 'center'
    },
    noCustomerAssignedTextView: {
        alignItems: 'center',
        marginTop: '7%'
    },
    noCustomerAssignedText: {
        color: '#000',
        opacity: 1,
        letterSpacing: 0.18,
        fontSize: 18,
        fontFamily: fontFamily.Alte_DIN,
        fontWeight: '700',
    },
    noCustomerAssignedDesc: {
        color: '#000',
        opacity: 0.5,
        letterSpacing: 0.12,
        fontSize: 12,
        fontFamily: fontFamily.Poppins,
        textAlign: 'center',
        width: '80%',
        marginTop: '2%'
    },
    tryAgainButton: {
        borderRadius: 8,
        width: 118,
        height: 40,
        padding: 6,
        backgroundColor: '#0070FC',
        marginTop: '5%'
    },
    tryAgainButtonText: {
        textTransform: 'uppercase',
        // fontSize: 14,
        color: '#FFFFFF',
        opacity: 1,
        fontFamily: fontFamily.Alte_DIN,
        textAlign: 'center',
    },
});

export default customerStyles;