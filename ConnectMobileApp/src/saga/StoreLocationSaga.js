
import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANT } from '../utility/Constant'
import { getStoreLocations} from '../api/GetStoreLocations'
import { getStoreLocationError, getStoreLocationResponse } from '../actions/StoreLocationAction'

function* handleStoreLocationResponse(action) {
    try {
        const data = yield call(getStoreLocations)
        console.log('Store Location Response', data)
        yield put(getStoreLocationResponse(data))
    }
    catch(errors) {
        yield put(getStoreLocationError(errors.toString()))
    }
}

export default function* StoreLocationDataWatcherSaga() {
    console.log('StoreLocation Saga Watcher')
    yield takeEvery(CONSTANT.STORE_LOCATION_DATA, handleStoreLocationResponse)
}