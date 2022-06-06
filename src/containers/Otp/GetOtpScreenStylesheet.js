
import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({

  UpperView: {
    backgroundColor: '#F7FCFF',
    // backgroundColor:'red',
    width: '100%',
    justifyContent: 'center'
  },

  BottomView: {
    // backgroundColor:'green',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    bottom: 0,
    elevation: 10,
    shadowColor: 'rgba(47, 110, 243, 0.16)',
    //shadowColor:'red',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    width: '100%',
  },

  roundedTextInputView: {
    //flex: 1,
    //margin: 30,
    //marginLeft: -5,
    // marginBottom: 15,
    // marginTop: 25,
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: '100%',
    height: '15%',
    // marginTop: 10

  },
  EnterOtpText: {
    color: 'rgba(0, 0, 0, 1)',
    alignItems: 'stretch',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 10,
    marginLeft: 20,
    marginTop: 10,
    // backgroundColor: 'green'

  },
  WehaveSent4DigOtp_TextView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //paddingBottom:5,

    //marginTop: 10,
    marginLeft: 20,
    // padding: 10,
    // backgroundColor: 'orange',
    width: '100%'

  },
  OtpTimerView: {
    // flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //padding:30,
    // margin: 10,
    marginLeft: 20,
    // backgroundColor: 'green',
    width: '100%',
    marginTop: 20

  },
  VerifyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  VerifyButton: {
    width: '90%',
    borderRadius: 15,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 20,
    backgroundColor: 'rgba(14, 0, 113, 1)',
  },
})

