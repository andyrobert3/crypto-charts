import React from "react";
import { BtcPrice, DurationFilterPeriod } from "../features/btc/btcSlice";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
} from "recharts";
import { DateTime } from "luxon";

export type ChartProps = {
	historicalPrices: BtcPrice[];
	onSetDurationFilter: (duration: DurationFilterPeriod) => void;
	formatDate: (date: number, index: number) => string;
};

const Chart = ({
	historicalPrices,
	onSetDurationFilter,
	formatDate,
}: ChartProps) => {
	return (
		<>
			<div>
				<button onClick={() => onSetDurationFilter(DurationFilterPeriod.DAY)}>
					24 hours
				</button>
				<button onClick={() => onSetDurationFilter(DurationFilterPeriod.WEEK)}>
					7 days
				</button>
				<button onClick={() => onSetDurationFilter(DurationFilterPeriod.MONTH)}>
					1 month
				</button>
			</div>
			<LineChart
				width={1000}
				height={450}
				data={historicalPrices}
				margin={{ top: 24, right: 36, bottom: 5, left: 36 }}
			>
				<Line type="monotone" dataKey="price" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
				<Legend verticalAlign="top" height={36} />
				<XAxis
					dataKey="timestamp"
					domain={["dataMin", "dataMax"]}
					type="number"
					scale="time"
					tickFormatter={formatDate}
					tick={{ fontSize: 16 }}
				/>
				<YAxis
					tick={{ fontSize: 18 }}
					domain={[
						(dataMin: number) => Math.ceil((dataMin * 0.9) / 100) * 100,
						(dataMax: number) => Math.ceil((dataMax * 1.1) / 100) * 100,
					]}
				/>
				<Tooltip
					formatter={(value: number) => [`${value} USD`, undefined]}
					labelFormatter={(label: number) =>
						DateTime.fromMillis(label).toFormat("dd MMM yyyy")
					}
				/>
			</LineChart>
		</>
	);
};

export default Chart;
