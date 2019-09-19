import { ActionType, getType } from "typesafe-actions";
import * as Actions from "../actions";

type ActionFetch = ActionType<typeof Actions.fetchCommentsFullfilled>;

export type postState = Actions.FetchComments[];

export default function(state: postState = [], action: ActionFetch) {
  switch (action.type) {
    case getType(Actions.fetchCommentsFullfilled):
      return [...state, ...action.payload];

    default:
      return state;
  }
}
