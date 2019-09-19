import Reducer from './commentsReducer';
import {SAVE_COMMENT} from '../constants';
import commentsReducer, {commentState} from './commentsReducer';
import { ActionType } from "typesafe-actions";
import { saveComment } from "../actions";

type Action = ActionType<typeof saveComment>;

const initialState : commentState = []

it('handles actions of type SAVE_COMMENT', () => {
    

    const action: Action = {
        type: SAVE_COMMENT,
        payload: 'new Comment'
    }

    const newState = commentsReducer(initialState, action);

    expect(newState).toEqual(['new Comment']);
})