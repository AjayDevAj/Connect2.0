
import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({

   OtpBtn: {
       width: "90%",
       borderRadius: 15,
       height: 45,
       alignItems: "center",
       justifyContent: "center",
       marginTop: 20,
       //backgroundColor: activeBtn,
       justifyContent: 'center',
       alignItems: 'center',
       marginLeft: 20
   },
   OtpText: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white'
   },
   TextInputView: {
       width: "90%",
       flexDirection: 'row',
       justifyContent: 'center',
       height: 45,
       marginLeft: 20,
       marginTop: 10,
       borderWidth: 0.5,
       borderColor: 'lightgrey',
       borderRadius: 10,
       alignItems:'center',
   },
   TextInputViewError: {
       borderColor: 'red',
       width: "90%",
       flexDirection: 'row',
       justifyContent: 'center',
       height: 45,
       marginLeft: 20,
       marginTop: 10,
       borderWidth: 0.5,
       borderRadius: 10,
       alignItems:'center',
   },
   errorMsg:{
       color: 'red',
       paddingLeft: 20
   },
   TextInput: {
       width:320,
       fontSize: 15,

   },
   BottomView: {
       width: '100%',
       justifyContent: 'flex-start',
       borderTopLeftRadius: 25,
       borderTopRightRadius: 25,
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
   },

   UpperView: {
       width: '100%',
       //height:'55%',
       justifyContent: 'center',
   },
   CircilePostion: {
       width: 150,
       height: 150,
       backgroundColor: 'rgba(47, 110, 243,0.16)',
       borderRadius: 150 / 2,
       top: -50,
       right: -50,
       position: "absolute",
       alignSelf: 'flex-end',
   },
   ImageView: {
       marginTop: 130,
       height: 190,
       width: 190,
       bottom: 2,
   },
   EnterText: {
       marginTop: 5,
       paddingLeft: 20,
       fontSize: 18
   },
   MobileText: {
       marginTop: 5,
       paddingLeft: 20,
       fontSize: 24,
       fontWeight: 'bold',
       color: 'black'
   },
   NormalText: {
       marginTop: 15,
       paddingLeft: 20,
       fontSize: 12,
   }
})

