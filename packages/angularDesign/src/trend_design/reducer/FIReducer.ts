import {
    ADD_NEW_COMMENT,
    ADD_NEW_FEED,
    LOAD_INITIAL_FEED,
    LOADING_COMPONENTS
} from '../api/FIUtils';

export interface IAppState {
    feed: Array<any>;
    isContentLoading: boolean
};
const initialState = { feed: [{}], isContentLoading: true };

export default function feedItemReducer(state: IAppState = initialState, action:any): IAppState {
    let newState: IAppState;
    switch(action.type) {
        case ADD_NEW_FEED:
        const feed = [ ...state.feed ];
        feed.unshift(action.payload);
        newState = { ...state, feed };
        break;

        case ADD_NEW_COMMENT:
        const feedArray = [ ...state.feed ];
        feedArray.forEach((obj: any) => {
            if (obj.id === action.payload.id) {
                obj.comment.unshift(action.payload.comment);
                //  obj.actor.displayName = 'Roshan';
            }
        });
        newState = { ...state, feed: feedArray };
        break;

        case LOAD_INITIAL_FEED:
        newState = { ...state, feed: action.payload, isContentLoading: false };
        break;

        case LOADING_COMPONENTS:
        newState = { ...state, isContentLoading: true }; 
        break;

        default: newState = state; break;
    }
    console.log('--New State--');
    console.log(newState);
    return newState;
}