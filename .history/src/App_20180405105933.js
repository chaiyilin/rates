import React, { Component } from "react";
import { Fetch } from "react-data-fetching";
import ResponsiveTable from "react-responsive-tables";
import { convertHistory } from "./convert";

import {
  priceHistory,
  symbols,
  BITFINEX_SPOT_BTC_USD,
  BITFINEX_SPOT_ETH_USD
} from "./api";
import { apiKey } from "./apiKey";

class App extends Component {
  state = {
    priceHistory: priceHistory
  };
  render() {
    return (
      <Fetch
        url={this.priceHistory}
        headers={{ "X-CoinAPI-Key": apiKey }}
        timeout={5000}
      >
        {({ data }) => (
          <ResponsiveTable
            breakpoint={480}
            classes={{
              table: "table"
            }}
            headers={[
              "time_period_start",
              "time_period_end",
              "time_open",
              "time_close",
              "price_open",
              "price_high",
              "price_low",
              "price_close",
              "volume_traded",
              "trades_count"
            ]}
            data={convertHistory(data)}
          />
        )}
      </Fetch>
    );
  }
}

export default App;
