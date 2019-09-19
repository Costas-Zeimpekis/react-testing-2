import React from "react";
import { mount } from "enzyme";
import ComentBox from "./ComentBox";
import Root from "../../root";

describe("<ComentBox />", () => {
  let wrapped: any;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <ComentBox />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has a text area", () => {
    expect(wrapped.find(".textAreaInput")).toHaveLength(1);
  });

  it("has a button", () => {
    expect(wrapped.find("button")).toHaveLength(2);
  });

  describe("this is the text area", () => {
    let textAreaInput: any;

    beforeEach(() => {
      textAreaInput = wrapped.find(".textAreaInput");
    });

    it("it has a text area that the user can type in", () => {
      textAreaInput.simulate("change", {
        target: {
          value: "New Comment"
        }
      });

      textAreaInput.update();

      expect(wrapped.find(".textAreaInput").prop("value")).toBe("New Comment");
    });

    it("empties the text area when submiting the form", () => {
      const submitForm = wrapped.find("#submitForm");

      textAreaInput.simulate("change", { target: { value: "Delete me" } });
      wrapped.update();
      submitForm.simulate("submit");

      expect(wrapped.find(".textAreaInput").prop("value")).toBe("");
    });
  });
});
