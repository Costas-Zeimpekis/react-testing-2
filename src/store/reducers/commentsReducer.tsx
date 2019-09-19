import { ActionType, getType } from "typesafe-actions";
import * as Actions from "../actions";

type ActionSave = ActionType<typeof Actions.saveComment>;
type ActionFetch = ActionType<typeof Actions.fetchCommentsFullfilled>;

export type commentState = string[];

export default function(state: commentState = [""], action: ActionSave) {
  switch (action.type) {
    case getType(Actions.saveComment):
      return [...state, action.payload];
    default:
      return state;
  }
}
