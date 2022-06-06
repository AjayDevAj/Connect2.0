import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import fontFamily from '../../utility/Font-Declarations'

export default StyleSheet.create({
   OtpBtn: {
       borderRadius: 15,
       height: 40,
       alignItems: "center",
       justifyContent: "center",
       marginTop: 20,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor:'red',
       marginRight:16
       

   },
   OtpText: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white'
   },
   TextInputView: {
    //    width: "90%",
       flexDirection: 'row',
       justifyContent: 'center',
       height: 40,
       marginTop: 24,
       borderWidth: 0.5,
       borderColor: 'lightgrey',
       borderRadius: 10,
       alignItems:'center',
       marginRight: 16,

   },
   TextInputViewError: {
       borderColor: 'red',
       width: "90%",
       flexDirection: 'row',
       justifyContent: 'center',
       height: 40,
       marginTop: 24,
       borderWidth: 0.5,
       borderRadius: 10,
       alignItems:'center',
   },
   errorMsg:{
       color: 'red',
       marginTop:5
   },
   TextInput: {
       width:"90%",
       fontSize: 15,
       color:'#000000',
       height:'100%'
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
       fontSize: 18,
       fontFamily: fontFamily.Alte_DIN,
       color:'#5F6368'
   },
   MobileText: {
       marginTop: 6,
       fontSize: 24,
       fontWeight: 'bold',
       color: '#000000',
       fontFamily: fontFamily.Alte_DIN,

   },
   NormalText: {
       marginTop: 20,
       fontSize: 12,
       fontFamily:fontFamily.Poppins,
       color:"#000000"
   }
})









