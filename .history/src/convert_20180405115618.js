import { format } from "date-fns";

export const convertHistory = data =>
  data.map(item => [
    format(new Date(item.time_period_start), "DD/MM/YYYY HH mm"),
    format(new Date(item.time_period_end), "DD/MM/YYYY HH mm"),
    format(new Date(item.time_open), "DD/MM/YYYY HH mm"),
    format(new Date(item.time_close), "DD/MM/YYYY HH mm"),
    Math.round(item.price_open * 100) / 100,
    Math.round(item.price_open * 100) / 100
  ]);
