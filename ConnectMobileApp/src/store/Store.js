/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: Store.js
** UsedFor: Store used by redux at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
** Store component
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

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '../reducers/LoginReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../saga/SagaIndex';

const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducers,
        compose(
            applyMiddleware(sagaMiddleware)
        )
    )
    sagaMiddleware.run(rootSaga)
    return store;
}

export default configureStore;