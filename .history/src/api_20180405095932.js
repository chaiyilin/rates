export const endpoint = `https://rest.coinapi.io`;
export const priceHistory =
  endpoint + `/v1/ohlcv/{symbol_id}/latest?period_id={period_id}&limit={limit}`;
export const symbols = endpoint + `/v1/symbols`;

export const BITFINEX_SPOT_BTC_USD = `BITFINEX_SPOT_BTC_USD`;
export const BITFINEX_SPOT_ETH_USD = `BITFINEX_SPOT_ETH_USD`;
export PERIOD_ID=``
