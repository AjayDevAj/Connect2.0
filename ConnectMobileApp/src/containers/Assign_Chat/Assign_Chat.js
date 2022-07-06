import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import TopHeader from '../../Header/TopHeader';
import chatStyles from '../../Chat/styles/ChatStylesheet';
import navigationString from '../../utility/NavigationString';


const Assign_Chat = ({navigation}) => {

  const menuHandler = () => {
     alert('Menu Handler');
  };

  

  const filterHandler = () => {
    navigation.navigate(navigationString.Chat_Filter)
  };
  const arrowDownHandler = () => {
  };

  const chatSearchHandler = searchTextParam => {

  };

 /**
   * Api call when page load
   * 
   * master_outlet_id:78104
   * enterprise_client_store_id:10004
   * location_id:1
   */
  useEffect(() => {
    if (isFocused) {
    
    }
  },[isFocused]);


  return (
    <View style={chatStyles.chatMainContainer}>
       <TopHeader
            firstIcon="arrow-back"
            secondIcon="star-border"
            thirdIcon="more-vert"
            color={reloadTopView ? '#FFAA00' : null}
            name={getDataFromParam.selected_Item.display_name}
            menuHandler={menuHandler}
            // searchHandler={markasImportant}
            // filterHandler={dotHandler}
            // logo={getDataFromParam.selected_Item.publisher_type}
          />
     
    </View>
  );
};

export default Assign_Chat;
