import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({

    UpperView: {
        flex: 2,
        backgroundColor: '#F7FCFF',
    },
    BottomView: {
        flex: 1.8,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        // borderRadius:5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        bottom: 0,
        elevation: 10,
        shadowColor: 'rgba(47, 110, 243, 0.16)',
        //shadowColor:'red',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.8,
        shadowRadius: 5,

    },
    roundedTextInputView: {
        flex: 0.5,
        margin: 30,
        marginLeft: -5,
        marginBottom: 15,
        marginTop: 5,
        flexDirection: 'row',

    },
    EnterOtpText: {
        color: 'rgba(0, 0, 0, 1)',
        alignItems: 'stretch',
        fontWeight: 'bold',
        fontSize: 24,
        // margin: 10,
        marginLeft: 20,
        marginTop: 22,
        opacity: 1,
        // backgroundColor: 'green'

    },
    WehaveSent4DigOtp_TextView: {
        flex: 0.3,
        flexDirection: 'row',
        opacity: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        //paddingBottom:5,

        margin: 10,
        marginLeft: 20,
        opacity: 1,
    },
    OtpTimerView: {
        flex: 0.5,
        //padding: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        //padding:30,
        margin: 10,
        marginLeft: 20,
        opacity: 1,

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