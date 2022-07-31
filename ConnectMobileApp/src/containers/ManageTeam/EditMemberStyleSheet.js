
import { StyleSheet } from 'react-native';
import fontFamily from '../../utility/Font-Declarations';


const editManageTeamStyles = StyleSheet.create({
    addManageTeamMainContainer: {
        backgroundColor: '#F7FCFF',
        width: '100%', 
        flex:1
    },
    textDataStyle:{
        padding: 15,
        color: 'gray',
        fontSize: 15,
        fontFamily: fontFamily.Alte_DIN
    },
    texInputStyle:{
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
        height: 40, 
        width: "92%",
        alignSelf:'center',
        marginTop: -5,      
    },
    chooseTextStyle:{
        marginTop: 30,
        marginLeft: 15,
        fontSize: 16,
        fontFamily: fontFamily.Alte_DIN
    },
    chooseViewStyle: {
        flexDirection: 'row',
        marginTop: 5,
        height: 40,      
    },
    radioBtnAdminStyle:{
        marginTop: 10,
        marginLeft: 50,
        fontFamily: fontFamily.Poppins,
        fontSize: 15,

    },
    radioBtnManagerStyle:{
        marginTop: 10,
        marginLeft: 80,
        fontFamily: fontFamily.Poppins,
        fontSize: 15,
    },
    bottomBtnView:{
        flexDirection:'row',
        bottom:20,
        height:60,
        justifyContent:'space-around',
       
    },
    cancleBtnStyle:{
        height:45,
        marginTop: 5,
        width: '45%',
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#C3C7D9',
     
    },cancleTextStyle:{
        fontSize: 16,
        fontFamily: fontFamily.Alte_DIN,
        alignSelf:'center',
        marginTop: 13,
        color:'#838CB2'
    },
    updateTextStyle:{
        fontSize: 16,
        fontFamily: fontFamily.Alte_DIN,
        alignSelf:'center',
        marginTop: 13,
        color:'white'
    },

    updateBtnStyle:{
        backgroundColor:'#0E0071',
        height:45,
         marginTop: 5,
        width: '45%',
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#C3C7D9'  
    }

});

export default editManageTeamStyles;