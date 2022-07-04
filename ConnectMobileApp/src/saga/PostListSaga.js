/*
 **
 *
 ** ========================================================
 **
 ** AppName: Connect2.0
 ** Version: X.0.0
 ** FileName: ChatSaga.js
 ** UsedFor: Post list Saga at connect 2.0 app
 ** Author:
 **
 ** ========================================================
 *
 **
 **
 *
 ** ==========================================================
 **                  Post List Saga component
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
 
 //import {getpost} from '../api/PostAPI';
 import { getpostlist } from '../api/PostListAPI';
 
 import { getError , getResponse} from '../actions/PostListAction';
 
 /*
  **
  *
  ** Worker Saga...
  ** Please add comment with input/output.
  * @param {*} action
  *
  **
  */
 
 function* handlePostListResponseData(action) {
   try {
     const data = yield call(
       getpostlist,
 
       action.location_id,
       
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
 
 export default function* PostListDataWatcherSaga() {
   // console.log('Post Data Saga Watcher')
   yield takeEvery(CONSTANT.POST_LIST_DATA, handlePostListResponseData);
 }
 