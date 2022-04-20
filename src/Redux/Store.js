import { createStore ,applyMiddleware} from "redux";
import rootreducer from "./Reducer/index";
import createSagaMiddleware from 'redux-saga'
 import mysaga from "./Saga/mysaga";
const sagaMiddleware=createSagaMiddleware()
const store=createStore(
rootreducer,applyMiddleware(sagaMiddleware)
)
export default store;
sagaMiddleware.run(mysaga)