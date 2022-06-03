
import { all } from 'redux-saga/effects';
import LoginDataWatcherSaga from './LoginSaga';
import StoreDataWatcherSaga from './StoreLocationSaga';

export default function* rootSaga() {
    yield all([
        LoginDataWatcherSaga(),
        StoreDataWatcherSaga(),
    ]);
}