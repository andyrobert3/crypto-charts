import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPriceHistory } from "./btcAPI";

const DAYS_IN_WEEK = 7;

export enum DurationFilterPeriod {
	DAY = "day",
	WEEK = "week",
	MONTH = "month",
}

export type BtcPrice = {
	price: number;
	// milliseconds since epoch
	timestamp: number;
};

export interface BtcSlice {
	historicalPrice: BtcPrice[];
	currentPrice: BtcPrice | null;

	// "24hr"/"7d"/"30d"
	displayedHistoricalPrice: BtcPrice[];
	durationFilter: DurationFilterPeriod;
}

const initialState: BtcSlice = {
	historicalPrice: [],
	currentPrice: null,

	displayedHistoricalPrice: [],
	durationFilter: DurationFilterPeriod.DAY,
};

export const getBtcPriceHistory = createAsyncThunk(
	"btc/getPriceHistory",
	async () => {
		const response = await fetchPriceHistory();
		return response;
	}
);

export const btcSlice = createSlice({
	name: "btc",
	initialState,
	reducers: {
		setDurationFilter(state, action: PayloadAction<DurationFilterPeriod>) {
			state.durationFilter = action.payload;
			if (action.payload === DurationFilterPeriod.DAY) {
				state.displayedHistoricalPrice = state.historicalPrice.slice(
					-2 * DAYS_IN_WEEK
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
		builder.addCase(getBtcPriceHistory.fulfilled, (state, action) => {
			state.historicalPrice = action.payload;
			state.displayedHistoricalPrice = action.payload.slice(-2 * DAYS_IN_WEEK);
		});
	},
});

export default btcSlice.reducer;
export const { setDurationFilter } = btcSlice.actions;
