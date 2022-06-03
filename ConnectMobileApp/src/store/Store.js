import { createStore, applyMiddleware, compose } from 'redux';
//import rootReducers from '../reducers/LoginReducer';
import rootReducers from '../reducers/StoreLocationReducer';
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
