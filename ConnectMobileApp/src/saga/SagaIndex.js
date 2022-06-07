
import { all } from 'redux-saga/effects';
import LoginDataWatcherSaga from './LoginSaga';
import OtpDataWatcherSaga from './OtpScreenSaga';
import ResendOtpDataWatcherSaga from './ResendOTP';


export default function* rootSaga() {
    yield all([
        LoginDataWatcherSaga(),
        OtpDataWatcherSaga(),
        ResendOtpDataWatcherSaga()

    ]);
    
}