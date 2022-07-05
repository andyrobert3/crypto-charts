import React from "react";
import { BchPrice, DurationFilterPeriod } from "../features/bch/bchSlice";
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
import VStack from "../theme/VStack";
import Button from "../theme/Button";
import HStack from "../theme/HStack";
import { H1, H2 } from "../theme/Heading";
import styled from "styled-components";

export type ChartProps = {
	historicalPrices: BchPrice[];
	onSetDurationFilter: (duration: DurationFilterPeriod) => void;
	formatDate: (date: number, index: number) => string;
};

const ChartContainer = styled(VStack)`
	margin-bottom: 48px;
`;

const Chart = ({
	historicalPrices,
	onSetDurationFilter,
	formatDate,
}: ChartProps) => {
	return (
		<ChartContainer>
			<H2>Historical Price of BCH (USD)</H2>
			<HStack>
				<Button onClick={() => onSetDurationFilter(DurationFilterPeriod.DAY)}>
					24 hours
				</Button>
				<Button onClick={() => onSetDurationFilter(DurationFilterPeriod.WEEK)}>
					7 days
				</Button>
				<Button onClick={() => onSetDurationFilter(DurationFilterPeriod.MONTH)}>
					1 month (30 days)
				</Button>
			</HStack>
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
						(dataMin: number) => Math.ceil((dataMin * 0.95) / 10) * 10,
						(dataMax: number) => Math.floor((dataMax * 1.15) / 10) * 10,
					]}
				/>
				<Tooltip
					formatter={(value: number) => [`${value} USD`, undefined]}
					labelFormatter={(label: number) =>
						DateTime.fromMillis(label).toFormat("dd MMM yyyy")
					}
				/>
			</LineChart>
		</ChartContainer>
	);
};

export default Chart;
