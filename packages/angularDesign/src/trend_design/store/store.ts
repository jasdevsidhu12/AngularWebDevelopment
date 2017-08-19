import { NgRedux, NgReduxModule } from 'ng2-redux';
import { createStore, applyMiddleware } from 'redux';
import feedItemReducer from '../reducer/FIReducer';
import thunk from 'redux-thunk';

export function configureStore() {
    return createStore(feedItemReducer, applyMiddleware(thunk));
}