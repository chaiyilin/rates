import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShallowWrapper from "enzyme/ShallowWrapper";
import until from "enzyme-shallow-until";
import { default as AppHoc, App } from "./App";
import { Fetch } from "react-data-fetching";

Enzyme.configure({ adapter: new Adapter() });
ShallowWrapper.prototype.until = until;

describe("App", () => {
  it("has the props", () => {
    const wrapper = shallow(<AppHoc />).until(App);
    expect(wrapper.find("select")).toBeTruthy();
  });
});
