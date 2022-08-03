/*
 **
 *
 ** ========================================================
 **
 ** AppName: Connect2.0
 ** Version: X.0.0
 ** FileName: Customer.js
 ** UsedFor: Customer at connect 2.0 app
 ** Author:
 **
 ** ========================================================
 *
 **
 **
 *
 ** ==========================================================
 **                  Customer component
 ** ==========================================================
 *
 **
 */

 import React, {useEffect, useState} from 'react';
 import {View, Text, Alert} from 'react-native';
 import TopHeader from '../Header/TopHeader';
 import customerStyles from './styles/customerStylesheet';
 import {useSelector, useDispatch} from 'react-redux';
 import {loadCustomerData } from '../actions/CustomerAction';
 import { loadLeadData } from '../actions/getLeadAction';
 import CustomerList from '../Customer/CustomerList';
 import navigationString from '../utility/NavigationString';
 import {useIsFocused} from '@react-navigation/native';
 import {signOut} from '../navigation/Routes';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import {searchedListData} from '../utility/Constant';
 import AddNewCustomer from './AddNewCustomer';
 
 const Customer = ({navigation, route}) => {
   const isFocused = useIsFocused();
   const [isSearch, setIsSearch] = useState(false);
   const [isFilterApplied, setIsFilterApplied] = useState(true);
   const [searchText, setSearchText] = useState('');
   const [pageNo, setPageNo] = useState(0);
   const [totalCustomerPageCount, setTotalCustomerPageCount] = useState(1);
   const [selectedCustomerData, setSelectedCustomerData] = useState('');
   const [customerIntentVal, setCustomerIntentVal] = useState([]);
   const [customerInterestVal, setCustomerInterestVal] = useState([]);
 
   const getFilterDataParams = route.params;

   console.log('===== Customer filter params =====', getFilterDataParams)

   const menuHandler = () => {
     navigation.openDrawer()
   };
 
   const searchHandler = () => {
     setIsSearch(!isSearch);
   };
 
   const filterHandler = () => {
     setIsFilterApplied(!isFilterApplied);
     navigation.navigate(navigationString.Filter, {
      navigateToScreen: navigationString.Customers
     });
   };
 
   const dispatch = useDispatch();
   const customerResponseData = useSelector(store => store.CustomerResponseData);
   const GetLeadResponseData= useSelector(store => store.GetLeadResponseData);
 
   /**
    * Api call when page load
    */
   useEffect(() => {
     if (isFocused) {
       callAPI();
     }
    
   }, []);
 
   useEffect(() => {
     if (customerResponseData == 'Error: 401') {
       signOut();
     }
   }, [customerResponseData]);

   useEffect(() => {
    if (getFilterDataParams?.location_ids) {
      console.log('Filter Data - ', getFilterDataParams?.location_ids);
    }
  }, [getFilterDataParams]);
 
   /**
    *
    * @param {*} is_important is used for filter purpose
    * @param {*} location_id optional value
    * @param {*} unread is used for filter purpose
    * @param {*} order_by Defult value is 'DESC'.Mostly it is used for filter purpose.
    * @param {*} chat_status It depends on the selected tab(open,closed,assign_chat).Defult value is 'open'
    * @param {*} pagination Defult value is 0.
    * @param {*} other_chat If you wish to see other customers then passcode is '1'.Defult value is '0' to see own customer
    * @param {*} user_id Login user_id
    * @param {*} search_text
    */
 
   const callAPI = (searchText = '') => {
     dispatch(
       loadCustomerData(
         '',
         0,
         '',
         0,
         '',
         '',
         '',
         0,
         0,
         0,
         0,
         '',
         '',
         '',
         '',
         '',
         searchText !== null ? searchText : null,
         'latest',
       ),
     );
   };

  const getLeadApi = (location_id=0, id=0, conversation_id='') => {
    dispatch(loadLeadData(location_id, id, conversation_id));
  }
 
    /**
    * Search Api call
    * @param {*} searchTextParam
    */
    const customerSearchHandler = async searchTextParam => {
     setSearchText(searchTextParam);
     searchTextParam ? callAPI(searchTextParam) : callAPI();
 
    //  const keys = await AsyncStorage.getAllKeys();
    //  if (keys.includes(searchedListData)) {
    //    try {
    //      const searchItemListData = [];
    //      const searchItemListArrayData = await AsyncStorage.getItem(
    //        searchedListData,
    //      );
    //      searchItemListData = JSON.parse(searchItemListArrayData);
    //      //console.log('Search List Item array Data - ', searchItemListArrayData);
 
    //      searchItemListData.push({
    //        value: searchTextParam,
    //      });
    //      console.log('Search List Data - ', JSON.stringify(searchItemListData));
    //      await AsyncStorage.setItem(
    //        searchedListData,
    //        JSON.stringify(searchItemListData),
    //      );
    //    } catch (error) {
    //      console.log('Save searched item in list exception ', error);
    //    }
    //  }
    };

    const loadMoreCustomerData = updatedPageNo => {
      {customerResponseData?.data && customerResponseData?.data?.totalPage &&
          setTotalCustomerPageCount(customerResponseData.data.totalPage);
      }
   
      setPageNo(updatedPageNo);
   
      updatedPageNo > 0 && updatedPageNo <= totalCustomerPageCount
        ? callAPI(searchText, updatedPageNo)
        : callAPI(searchText);
    };
 
   const onPressCustomerHandler = id => {
     customerResponseData.data.customers.map(item => {
       item.id == id ? (setSelectedCustomerData(item), 
       getLeadApi(0,0,item.conversation_id)) 
       : '';
     });
     
     {GetLeadResponseData !== undefined && 
      GetLeadResponseData?.data && 
      GetLeadResponseData?.data?.intent_list && (
        GetLeadResponseData.data.intent_list.map((item) => {
          ((item.selected == true) && (!customerIntentVal.includes(item.id))) && 
          setCustomerIntentVal(current => [...current, item.id])
        })
      )
   }

   var custArrayData = '';
   {GetLeadResponseData !== undefined && 
    GetLeadResponseData?.data && 
    GetLeadResponseData?.data?.customer_interest && (
      custArrayData = GetLeadResponseData.data.customer_interest,
      custArrayData.map((item) => {
        (!customerInterestVal.includes(item)) && 
        setCustomerInterestVal(current => [...current, item])
      })
    )
   }

   {GetLeadResponseData !== undefined && 
    GetLeadResponseData?.data && 
    GetLeadResponseData?.data?.customer_lead && (
      purchaseHandler(GetLeadResponseData.data.customer_lead)
    )}
  };

  const purchaseHandler = (customerLeadData='') => {
    var leadName = selectedCustomerData?.display_name  ? selectedCustomerData.display_name : 'Add New Customer';
    var leadLogo = selectedCustomerData?.publisher_type ? selectedCustomerData.publisher_type : '';
    var leadConversation_id = selectedCustomerData?.conversation_id ? selectedCustomerData.conversation_id : '';
    var leadType = typeof selectedCustomerData !== '' ? '' : 'add'
   
    return (
      navigation.navigate(
        navigationString.Purchase_Lead_Component, 
        {
          firstIcon: "arrow-back",
          name: leadName,
          logo: leadLogo,
          type: leadType,
          color: '',
          conversation_id: leadConversation_id,
          selectedLeadItem: customerLeadData,
          selectedLeadIntentVal: customerIntentVal,
          selectedLeadInterestVal: customerInterestVal,
        }
      )
    )
  };
 
   return (
     <View style={customerStyles.customerMainContainer}>
      <TopHeader
        firstIcon="menu"
        secondIcon="search"
        thirdIcon="filter-list"
        name="Customers"
        menuHandler={menuHandler}
        searchHandler={searchHandler}
        filterHandler={filterHandler}
        navigation={navigation}
        chatSearchHandler={customerSearchHandler}
        isSearchEnable={isSearch}
        isFilterApplied={isFilterApplied}
      />
 
      {/* Add New customer component */}
      {/* <AddNewCustomer purchaseHandler={() => {
          purchaseHandler()
          setSelectedCustomerData('');
        }} 
        /> 
      */}
 
      {customerResponseData.data != null && (
        <CustomerList
          onPress_Customer={val => {
            onPressCustomerHandler(val);
          }}
          data={customerResponseData.data.customers}
          custCount={customerResponseData.data.customer_count}
          loadMoreCustomerData={loadMoreCustomerData}
          page={pageNo}
          navigation={navigation}
        />
      )}
     </View>
   );
 };
 
 export default Customer;
 