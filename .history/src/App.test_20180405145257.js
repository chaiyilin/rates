import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShallowWrapper from "enzyme/ShallowWrapper";
import until from "enzyme-shallow-until";
import { default as AppHoc, App } from "./App";
import { Fetch } from "react-data-fetching";

import { render, Simulate, wait } from "react-testing-library";
import "react-testing-library/extend-expect"; // this adds custom expect matchers

Enzyme.configure({ adapter: new Adapter() });
ShallowWrapper.prototype.until = until;

const setup = () => {
  return {
    wrapper: shallow(<AppHoc />).until(App)
  };
};
describe("App", () => {
  const mockXHR = {
    getAllResponseHeaders: jest.fn(),
    onload: jest.fn(),
    open: jest.fn(),
    onreadystatechange: jest.fn(),
    readyState: 4,
    responseText: JSON.stringify([
      {
        time_period_start: "2018-04-04T00:00:00.0000000Z",
        time_period_end: "2018-04-14T00:00:00.0000000Z",
        time_open: "2018-04-04T00:00:00.0000000Z",
        time_close: "2018-04-05T04:25:49.0000000Z",
        price_open: 415.43,
        price_high: 416.87,
        price_low: 366.11,
        price_close: 379.51,
        volume_traded: 298063.05436851,
        trades_count: 67674
      }
    ]),
    send: jest.fn(),
    status: 200,
    setRequestHeader: jest.fn()
  };

  beforeEach(() => {
    window.XMLHttpRequest = jest.fn(() => mockXHR);
  });

  afterEach(() => {
    window.XMLHttpRequest = oldXMLHttpRequest;
  });

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

    window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);

    const { getByText, getByTestId, container } = render(<App />);

    // Act
    // Simulate.click(getByText("Load Greeting"));

    // let's wait for our mocked `get` request promise to resolve
    // wait will wait until the callback doesn't throw an error
    // await wait(() => getByTestId("greeting-text"));

    // Assert
    expect(XMLHttpRequest.send).toHaveBeenCalledTimes(1);
    /*     expect(getByTestId("greeting-text")).toHaveTextContent("hello there");
    // snapshots work great with regular DOM nodes!
    expect(container.firstChild).toMatchSnapshot(); */
  });
});
