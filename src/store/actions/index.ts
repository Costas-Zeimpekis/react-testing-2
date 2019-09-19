import { SAVE_COMMENT, FETCH_POSTS } from "../constants";
import { createAction } from "typesafe-actions";

export interface FetchComments {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

export const saveComment = createAction(
  SAVE_COMMENT,
  resolve => (comment: string) => resolve(comment)
);

export const fetchComments = () => {
  return async (dispatch: any) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      res => res.json()
    );
    console.log("actions");
    dispatch(fetchCommentsFullfilled(res));
  };
};

export const fetchCommentsFullfilled = createAction(
  FETCH_POSTS,
  resolve => (res: FetchComments[]) => resolve(res)
);
