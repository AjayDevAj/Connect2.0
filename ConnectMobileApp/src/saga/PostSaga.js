/*
 **
 *
 ** ========================================================
 **
 ** AppName: Connect2.0
 ** Version: X.0.0
 ** FileName: ChatSaga.js
 ** UsedFor: Post Saga at connect 2.0 app
 ** Author:
 **
 ** ========================================================
 *
 **
 **
 *
 ** ==========================================================
 **                  Post Saga component
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

import {take, put, call, takeLatest, takeEvery} from 'redux-saga/effects';
import {CONSTANT} from '../utility/Constant';

import {getpost} from '../api/PostAPI';

import { getError , getResponse } from '../actions/PostAction';

/*
 **
 *
 ** Worker Saga...
 ** Please add comment with input/output.
 * @param {*} action
 *
 **
 */

function* handlePostResponseData(action) {
  try {
    const data = yield call(
      getpost,

      action.location_id,
      action.message,
      action.picture_url,
      action.call_to_action,
      action.link,
    );
    // console.log('Post Data Response', data)
    yield put(getResponse(data));
  } catch (errors) {
    yield put(getError(errors.toString()));
  }
}

/*
 **
 *
 ** Watcher Saga...
 *
 **
 */

export default function* PostDataWatcherSaga() {
  // console.log('Post Data Saga Watcher')
  yield takeEvery(CONSTANT.POST_DATA, handlePostResponseData);
  console.log('add new post wather -->',getResponse)
}
