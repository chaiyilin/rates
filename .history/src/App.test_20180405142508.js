import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShallowWrapper from "enzyme/ShallowWrapper";
import until from "enzyme-shallow-until";
import { default as AppHoc, App } from "./App";
import { Fetch } from "react-data-fetching";

Enzyme.configure({ adapter: new Adapter() });
ShallowWrapper.prototype.until = until;

const setup = () => {
  return {
    wrapper: shallow(<AppHoc />).until(App)
  };
};
describe("App", () => {
  it("has select", () => {
    const { wrapper } = setup();
    expect(wrapper.find("select")).toBeTruthy();
  });

  it("has Fetch", () => {
    const { wrapper } = setup();
    expect(wrapper.find("Fetch")).toBeTruthy();
  });

  it("do Fetch", async () => {
    // Arrange
    const xhrMockClass = () => ({
      open: jest.fn(),
      send: jest.fn(),
      setRequestHeader: jest.fn()
    });

    window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);

    axiosMock.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { greeting: "hello there" }
      })
    );
    const url = "/greeting";
    const { getByText, getByTestId, container } = render(<Fetch url={url} />);

    // Act
    Simulate.click(getByText("Load Greeting"));

    // let's wait for our mocked `get` request promise to resolve
    // wait will wait until the callback doesn't throw an error
    await wait(() => getByTestId("greeting-text"));

    // Assert
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    expect(getByTestId("greeting-text")).toHaveTextContent("hello there");
    // snapshots work great with regular DOM nodes!
    expect(container.firstChild).toMatchSnapshot();
  });
});
