
import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANT } from '../utility/Constant'
import { getError, getResponse } from '../actions/StoreLocationAction'
import {GetStoreLocations} from '../api/GetStoreLocations'


//Worker Saga...
/**
 * Please add comment with input/output. 

 * @param {*} action 
 */
function* HandleStoreDataResponse(action) {
    try {
        const data = yield call(GetStoreLocations)
        console.log('StoreLocation responce')
        yield put(getResponse(data))
    }
     catch(errors) {
         console.log('Error here', errors)
         yield put(getError(errors.toString()))
     }
}

//Watcher Saga...

export default function* StoreDataWatcherSaga() {
    console.log('Store Saga Watcher')
    yield takeEvery(CONSTANT.STORE_LOCATION_DATA, HandleStoreDataResponse)
    

}
