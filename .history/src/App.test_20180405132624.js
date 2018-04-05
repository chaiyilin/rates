import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShallowWrapper from "enzyme/ShallowWrapper";

Enzyme.configure({ adapter: new Adapter() });
ShallowWrapper.prototype.until = until;

describe("App", () => {
  it("has the props", () => {
    // shallow the entire component, recompose and everything.
    // I do still use mount sometimes for testing lifecycles or other reasons, but rarely.
    // I'm using the ::until syntax (it is stage-0) but you can also add to ShallowWrapper.prototype
    // ::until('ToolBox') will continue to shallow render single children until it finds the matcher
    const wrapper = shallow(<ToolBox />)::until("ToolBox");

    expect(wrapper.text()).toEqual("my label false 0");
  });
});
