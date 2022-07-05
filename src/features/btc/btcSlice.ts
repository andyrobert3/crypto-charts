import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPriceHistory } from "./btcAPI";

export enum DurationFilterPeriod {
	DAY = "day",
	WEEK = "week",
	MONTH = "month",
}

export type BtcPrice = {
	price: number;
	timestamp: string;
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
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getBtcPriceHistory.fulfilled, (state, action) => {
			state.historicalPrice = action.payload;
		});
	},
});

export default btcSlice.reducer;
export const { setDurationFilter } = btcSlice.actions;
