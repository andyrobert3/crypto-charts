import { DateTime } from "luxon";
import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import Chart from "../components/Chart";
import {
	DurationFilterPeriod,
	setDurationFilter,
} from "../features/bch/bchSlice";
import { getBchPriceHistory } from "../features/bch/bchThunk";

const ChartContainer = () => {
	const displayedHistoricalPrice = useAppSelector(
		(state: RootState) => state.bchPrices.displayedHistoricalPrice
	).map((bchPrice) => ({
		price: bchPrice.price / 100,
		timestamp: bchPrice.timestamp,
	}));

	const durationFilter = useAppSelector(
		(state: RootState) => state.bchPrices.durationFilter
	);
	const dispatch = useAppDispatch();

	const handleSetDurationFilter = useCallback(
		(duration: DurationFilterPeriod) => {
			dispatch(setDurationFilter(duration));
		},
		[dispatch]
	);

	const formatDate = useCallback(
		(date: number, index: number) => {
			if (durationFilter === DurationFilterPeriod.DAY) {
				if ((index + 1) % 2 === 0) {
					return DateTime.fromMillis(date).toFormat("dd/MM");
				} else {
					// Leave gaps between days
					return "";
				}
			} else if (durationFilter === DurationFilterPeriod.WEEK) {
				return DateTime.fromMillis(date).toFormat("dd/MM");
			} else {
				return DateTime.fromMillis(date).toFormat("MMM");
			}
		},
		[durationFilter]
	);

	useEffect(() => {
		dispatch(getBchPriceHistory());
	}, []);

	return (
		<div>
			<Chart
				historicalPrices={displayedHistoricalPrice}
				onSetDurationFilter={handleSetDurationFilter}
				formatDate={formatDate}
			/>
		</div>
	);
};

export default ChartContainer;
