import React from "react";
import { mount } from "enzyme";
import Root from "../root";
import App from "../components/App";

it("can fetch a list of commentand display them", () => {
  //Atthempt to render the entire APP
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  const fetchButton = wrapped.find('button[type="button"]');
  fetchButton.simulate('click');

  // find the 'fetchComments button and click it'
   
  
  //Expect tp find a list of comments
});
