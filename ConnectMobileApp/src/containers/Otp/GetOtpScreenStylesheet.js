
import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({

    UpperView: {
        flex: 2,
        backgroundColor: '#F7FCFF',
      },
      BottomView: {
        flex: 1.7,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        // borderRadius:5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        bottom: 5,
        elevation:10,
        shadowColor:'rgba(47, 110, 243, 0.16)',
        //shadowColor:'red',
        shadowOffset:{width:0,height:-5},
        shadowOpacity:0.8,
        shadowRadius:5
        
      },
      roundedTextInputView: {
        flex: 0.5,
        margin: 15,
        marginLeft: -5,
        marginBottom: 12,
        marginTop: 5,
        flexDirection: 'row',
        
      },
      EnterOtpText: {
        color: 'rgba(0, 0, 0, 1)',
        alignItems: 'stretch',
        fontWeight: 'bold',
        fontSize: 24,
        margin: 10,
        marginLeft: 20,
        opacity: 1,
       // backgroundColor: 'green'
        
      },
      WehaveSent4DigOtp_TextView: {
        flex: 0.3,
        flexDirection: 'row',
        // //padding: 5,
        // alignItems: 'stretch',
        // //marginTop: 5,
        // backgroundColor: 'green',
        // margin: 10,
       // marginLeft: 22,
        opacity: 1,
        //padding:30,
        // flex: 1,
        //flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingBottom:10,
       // backgroundColor: 'red'
      },
      OtpTimerView: {
        flex: 0.5,
        //padding: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding:30,
        
        //paddingRight:59
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
        marginTop: '1%',
        backgroundColor: 'rgba(14, 0, 113, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
      
      },


})

