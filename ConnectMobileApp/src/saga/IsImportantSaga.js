


import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANT } from '../utility/Constant'
import { getIsImportantError, getIsImportantResponse } from '../actions/IsImportantAction'
import { getIsImportantData} from '../api/IsImportantApi'

function* handleIsImportantDataResponse(action) {
    try {
        const data = yield call(getIsImportantData.action.conversation_id, action.is_important)
        yield put(getIsImportantResponse(data))
    }
    catch(errors) {
        yield put(getIsImportantError(errors.toString()))
    }
}


export default function* isImportantDataWatcherSaga() {
    yield takeEvery(CONSTANT.IsImportant_Data, handleIsImportantDataResponse)
}