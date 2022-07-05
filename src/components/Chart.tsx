import React from "react";
import { BtcPrice } from "../features/btc/btcSlice";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";

export type ChartProps = {
	historicalPrices: BtcPrice[];
};

const Chart = ({ historicalPrices }: ChartProps) => {
	return (
		<LineChart
			width={1000}
			height={300}
			data={historicalPrices}
			margin={{ top: 5, right: 36, bottom: 5, left: 36 }}
		>
			<Line type="monotone" dataKey="price" stroke="#8884d8" />
			<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
			<XAxis dataKey="timestamp" />
			<YAxis />
			<Tooltip />
		</LineChart>
	);
};

export default Chart;
