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
 import {View, Text } from 'react-native';
 import TopHeader from '../Header/TopHeader';
 import customerStyles from './styles/customerStylesheet';
 import {useSelector, useDispatch} from 'react-redux';
 import {loadCustomerData} from '../actions/CustomerAction';
 import CustomerList from '../Customer/CustomerList';
 import navigationString from '../utility/NavigationString';
 import {useIsFocused} from '@react-navigation/native';
 import {signOut} from '../navigation/Routes'
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import {searchedListData} from '../utility/Constant';
 import AddNewCustomer from './AddNewCustomer';
 import PurchaseLeadComponent from '../PurchaseLead/PurchaseLeadComponent';
 
 const Customer = ({navigation, Route}) => {
   const isFocused = useIsFocused();
   const [isSearch, setIsSearch] = useState(false);
   const [isFilterApplied, setIsFilterApplied] = useState(true);
   const [searchText, setSearchText] = useState('');
   const [pageNo, setPageNo] = useState(0);
   const [totalCustomerPageCount, setTotalCustomerPageCount] = useState(1);
 
   const menuHandler = () => {
    //  navigation.navigate(navigationString.Customer);
    //  navigation.goBack();
    setShowPurchaseForm(false);
   };
 
   const searchHandler = () => {
     setIsSearch(!isSearch)
   };
 
   const filterHandler = () => {
     setIsFilterApplied(!isFilterApplied);
     navigation.navigate(navigationString.Filter)
   };
 
   const dispatch = useDispatch();
   const customerResponseData = useSelector(store => store.CustomerResponseData);

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
        signOut()
      }
   }, [customerResponseData]);

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
 
    const callAPI = (searchText='') => {
     dispatch(loadCustomerData('', 0, '', 0, '', '', '', 0, 0, 0, 0, '', '', '', '', '', searchText !== null ? searchText:null, 'latest'))
    };
 
   /**
    * Search Api call
    * @param {*} searchTextParam
    */
   const customerSearchHandler = async (searchTextParam) => {
     setSearchText(searchTextParam);
     searchTextParam ? callAPI(searchTextParam) : callAPI()
 
     const keys = await AsyncStorage.getAllKeys();
     if (keys.includes(searchedListData)) {
       try {
         const searchItemListData = [];
         const searchItemListArrayData = await AsyncStorage.getItem(searchedListData);
         searchItemListData = JSON.parse(searchItemListArrayData);
         //console.log('Search List Item array Data - ', searchItemListArrayData);
         
         searchItemListData.push({
           value:searchTextParam
         });
         console.log('Search List Data - ', JSON.stringify(searchItemListData));
         await AsyncStorage.setItem(searchedListData, JSON.stringify(searchItemListData));
       } catch (error) {
         console.log('Save searched item in list exception ', error);
       }
     }
   };

   const [showPurchaseForm, setShowPurchaseForm] = useState(false);
   const [selectedCustomerData, setSelectedCustomerData] = useState('');

   const purchaseHandler = () => {
    setShowPurchaseForm(!showPurchaseForm);
   }

   const onPressCustomerHandler = (id) => {
    customerResponseData.data.customers.map((item) => {
      item.id==id ? setSelectedCustomerData(item) : ''
    });
    purchaseHandler();
   }

   const loadMoreCustomerData = (updatedPageNo) => {
    {customerResponseData.data != undefined && 
      customerResponseData.data.totalPage != undefined && 
      (setTotalCustomerPageCount(customerResponseData.data.totalPage))
    }
    
    setPageNo(updatedPageNo);
    
    ((updatedPageNo > 0) && (updatedPageNo <= totalCustomerPageCount)) 
      ? callAPI('', updatedPageNo) 
      : callAPI()
   }

   const getCustomerIntentData = (customer_intent) => {
    var intentVal = '';
    {customer_intent !== '' ? 
      customer_intent.map((item) => {
        intentVal = item.id
      }) 
      : ''
    }
    return intentVal;
   }

   return (
    <View style={customerStyles.customerMainContainer}>
      {showPurchaseForm ? 
      ( 
        <PurchaseLeadComponent 
          firstIcon="arrow-back"
          name={selectedCustomerData != '' ? selectedCustomerData.display_name : "Add New Customer"}
          logo={selectedCustomerData != '' ? selectedCustomerData.publisher_type : ''}
          menuHandler={menuHandler}
          type={selectedCustomerData != '' ? "" : 'add'}
          conversation_id={selectedCustomerData.conversation_id}
          customer_intent={getCustomerIntentData(selectedCustomerData.customer_intent)}
          navigation={navigation}
        />
      ) : (
        <>
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
        /> */}
 
        {customerResponseData.data != null && (
          <CustomerList
            onPress_Customer={(val) => { 
              onPressCustomerHandler(val)
            }}
            data={customerResponseData.data.customers}
            custCount={customerResponseData.data.customer_count}
            loadMoreCustomerData={loadMoreCustomerData}
            page={pageNo}
          />
        )}
        </>
      )}
    </View>
  );
 };
 
 export default Customer;
 