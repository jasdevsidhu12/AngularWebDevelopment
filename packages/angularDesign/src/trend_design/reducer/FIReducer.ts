import { ADD_NEW_COMMENT } from '../api/FIUtils';
import { IAppState } from '../store/store';

export default function feedItemReducer(state: IAppState, payload:any): IAppState {
    console.log('=====State=======');
    console.log(state);
    console.log('=====Payload=======');
    console.log(payload);
    let newState: IAppState;
    switch(payload.type) {
        case ADD_NEW_COMMENT:
        newState = { ...state, counter: state.counter + 1 }; break;
        default: newState = state; break;
    }
    return newState;
}