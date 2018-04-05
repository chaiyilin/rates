import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShallowWrapper from "enzyme/ShallowWrapper";
import { default as App } from "./App";

Enzyme.configure({ adapter: new Adapter() });
ShallowWrapper.prototype.until = until;

describe("App", () => {
  it("has the props", () => {
    const wrapper = shallow(<App />).until(Component);
    expect(wrapper.text()).toEqual("my label false 0");
  });
});
