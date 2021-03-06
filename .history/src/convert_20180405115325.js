import { format } from "date-fns";

export const convertHistory = data =>
  data.map(item => [format(new Date(item.time_period_start), "DD/MM/YYYY ")]);
