import React, { Component } from "react";
import { Fetch } from "react-data-fetching";
import ResponsiveTable from "react-responsive-tables";
import {
  priceHistory,
  symbols,
  BITFINEX_SPOT_BTC_USD,
  BITFINEX_SPOT_ETH_USD
} from "./api";
import { apiKey } from "./apiKey";

class App extends Component {
  render() {
    return (
      <Fetch
        url={priceHistory}
        headers={{ "X-CoinAPI-Key": apiKey }}
        timeout={5000}
      >
        {({ data }) => <div>{data.toString()}</div>}

        <ResponsiveTable
          classes={{
            table: "table"
          }}
          headers={[
            "time_period_start",
            "time_period_end",
            "time_open",
            "time_close",
            "price_open",
            "price_high"
          ]}
        />
      </Fetch>
    );
  }
}

export default App;
