/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: closeChatStylesheet.js
** UsedFor: Close Chat StyleSheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                   Close Chat Stylesheet
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

const closeChatStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        // // justifyContent: 'flex-end',
        opacity: 1,
        justifyContent: "center",
        alignItems: "center",
        position:"relative",
        zIndex: 0
    },
    modalView: {
        backgroundColor: 'white',
        width: '75%',
        height: '40%',
        borderRadius: 9,
        overflow: 'hidden',
        alignSelf: 'center',
        opacity: 1,
        shadowOffset: {width: 1, height: 1},
        elevation: 6,
        // shadowColor: '#00000029',
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 8,
        borderColor: '#FFFFFF',
        zIndex: 1
    },
    modalHeaderText: {
        color: 'black',
        opacity: 1,
        letterSpacing: 0.16,
        fontSize: 16,
        fontFamily: fontFamily.Alte_DIN,
        textAlign: 'left',
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 20,
    },
    listView: {
        paddingLeft: 20,
        paddingTop: 15,
    },
    closeChatText: {
        color: 'black',
        opacity: 1,
        fontSize: 14,
        fontFamily: fontFamily.Poppins,
        marginVertical: 10,
        marginLeft: 8
    },
    
    closeButtonView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    cancelButton: {
        borderWidth: 1,
        borderRadius: 9,
        width: '28%',
        height: '33%',
        justifyContent: 'center',
        padding: 5,
        marginTop: 10,
        borderColor: '#5F6368',
        opacity: 1,
        borderRadius: 9,
        color: '#FFF', 
    },
    cancelButtonText: {
        color: '#5F6368',
        fontFamily: fontFamily.Alte_DIN,
        textTransform: 'uppercase',
        justifyContent: 'center',
        // opacity: 0.6,
        fontSize: 12,
        paddingLeft: 8
    },
    closeButton: {
        borderWidth: 1,
        width: '25%',
        height: '33%',
        justifyContent: 'center',
        padding: 5,
        margin: 10,
        borderColor: '#005DD1',
        opacity: 1,
        borderRadius: 9,
        color: '#FFF', 
        backgroundColor: '#0070FC'
    },
    closeButtonText: {
        color: '#FFF',
        fontFamily: fontFamily.Alte_DIN,
        textTransform: 'uppercase',
        justifyContent: 'center',
        opacity: 1,
        fontSize: 12,
        paddingLeft: 8
    }
    
});

export default closeChatStyles;