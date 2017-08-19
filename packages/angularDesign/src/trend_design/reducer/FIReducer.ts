import { ADD_NEW_COMMENT } from '../api/FIUtils';

export interface IAppState {
    counter: number;
};
const initialState = { counter: 0 };

export default function feedItemReducer(state: IAppState = initialState, payload:any): IAppState {
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