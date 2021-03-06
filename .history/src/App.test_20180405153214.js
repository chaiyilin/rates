import React from "react";
import ShallowWrapper from "enzyme/ShallowWrapper";
import until from "enzyme-shallow-until";
import { default as App } from "./App";
import { Fetch } from "react-data-fetching";

import { render, Simulate, wait } from "react-testing-library";
import "react-testing-library/extend-expect"; // this adds custom expect matchers

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

  const oldXMLHttpRequest = window.XMLHttpRequest;

  beforeEach(() => {
    window.XMLHttpRequest = jest.fn(() => mockXHR);
  });

  afterEach(() => {
    window.XMLHttpRequest = oldXMLHttpRequest;
  });

  it("should Fetch and render", async () => {
    const { getByText, getByTestId, container } = render(<App />);
    mockXHR.onreadystatechange();
    await wait(() => getByTestId("table"));
    expect(getByTestId("select")).toBeTruthy();
    expect(getByTestId("table")).toBeTruthy();
    expect(getByTestId("table")).toHaveTextContent("415.43");
  });
});
