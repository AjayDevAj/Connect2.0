
import { all } from 'redux-saga/effects';
import LoginDataWatcherSaga from './LoginSaga';

export default function* rootSaga() {
    yield all([
        LoginDataWatcherSaga(),
    ]);
}