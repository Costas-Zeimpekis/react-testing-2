import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { store } from '../index';
import { Provider } from "react-redux";

describe("<App />", () => {


  let wrapped: any;

  beforeEach(() => {
    wrapped = shallow(

    <App />

    );
  });

  it("is with enzyme", () => {
  
    expect(wrapped.find(".test-class").length).toEqual(1);
  });
});
