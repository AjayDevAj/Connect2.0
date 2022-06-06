
import { all } from 'redux-saga/effects';
import LoginDataWatcherSaga from './LoginSaga';
import OtpDataWatcherSaga from './OtpScreenSaga';

export default function* rootSaga() {
    yield all([
        LoginDataWatcherSaga(),
        OtpDataWatcherSaga(),

    ]);
    
}