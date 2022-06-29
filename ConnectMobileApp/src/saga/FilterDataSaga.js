
import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANT } from '../utility/Constant'

//import { getError, getResponse } from '../actions/LoginAction'
import { getError,getResponse } from '../actions/FilterAction'
import { FilterData } from '../api/FilterData'

function* handleFilterDataResponse(action) {
    try {
        const data = yield call(action.checkboxdata)
        yield put(getResponse(data))
    }
    catch(errors) {
        yield put(getError(errors.toString()))
    }
}


function* handleFilterBtnIdDataResponse(action) {
    try {
        const data = yield call(action.selectedId)
        yield put(getResponse(data))
    }
    catch(errors) {
        yield put(getError(errors.toString()))
    }
}

export default function* FilterDataWatcherSaga() {
    yield takeEvery(CONSTANT.FILTER_DATA, handleFilterDataResponse)

    yield takeEvery(CONSTANT.FILTER_DATA_BTN_ID, handleFilterBtnIdDataResponse)

    console.log('Filter watcher',getResponse)
}