

import { StyleSheet } from 'react-native';
import fontFamily from '../../utility/Font-Declarations';


const manageTeamStyles = StyleSheet.create({
    manageTeamMainContainer: {
        backgroundColor: '#F7FCFF',
        width: '100%', 
        flex:1
    },
    addMemberView: {
        flexDirection: 'row',
        backgroundColor: '#F7FCFF',
        height: '6%',

    },
    searchItem:{
      flexDirection: 'row',
        backgroundColor: '#F7FCFF',
        height: '6%',
        width:'100%'

    },
    searchTextInputStyle: {
        width: '95%',
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: 'white',
        backgroundColor: '#FFFFFF',
        
      },
      addSegmentView: {
       // backgroundColor: '#F7FCFF',
      //  backgroundColor: 'red',
      //  marginTop: '5%'

    },
    tabStyle: {
        borderRadius: 0,
        borderColor: '#F7FCFF',
        backgroundColor: '#F7FCFF',
      },
      tabTextStyle: {
        color: '#657180',
        fontFamily:fontFamily.Alte_DIN,
        fontSize:18
    
      },
      activeTabStyle: {
        borderBottomColor: '#0070FC',
        backgroundColor: '#F7FCFF',
      },
      activeTabTextStyle: {
        color: '#0070FC',
    
      },
      separator:{
        backgroundColor:'red'
      }
});

export default manageTeamStyles;