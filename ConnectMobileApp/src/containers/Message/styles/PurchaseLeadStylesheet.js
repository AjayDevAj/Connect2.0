/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: purchaseStylesheet.js
** UsedFor: Purchase Lead StyleSheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                   Purchase Lead Stylesheet
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
import fontFamily from '../../../utility/Font-Declarations';

const purchaseLeadStyles = StyleSheet.create({
    purchaseLeadMainContainer: {
        flexDirection: 'row', 
        backgroundColor: '#FFF', 
        height: 33, 
        width: '100%',
        paddingTop: 7,

        shadowOffset: {width: 1, height: 1},
        elevation: 6,
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 8,
        borderColor: '#FFFFFF',
    },
    purchaseLeadtLeftSection: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        alignSelf: 'flex-start',
        marginLeft: 15,
        // padding: 10, 
    },
    purchaseLeadMidSection: {
        flexDirection: 'row', 
        alignSelf: 'flex-start', 
        justifyContent: 'space-evenly', 
        marginLeft: 20,
    },

    purchaseLeadtRightSection: {
        flexDirection: 'row-reverse', 
    },

    purchaseLeadDotIcon: {
        width: 6,
        height: 6,
        opacity: 1,
        backgroundColor: '#657180',
        borderRadius: 3,
        alignSelf: 'center',
        marginHorizontal: 5
    },
    purchaseLeadText: {
        color: '#657180',
        letterSpacing: 0.14,
        fontFamily: fontFamily.Alte_DIN,
        fontSize: 14,
    },
    purchaseLeadRightIcon: {
        // position: 'absolute',
        color: '#5F6368',
        opacity: 1,
        alignItems: 'flex-end',
        marginLeft: '40%'
    },

    purchaseLeadFormContainer: {
        backgroundColor: '#FFF',
        width: '100%', 
        flex:1,
        padding: 20
    },
    purchaseLeadFormLabel: {
        color: '#000',
        opacity: 0.5,
        fontFamily: fontFamily.Alte_DIN,
        fontSize: 14,
        letterSpacing: 0.14,
        marginBottom: 5
    },
    purchaseLeadFormTextInput: {
        borderRadius: 6,
        borderColor: '#C3C7D9',
        opacity: 1,
        borderWidth: 1,
        color: '#5F6368',
        padding: 10,
        fontFamily: fontFamily.Poppins,
        textTransform: 'capitalize',
        fontSize: 12,
        height: 40
    },
    intentButton: {
        borderWidth: 1,
        borderRadius: 4,
        // width: 'auto',
        // height: 'auto',
        justifyContent: 'center',
        padding: 5,
        margin: 5,
        // borderColor: '#2F6EF3',
        borderColor: '#5F6368',
        opacity: 0.5,
        color: '#FFF', 
        // backgroundColor: '#FAFDFF',
        backgroundColor: '#FCFCFC'
    },
    intentText: {
        color: '#5F6368',
        // color: '#2F6EF3',
        fontSize: 12,
        textAlign: 'center',
        fontFamily: fontFamily.Poppins,
        opacity: 1,
    },
    intentSwitchContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems:'center',
        marginVertical: 20, 
        backgroundColor: '#F8F8F8',
        width: 295,
        height: 37,
        borderRadius: 8,
        marginLeft: '9%'
    },
    updateButtonStyle: {
        backgroundColor: '#0E0071',
        borderRadius: 8,
        width: 158,
        height: 40,
        padding: 10,
        alignSelf: 'flex-end',
        // marginTop: -48,
        // marginRight: 10
    },
    updateButtonTextStyle: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#FFF',
        opacity: 1,
        fontFamily: fontFamily.Alte_DIN,
        textAlign: 'center',
    },
    cancelButton: {
        borderWidth: 1,
        borderColor: '#C3C7D9',
        borderRadius: 8,
        width: 158,
        height: 40,
        alignSelf: 'flex-start',
        padding: 10,
        // marginLeft: 10,
        
    },
    cancelButtonText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#838CB2',
        opacity: 1,
        fontFamily: fontFamily.Alte_DIN,
        textAlign: 'center',
        // padding: 2
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 10,
        textAlign: 'center'
    },
    
});

export default purchaseLeadStyles;