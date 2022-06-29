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
  LOGIN_DATA: 'LOGIN_DATA',
  DATA_ERROR: 'DATA_ERROR',
  DATA_SUCCESS: 'DATA_SUCCESS',

  OTP_DATA: 'OTP_DATA',
  OTP_DATA_ERROR: 'OTP_DATA_ERROR',
  OTP_DATA_SUCCESS: 'OTP_DATA_SUCCESS',

  Resend_OTP_DATA: 'Resend_OTP_DATA',
  Resend_OTP_DATA_ERROR: 'Resend_OTP_DATA_ERROR',
  Resend_OTP_DATA_SUCCESS: 'Resend_OTP_DATA_SUCCESS',

  CHAT_DATA: 'CHAT_DATA',
  CHAT_DATA_ERROR: 'CHAT_DATA_ERROR',
  CHAT_DATA_SUCCESS: 'CHAT_DATA_SUCCESS',

  STORE_LOCATION_DATA: 'STORE_LOCATION_DATA',
  STORE_LOCATION_ERROR: 'STORE_LOCATION_ERROR',
  STORE_LOCATION_SUCCESS: 'STORE_LOCATION_SUCCESS',

  Unassigned_Chat_Data: 'Unassigned_Chat_DATA',
  Unassigned_Chat_ERROR: 'Unassigned_Chat_ERROR',
  Unassigned_Chat_SUCCESS: 'Unassigned_Chat_SUCCESS',

  IsImportant_Data: 'IsImportant_Data',
  IsImportant_ERROR: 'IsImportant_ERROR',
  IsImportant_SUCCESS: 'IsImportant_SUCCESS',

  SEARCH_DATA: 'SEARCH_DATA',
  SEARCH_DATA_ERROR: 'SEARCH_DATA_ERROR',
  SEARCH_DATA_SUCCESS: 'SEARCH_DATA_SUCCESS',

  loadAllChat_Conversation_Data: 'loadAllChat_Conversation_Data',
  loadAllChat_Conversation_ERROR: 'loadAllChat_Conversation_ERROR',
  loadAllChat_Conversation_SUCCESS: 'loadAllChat_Conversation_SUCCESS',

  ACCEPT_REJECT_CHAT_DATA: 'ACCEPT_REJECT_CHAT_DATA',
  ACCEPT_REJECT_CHAT_ERROR: 'ACCEPT_REJECT_CHAT_ERROR',
  ACCEPT_REJECT_CHAT_SUCCESS: 'ACCEPT_REJECT_CHAT_SUCCESS',

  Send_message_DATA: 'Send_message_DATA',
  Send_message_ERROR: 'Send_message_ERROR',
  Send_message_SUCCESS: 'Send_message_SUCCESS',

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

export const otpResponse_Storage_Key = 'otp_response_Key';
export const location_Data_Key = 'location_Data_Key';
export const viewed_Onboarding = 'viewed_Onboarding';
export const ConnectAppCommonBottomSheet = 'ConnectAppCommonBottomSheet';
export const searchedListData = 'searchedListData';
export const selectedbtnid = 'selectedbtnid';
