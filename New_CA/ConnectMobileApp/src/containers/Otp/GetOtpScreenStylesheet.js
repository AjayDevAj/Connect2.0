/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: GetOtpScreenStylesheet.js
** UsedFor: Get Otp Screen Stylesheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**    Get Otp Screen Stylesheet
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

  UpperView: {
    backgroundColor: '#F7FCFF',
    // backgroundColor:'red',
    width: '100%',
    justifyContent: 'center'
  },

  BottomView: {
    width: '100%',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor:'rgba(255, 255, 255, 1)',
    shadowRadius: 5,
    shadowOpacity:0.8,
     shadowOffset: {
        width: 0,
        height: -5,
    },
    elevation: 10,
    paddingVertical: 20,
    shadowColor:'rgba(47, 110, 243, 0.16)',
    paddingBottom:40,
    paddingLeft:16
},

  roundedTextInputView: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor:'red'
  },
  EnterOtpText: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: fontFamily.Alte_DIN,

  },
  EnterOtpStaticText: {
    fontSize: 12,
    fontFamily: fontFamily.Poppins,
    color: 'rgba(95, 99, 104, 1)',
    alignItems:'baseline'

  },
  EnterOtpStaticTextMobile: {
    fontSize: 12,
    fontFamily: fontFamily.PoppinsSemiBoald,
    color: 'rgba(95, 99, 104, 1)',
    alignItems:'baseline'

  },
  WehaveSent4DigOtp_TextView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    marginTop:15,
    fontFamily:fontFamily.Poppins
    // marginLeft:5

  },
  OtpTimerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 20

  },
  VerifyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    fontFamily:fontFamily.Alte_DIN
  },
  VerifyButton: {
    borderRadius: 8,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'rgba(14, 0, 113, 1)',
    marginRight:16
  },
})

