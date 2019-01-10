import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from './Reducers';

export default function configureStore() {
    return createStore(
        rootReducers,
        applyMiddleware(thunkMiddleware)
    );
};