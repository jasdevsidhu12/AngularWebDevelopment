import { ADD_NEW_COMMENT } from '../api/FIUtils';

function addNewCommentReducer() {
    return { type: ADD_NEW_COMMENT };
}

export function addNewCommentAction() {
    return addNewCommentReducer();
}