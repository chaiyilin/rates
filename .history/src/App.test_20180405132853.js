import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShallowWrapper from "enzyme/ShallowWrapper";
import { default as App } from "./App";
import { Fetch } from "react-data-fetching";

Enzyme.configure({ adapter: new Adapter() });
ShallowWrapper.prototype.until = until;

describe("App", () => {
  it("has the props", () => {
    const wrapper = shallow(<App />).until(Fetch);
    expect(wrapper.text()).toEqual("my label false 0");
  });
});
