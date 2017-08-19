import { ADD_NEW_COMMENT } from '../api/FIUtils';

function addNewCommentReducer() {
    return { type: ADD_NEW_COMMENT };
}

export function addNewCommentAction(dispatch:any) {
    console.log('first time');
    dispatch(addNewCommentReducer()); 
    // it does work console.log('second time');
    // dispatch(addNewCommentReducer());
}