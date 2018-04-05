import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShallowWrapper from "enzyme/ShallowWrapper";

Enzyme.configure({ adapter: new Adapter() });
ShallowWrapper.prototype.until = until;

describe('until', () => {

};