/*
 **
 *
 ** ========================================================
 **
 ** AppName: Connect2.0
 ** Version: X.0.0
 ** FileName: Constant.js
 ** UsedFor: Common Constant file at connect 2.0 app
 ** Author:
 **
 ** ========================================================
 *
 **
 **
 *
 ** ==========================================================
 **                        Constant file
 ** ==========================================================
 *
 **
 */

 const CONSTANT = {
  STORE_LOCATION_DATA: 'STORE_LOCATION_DATA',
  STORE_LOCATION_ERROR: 'STORE_LOCATION_ERROR',
  STORE_LOCATION_SUCCESS: 'STORE_LOCATION_SUCCESS',

  Unassigned_Chat_Data: 'Unassigned_Chat_DATA',
  Unassigned_Chat_ERROR: 'Unassigned_Chat_ERROR',
  Unassigned_Chat_SUCCESS: 'Unassigned_Chat_SUCCESS',

  loadAllChat_Conversation_Data: 'loadAllChat_Conversation_Data',
  loadAllChat_Conversation_ERROR: 'loadAllChat_Conversation_ERROR',
  loadAllChat_Conversation_SUCCESS: 'loadAllChat_Conversation_SUCCESS',

  FILTER_DATA: 'FILTER_DATA',
  FILTER_ERROR: 'FILTER_ERROR',
  FILTER_SUCCESS: 'FILTER_SUCCESS',

  FILTER_DATA_BTN_ID: ' FILTER_DATA_BTN_ID',
  FILTER_DATA_BTN_ID_SUCCESS: 'FILTER_DATA_BTN_ID',

  OverAllRatingData: 'OverAllRatingData',
  OverAllRatingERROR: 'OverAllRatingERROR',
  OverAllRatingSUCCESS: 'OverAllRatingSUCCESS',

  Get_Review_List_Data: 'Get_Review_List_Data',
  Get_Review_List_Error: 'Get_Review_List_Error',
  Get_Review_List_SUCCESS: 'Get_Review_List_SUCCESS',

  CUSTOMER_DATA: 'CUSTOMER_DATA',
  CUSTOMER_DATA_ERROR: 'CUSTOMER_DATA_ERROR',
  CUSTOMER_DATA_SUCCESS: 'CUSTOMER_DATA_SUCCESS',

  POST_LIST_DATA: 'POST_LIST_DATA',
  POST_LIST_DATA_ERROR: 'POST_LIST_DATA_ERROR',
  POST_LIST_DATA_SUCCESS: 'POST_LIST_DATA_SUCCESS',

  OFFER_LIST_DATA: 'OFFER_LIST_DATA',
  OFFER_LIST_DATA_ERROR: 'OFFER_LIST_DATA_ERROR',
  OFFER_LIST_DATA_SUCCESS: 'OFFER_LIST_DATA_SUCCESS',

  GET_LEAD_DATA: 'GET_LEAD_DATA',
  GET_LEAD_DATA_ERROR: 'GET_LEAD_DATA_ERROR',
  GET_LEAD_DATA_SUCCESS: 'GET_LEAD_DATA_SUCCESS',
};

export {CONSTANT};

export const Filter_DATA = [
  {
    id: 1,
    name: 'Locations',
  },
  {
    id: 2,
    name: 'Date',
  },
  {
    id: 3,
    name: 'Chat Status',
  },
];

export const Chat_Filter_Data = [
  {
    id: 1,
    name: 'Open',
  },
  {
    id: 2,
    name: 'Close',
  },
];

export const Date_Filter_Data = [
  {
    id: 1,
    name: 'Last 7 days',
  },
  {
    id: 2,
    name: 'Last Month',
  },
  {
    id: 3,
    name: 'Last 2 Month',
  },
  {
    id: 4,
    name: 'Last 3 Month',
  },
  {
    id: 5,
    name: 'Custom Range',
  },
];

export const Customer_Filter_Btngroup_id = [
  {
    id: '1',
    title: 'Locations',
  },
  {
    id: '2',
    title: 'Entry Point',
  },
  {
    id: '3',
    title: 'Date',
  },
  
  {
    id: '4',
    title: 'Customer Intent',
  },
  {
    id: '5',
    title: 'Chat Status',
  },
  {
    id: '6',
    title: 'Contact Details',
  },
  {
    id: '7',
    title: 'Interested In',
  },

  {
  id:'8',
  title:'Assigned To',
  }
  
]

export const Post_type = [
  {label: 'Offer', value: '1'},
  {label: 'Standard Post', value: '2'},
  {label: 'Event Post', value: '3'},
  {label: 'Covid Post', value: '4'},
 
];

export const Offer_CTA = [
  {label: 'Offer_CTA', value: '1'},
  {label: 'CTA_Standard Post', value: '2'},
  {label: ' CTA Event Post', value: '3'},
  {label: 'CTA Covid Post', value: '4'},
 
];

export const intentData = [
  {
      id: 1,
      value: 'Purchase'
  },
  {
      id: 4,
      value: 'Engagement'
  },
  {
      id: 3,
      value: 'Support'
  }
];

export const materialMenuMessageData = [
  {
    id: 1,
    value: 'Close chat',
  },
  {
    id: 2,
    value: 'Mark as unread',
  },
  {
    id: 3,
    value: 'Assign to other',
  },
];

export const materialMenuCustomerData = [
  {
    id: 1,
    value: 'Edit Customer',
  },
  {
    id: 2,
    value: 'New Chat',
  },
];

export const closeChatReason = [
  {
      id: 1,
      value: 'Customer Wants To Close'
  },
  {
      id: 2,
      value: 'Sale Successful'
  },
  {
      id: 3,
      value: 'Abusive'
  },
  {
      id: 4,
      value: 'Not Interested'
  },
  {
      id: 5,
      value: 'Not Responding'
  },
];

export const otpResponse_Storage_Key = 'otp_response_Key';
export const location_Data_Key = 'location_Data_Key';
export const viewed_Onboarding = 'viewed_Onboarding';
export const ConnectAppCommonBottomSheet = 'ConnectAppCommonBottomSheet';
export const searchedListData = 'searchedListData';
export const selectedbtnid = 'selectedbtnid';
export const appToken = 'app_token';
export const show_location_screen = 'show_location_screen';
