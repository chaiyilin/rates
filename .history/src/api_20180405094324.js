export const endpoint = `https://rest.coinapi.io`;
export const priceHistory =
  endpoint + `/v1/ohlcv/{symbol_id}/latest?period_id={period_id}&limit={limit}`;
export const symbols = endpoint + `/v1/symbols`;
