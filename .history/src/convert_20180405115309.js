import { format } from "date-fns";

export const convertHistory = data => data.map(item => [
	format(new Date(item.), 'MM/DD/YYYY')
]);
