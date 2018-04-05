import { format } from "date-fns";

const dateFormat = `DD/MM/YYYY HH:mm`;
const roundTo2Decimals = float => Math.round(float * 100) / 100;
export const convertHistory = data =>
  data.map(item => [
    format(new Date(item.time_period_start), dateFormat),
    format(new Date(item.time_period_end), dateFormat),
    format(new Date(item.time_open), dateFormat),
    format(new Date(item.time_close), dateFormat),
    roundTo2Decimals(item.price_open),
    roundTo2Decimals(item.price_high),
    roundTo2Decimals(item.price_low),
    roundTo2Decimals(item.price_close),
    roundTo2Decimals(item.volume_traded),
    item.trades_count
  ]);
