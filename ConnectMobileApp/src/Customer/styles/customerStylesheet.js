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
        
    },
    noCustomerAssignedSvgView: {
        marginTop: '20%',
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
        fontWeight: 'bold',
    },
    noCustomerAssignedDesc: {
        color: '#000',
        opacity: 0.5,
        letterSpacing: 0.12,
        fontSize: 12,
        fontFamily: fontFamily.Poppins,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '70%',
        marginTop: '2%'
    },
    tryAgainButton: {
        borderWidth: 1,
        borderColor: '#0070FC',
        borderRadius: 8,
        width: 101,
        height: 32,
        alignSelf: 'flex-start',
        padding: 10,
        backgroundColor: '#0070FC',
    },
    tryAgainButtonText: {
        textTransform: 'uppercase',
        fontSize: 14,
        color: '#FFFFFF',
        opacity: 1,
        fontFamily: fontFamily.Alte_DIN,
        textAlign: 'center',
    },
});

export default customerStyles;