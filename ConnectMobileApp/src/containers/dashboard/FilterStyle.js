/*
 **
 *
 ** ========================================================
 **
 ** AppName: Connect2.0
 ** Version: X.0.0
 ** FileName: FilterStyle.js
 ** UsedFor: Filter screen StyleSheet at connect 2.0 app
 ** Author: Shafhad Khan
 **
 ** ========================================================
 *
 **
 **
 *
 ** ==========================================================
 **              Login StyleSheet
 ** ==========================================================
 *
 **
 */
/*
 **
 *
 ** Flilter and Sorting stylesheet
 *
 **
 */

import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import fontfaimly from '../../utility/Font-Declarations';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  leftContainerButtonsText: {
    color: 'rgba(101, 113, 128, 1)',
    opacity: 100,
    fontFamily: fontfaimly.Alte_DIN,
    size: 16,
  },

  header: {
    justifyContent: 'space-evenly',
    padding: 5,
    flexDirection: 'row',
    width: '100%',
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowRadius: 2,
    // shadowOffset: {
    //   width:1,
    //   height:5
    // },
    shadowOpacity: 0.1,
  },
  footer: {
    //paddingBottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 48,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding:5,

    shadowColor: 'rgba(0, 0, 0, 0.03)',
    // shadowRadius: '',
    // shadowOffset: '',
    // shadowOpacity: '',
  },

  clearAllBtnText: {
    fontSize: 14,
    fontFamily: fontfaimly.Alte_DIN,
    color: 'rgba(101, 113, 128, 1)',
    opacity: 50,
  },

  applyFilterBtnText: {
    fontSize: 14,
    fontFamily: fontfaimly.Alte_DIN,
    color: 'rgba(255, 255, 255, 1)',
    opacity: 50,
  },
  applyFilterBTN: {
    width: 131,
    height: 31,
    backgroundColor: 'rgba(0, 112, 252, 1)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  headerPipeSymbol: {
    width: 1,
    height: 38,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
  footerPipeSymbol: {
    width: 2,
    height: 19,
    backgroundColor: 'rgba(101, 113, 128, 1)',
  },
  rightContainer: {
    minHeight: 640,
    minWidth: 360,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    opacity: 40,
    //alignItems:'flex-start',
    //flexDirection:'row',
    padding:15
  },
  leftContainer: {
    minHeight: 592,
    minWidth: 144,
    backgroundColor: 'rgba(241, 241, 241, 1)',

    opacity: 40,
    
   
  },
  chekboxstyle:{
    backgroundColor:'#B2D6FF',
    borderColor:'#5AA3F0',opacity:100,
    
  }
});
