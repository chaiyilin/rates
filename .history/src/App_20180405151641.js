import React from "react";
import { compose, withHandlers, withState } from "recompose";
import { Fetch } from "react-data-fetching";
import ResponsiveTable from "react-responsive-tables";
import ContentLoader from "react-content-loader";
import { convertHistory } from "./convert";

import { getPriceHistoryUrl, BTC_USD, ETH_USD } from "./api";
import { apiKey } from "./apiKey";
import "./App.css";

export const App = ({
  onCurrencyPairChange,
  currencyPair,
  priceHistoryUrl
}) => {
  return (
    <div>
      <select onChange={onCurrencyPairChange} value={currencyPair}>
        <option value={ETH_USD}>ETH/USD</option>
        <option value={BTC_USD}>BTC/USD</option>
      </select>

      <Fetch
        loader={<ContentLoader />}
        url={priceHistoryUrl}
        refetch={priceHistoryUrl}
        headers={{ "X-CoinAPI-Key": apiKey }}
        timeout={5000}
      >
        {({ data }) => (
          <ResponsiveTable
            data-testid="table"
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
    </div>
  );
};
const enhance = compose(
  withState(
    "priceHistoryUrl",
    "setPriceHistoryUrl",
    getPriceHistoryUrl(ETH_USD)
  ),
  withState("currencyPair", "setCurrencyPair", ETH_USD),
  withHandlers({
    onCurrencyPairChange: ({ setPriceHistoryUrl, setCurrencyPair }) => e => {
      setCurrencyPair(e.target.value);
      setPriceHistoryUrl(getPriceHistoryUrl(e.target.value));
    }
  })
);

export default enhance(App);
