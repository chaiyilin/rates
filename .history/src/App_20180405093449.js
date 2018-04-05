import React, { Component } from "react";
import { Fetch } from "react-data-fetching";
import { priceHistory } from "../api";
import apiKey from "../apiKey";

class App extends Component {
  render() {
    return (
      <Fetch
        url={priceHistory}
        headers={{ "X-CoinAPI-Key": apiKey }}
        timeout={5000}
        resultOnly
      >
        {({ data }) => <div>{data}</div>}
      </Fetch>
    );
  }
}

export default App;
