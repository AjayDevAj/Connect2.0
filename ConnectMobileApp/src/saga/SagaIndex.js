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


export default function* rootSaga() {
    yield all([
        LoginDataWatcherSaga(),
        OtpDataWatcherSaga(),
        ResendOtpDataWatcherSaga(),
        ChatDataWatcherSaga()
    ]);
}