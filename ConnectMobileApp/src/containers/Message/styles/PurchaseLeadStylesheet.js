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
        fontFamily: fontFamily.DINRegular,
        fontSize: 14,
        letterSpacing: 0.14,
        marginBottom: 5
    },
    purchaseLeadFormTextInput: {
        borderRadius: 6,
        borderColor: '#C3C7D9',
        opacity: 1,
        borderWidth: 1
    }
    
});

export default purchaseLeadStyles;