import { format } from "date-fns";

const dateFormat = `DD/MM/YYYY HH:mm`;
const roundTo2Decimals = float => Math.round(item.price_open * 100) / 100;
export const convertHistory = data =>
  data.map(item => [
    format(new Date(item.time_period_start), dateFormat),
    format(new Date(item.time_period_end), dateFormat),
    format(new Date(item.time_open), dateFormat),
    format(new Date(item.time_close), dateFormat),
    Math.round(item.price_open * 100) / 100,
    Math.round(item.price_high * 100) / 100,
    Math.round(item.price_low * 100) / 100,
    Math.round(item.price_close * 100) / 100,
    Math.round(item.volume_traded * 100) / 100,
    item.trades_count
  ]);
