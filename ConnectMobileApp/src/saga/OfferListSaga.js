/*
 **
 *
 ** ========================================================
 **
 ** AppName: Connect2.0
 ** Version: X.0.0
 ** FileName: ChatSaga.js
 ** UsedFor: Offer list Saga at connect 2.0 app
 ** Author:
 **
 ** ========================================================
 *
 **
 **
 *
 ** ==========================================================
 **                  Offer List Saga component
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
 

 import { getofferlist } from '../api/OfferListApi';
 import { getError , getResponse } from '../actions/OfferListAction';
 
 
 /*
  **
  *
  ** Worker Saga...
  ** Please add comment with input/output.
  * @param {*} action
  *
  **
  */
 
 function* handleOfferListResponseData(action) {
   try {
     const data = yield call(
        getofferlist,
 
       action.master_outlet_id, 
       action.store_code
       
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
 
 export default function* OfferListDataWatcherSaga() {
   // console.log('Offer list Data Saga Watcher')
   yield takeEvery(CONSTANT.OFFER_LIST_DATA, handleOfferListResponseData);
 }
 