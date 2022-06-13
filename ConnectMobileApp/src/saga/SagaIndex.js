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

import { all } from 'redux-saga/effects';
import LoginDataWatcherSaga from './LoginSaga';
import OtpDataWatcherSaga from './OtpScreenSaga';
import ResendOtpDataWatcherSaga from './ResendOTP';
import ChatDataWatcherSaga from './ChatSaga';
import StoreLocationDataWatcherSaga from './StoreLocationSaga';
import Unassigned_Chat_Data_Saga from './Unassigned_Chat_Sage';
import AllChat_ConversationDataWatcherSaga from './AllChat_Conversation_Saga';
import isImportantDataWatcherSaga from './IsImportantSaga';


export default function* rootSaga() {
    yield all([
        LoginDataWatcherSaga(),
        OtpDataWatcherSaga(),
        ResendOtpDataWatcherSaga(),
        ChatDataWatcherSaga(),
        StoreLocationDataWatcherSaga(),
        Unassigned_Chat_Data_Saga(),
        isImportantDataWatcherSaga(),
        AllChat_ConversationDataWatcherSaga(),
    ]);
}