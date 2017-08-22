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

export default function feedItemReducer(state: IAppState = initialState, payload:any): IAppState {
    let newState: IAppState;
    switch(payload.type) {
        case ADD_NEW_FEED:
        const feed = [...state.feed ];
        feed.unshift(payload.action);
        newState = { ...state, feed };
        break;
        case ADD_NEW_COMMENT:
        const feedArray = [...state.feed];
        feedArray.forEach((obj: any) => {
            if (obj.id === payload.action.id) {
                obj.comment.unshift(payload.action.comment);
            }
        });
        newState = { ...state, feed: feedArray };
        break;
        case LOAD_INITIAL_FEED:
        newState = { ...state, feed: payload.action, isContentLoading: false };
        break
        case LOADING_COMPONENTS:
        newState = { ...state, isContentLoading: true }; 
        break;
        default: newState = state; break;
    }
    return newState;
}