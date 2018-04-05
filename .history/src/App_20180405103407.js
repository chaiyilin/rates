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
            "Year",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "J-D",
            "D-N",
            "DJF",
            "MAM",
            "JJA",
            "SON"
          ]}
        />
      </Fetch>
    );
  }
}

export default App;
