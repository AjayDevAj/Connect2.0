import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import TopHeader from '../../Header/TopHeader';
import chatStyles from '../../Chat/styles/ChatStylesheet';
import navigationString from '../../utility/NavigationString';
import {useIsFocused} from '@react-navigation/native';
import Review_SectionList from '../../containers/Review/Review_SectionList'
import {useSelector, useDispatch} from 'react-redux';
import {loadOverAllData} from '../../actions/OverAllRatingAction';
import {loadReviewListData} from '../../actions/GetReviewListAction';


const Review = ({navigation, route}) => {
  const dispatch = useDispatch();
  const OverAllReducer_ResponceData = useSelector(store => store.OverAllReducer_ResponceData);
  const GetReviewListData = useSelector(store => store.GetReviewListData);

  const isFocused = useIsFocused();
  const [isSearch, setIsSearch] = useState(false);
  const [isReload, setReload] = useState(false);
 
  const [headerName, setHeaderName] = useState({
    id: null,
    name: 'Review',
  });

  const menuHandler = () => {
    navigation.openDrawer()
  };

  const searchHandler = () => {
    setIsSearch(!isSearch)
  };
  const getFilterDataParams = route.params;

  const filterHandler = () => {
    navigation.navigate(navigationString.Filter, {
      navigateToScreen: navigationString.Reviews
     })
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
        dispatch(loadReviewListData(78104,10004))
        dispatch(loadOverAllData(78104,10004,1))
    }
  },[isFocused]);

  useEffect(() => {
     
  },[OverAllReducer_ResponceData]);

  useEffect(() => {
  //  console.log('dispatch(loadReviewListData(77404,10004)',GetReviewListData)
  if (GetReviewListData.data != undefined){
    setReload(true)
}
},[GetReviewListData]);

  return (
    <View style={chatStyles.chatMainContainer}>
      <TopHeader
        firstIcon="menu"
        secondIcon="search"
        thirdIcon="filter-list"
        name={headerName.name}
        menuHandler={menuHandler}
        searchHandler={searchHandler}
        filterHandler={filterHandler}
        arrowDownIcon="keyboard-arrow-down"
        arrowDownHandler={arrowDownHandler}
        chatSearchHandler={chatSearchHandler}
        isSearchEnable={isSearch}
      />
      {(isReload && GetReviewListData.data != undefined)  &&
         <Review_SectionList DATA={[...['Pizza', ''],...GetReviewListData.data.reviews]}/>
      }
    </View>
  );
};

export default Review;
