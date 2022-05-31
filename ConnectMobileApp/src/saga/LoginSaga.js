
import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANT } from '../containers/Constant'
import { getLogIn } from '../api/APICalling'
import { getError, getResponse } from '../actions/LoginAction'

//Worker Saga...

function* handleLoginDataResponse(action) {
    try {
        const data = yield call(getLogIn,action.mobileNumber)
        console.log('LogIn Response', data)
        yield put(getResponse(data))
    }
     catch(errors) {
         yield put(getError(errors.toString()))
     }
}

//Watcher Saga...

export default function* LoginDataWatcherSaga() {
    console.log('LogIn Saga Watcher')
    yield takeEvery(CONSTANT.LOGIN_DATA, handleLoginDataResponse)

}
