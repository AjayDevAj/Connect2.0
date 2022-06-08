/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: LoginSaga.js
** UsedFor: Login Saga at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
** Login Saga component
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

import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANT } from '../utility/Constant'
import { getLogin } from '../api/MobileNumberAuthentication'
import { getError, getResponse } from '../actions/LoginAction'


/*
**
*
** //Worker Saga...
** Please add comment with input/output. 
* * Agar kuch hignlight karna h to 2 star lagao
* @param {*} action 
*
** 
*/

function* handleLoginDataResponse(action) {
    try {
        const data = yield call(getLogin,action.mobileNumber)
        console.log('LogIn Response', data)
        yield put(getResponse(data))
    }
    catch(errors) {
        yield put(getError(errors.toString()))
    }
}


/*
**
*
** Watcher Saga...
*
** 
*/


export default function* LoginDataWatcherSaga() {
    console.log('LogIn Saga Watcher')
    yield takeEvery(CONSTANT.LOGIN_DATA, handleLoginDataResponse)
}