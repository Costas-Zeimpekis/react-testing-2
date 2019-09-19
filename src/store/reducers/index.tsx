import { combineReducers } from "redux";
import CommentsReducer, { commentState } from "./commentsReducer";
import postReducer, { postState } from "./postsReducers";

export interface RootState {
  comments: commentState;
  posts: postState;
}

export default combineReducers({
  comments: CommentsReducer,
  posts: postReducer
});
