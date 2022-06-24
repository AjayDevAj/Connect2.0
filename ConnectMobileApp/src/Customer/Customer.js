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
 import {loadChatData} from '../actions/ChatAction';
 import CustomerList from '../Customer/CustomerList';
 import navigationString from '../utility/NavigationString';
 import {useIsFocused} from '@react-navigation/native';
 import {signOut} from '../navigation/Routes'
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import {searchedListData} from '../utility/Constant';
 import AddNewCustomer from './AddNewCustomer';
 import PurchaseLeadForm from '../containers/Message/PurchaseLeadForm';
 
 
 const Customer = ({navigation, Route}) => {
   const isFocused = useIsFocused();
   const [isSearch, setIsSearch] = useState(false);
   const [isFilterApplied, setIsFilterApplied] = useState(true);
   const [searchText, setSearchText] = useState('');
 
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
   const chatResponseData = useSelector(store => store.ChatResponseData);
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
        signOut(navigation)
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
    purchaseHandler()
   }

   return (
     <View style={customerStyles.customerMainContainer}>
      {showPurchaseForm ? 
        ( 
          <>
          {selectedCustomerData != '' ? (
            <>
            <TopHeader
              firstIcon="arrow-back"
              secondIcon=""
              thirdIcon=""
              name={selectedCustomerData.display_name}
              logo={selectedCustomerData.publisher_type}
              menuHandler={menuHandler}
            />
            <PurchaseLeadForm 
              formData={selectedCustomerData}
              navigation={navigation}
              dataComponent="customer"
            /> 
            </>
          ) : (
            <>
            <TopHeader
              firstIcon="arrow-back"
              secondIcon=""
              thirdIcon=""
              name="Add New Customer"
              menuHandler={menuHandler}
            />
            <PurchaseLeadForm 
              formData=""
              navigation={navigation}
              type="add"
            /> 
          </>
          )}
          </>
          
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
          <AddNewCustomer purchaseHandler={() => {
            purchaseHandler()
            setSelectedCustomerData('');
            }} />
  
          {customerResponseData.data != null && (
            <CustomerList
              onPress_Customer={(val) => { 
                onPressCustomerHandler(val)
              }}
              data={customerResponseData.data.customers}
            />
          )}
          </>
        )}
       
     </View>
   );
 };
 
 export default Customer;
 