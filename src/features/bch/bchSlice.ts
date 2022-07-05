import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBchCurrentPrice, getBchPriceHistory } from "./bchThunk";

const DAYS_IN_WEEK = 7;

export enum DurationFilterPeriod {
	DAY = "day",
	WEEK = "week",
	MONTH = "month",
}

export type BchPrice = {
	price: number;
	// milliseconds since epoch
	timestamp: number;
};

export interface BchSlice {
	historicalPrice: BchPrice[];
	currentPrice: BchPrice | null;

	// "24hr"/"7d"/"30d"
	displayedHistoricalPrice: BchPrice[];
	durationFilter: DurationFilterPeriod;
}

const initialState: BchSlice = {
	historicalPrice: [],
	currentPrice: null,

	displayedHistoricalPrice: [],
	durationFilter: DurationFilterPeriod.DAY,
};

export const bchSlice = createSlice({
	name: "bch",
	initialState,
	reducers: {
		setDurationFilter(state, action: PayloadAction<DurationFilterPeriod>) {
			state.durationFilter = action.payload;
			if (action.payload === DurationFilterPeriod.DAY) {
				state.displayedHistoricalPrice = state.historicalPrice.slice(
					0,
					3 * DAYS_IN_WEEK
				);
			} else if (action.payload === DurationFilterPeriod.WEEK) {
				let pricesEveryWeek = [];
				for (let i = 1; i <= state.historicalPrice.length; i++) {
					if (i % 7 === 0) {
						pricesEveryWeek.push(
							state.historicalPrice[state.historicalPrice.length - i]
						);
					}
				}
				state.displayedHistoricalPrice = pricesEveryWeek;
			} else if (action.payload === DurationFilterPeriod.MONTH) {
				let pricesEveryMonth = [];
				for (let i = 0; i < state.historicalPrice.length; i++) {
					if (i % 30 === 0) {
						pricesEveryMonth.push(state.historicalPrice[i]);
					}
				}
				state.displayedHistoricalPrice = pricesEveryMonth;
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getBchPriceHistory.fulfilled, (state, action) => {
			state.historicalPrice = action.payload;
			state.displayedHistoricalPrice = action.payload.slice(
				0,
				3 * DAYS_IN_WEEK
			);
		});
		builder.addCase(getBchCurrentPrice.fulfilled, (state, action) => {
			state.currentPrice = action.payload;
		});
	},
});

export default bchSlice.reducer;
export const { setDurationFilter } = bchSlice.actions;
