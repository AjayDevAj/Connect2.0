/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: StorleLocationStylesheet.js
** UsedFor: Store Location Stylesheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**              Store Location Stylesheet
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

import {
    StyleSheet,
} from 'react-native';
import fontFamily from '../../utility/Font-Declarations'

export default StyleSheet.create({

    ContinueButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
      ContinueButton: {
        width: '90%',
        borderRadius: 15,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: '50%',
        backgroundColor: '#0E0071',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        fontFamily:fontFamily.Alte_DIN
        
        // paddingBottom:5
       
        
      },

})

