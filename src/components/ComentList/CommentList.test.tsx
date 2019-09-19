import React from "react";
import ComentList from "./ComentList";
import { mount } from "enzyme";
import Root from "../../root";
import { fetchComments } from "../../store/actions";

describe("<CommentList />", () => {
  let wrapped: any;
  let initialState: any;
  beforeEach(() => {
    initialState = {
      posts: [{ id: 1, body: "Comment 1" }, { id: 2, body: "Comment 2" }]
    };

    wrapped = mount(
      <Root initialState={initialState}>
        <ComentList />
      </Root>
    );
  });

  console.log(fetchComments());

  it("should have an li for every comment", () => {
    expect(wrapped.find("li").length).toEqual(2);
  });
});
