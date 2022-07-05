import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import Chart from "../components/Chart";
import {
	DurationFilterPeriod,
	getBtcPriceHistory,
	setDurationFilter,
} from "../features/btc/btcSlice";

const ChartContainer = () => {
	const displayedHistoricalPrice = useAppSelector(
		(state: RootState) => state.btcPrices.displayedHistoricalPrice
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getBtcPriceHistory());
	}, []);

	return (
		<div>
			<div>
				<button
					onClick={() => dispatch(setDurationFilter(DurationFilterPeriod.DAY))}
				>
					24 hours
				</button>
				<button
					onClick={() => dispatch(setDurationFilter(DurationFilterPeriod.WEEK))}
				>
					7 days
				</button>
				<button
					onClick={() =>
						dispatch(setDurationFilter(DurationFilterPeriod.MONTH))
					}
				>
					1 month
				</button>
			</div>
			<Chart historicalPrices={displayedHistoricalPrice} />
		</div>
	);
};

export default ChartContainer;
