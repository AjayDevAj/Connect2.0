/*
 **
 *
 ** ========================================================
 **
 ** AppName: Connect2.0
 ** Version: X.0.0
 ** FileName: SagaIndex.js
 ** UsedFor: Saga Index at connect 2.0 app
 ** Author:
 **
 ** ========================================================
 *
 **
 **
 *
 ** ==========================================================
 ** Saga Index component
 ** ==========================================================
 *
 **
 */

/*
 **
 *
 ** Common react packages import
 *
 **
 */

import {all} from 'redux-saga/effects';
import ResendOtpDataWatcherSaga from './ResendOTP';
import StoreLocationDataWatcherSaga from './StoreLocationSaga';
import Unassigned_Chat_Data_Saga from './Unassigned_Chat_Sage';
import AllChat_ConversationDataWatcherSaga from './AllChat_Conversation_Saga';
import FilterDataWatcherSaga from './FilterDataSaga';
import PostListDataWatcherSaga from './PostListSaga';
import OverAllWatcherSaga from './OverAllSaga';
import ReviewListWatcherSaga from './GetReviewListSaga';
import CustomerDataWatcherSaga from './CustomerSaga';
import OfferListDataWatcherSaga from './OfferListSaga';

import GetLeadDataWatcherSaga from './GetLeadSaga';

/***************** Root saga method ********************/

export default function* rootSaga() {
  yield all([
    
    ResendOtpDataWatcherSaga(),
    
    StoreLocationDataWatcherSaga(),
    Unassigned_Chat_Data_Saga(),
    AllChat_ConversationDataWatcherSaga(),
    
    FilterDataWatcherSaga(),
    OverAllWatcherSaga(),
    ReviewListWatcherSaga(),

    CustomerDataWatcherSaga(),
    OfferListDataWatcherSaga(),
    PostListDataWatcherSaga(),
    GetLeadDataWatcherSaga(),
  ]);
}
