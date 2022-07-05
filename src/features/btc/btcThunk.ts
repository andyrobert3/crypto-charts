import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCurrentPrice, fetchPriceHistory } from "./btcAPI";

export const getBtcPriceHistory = createAsyncThunk(
	"btc/getPriceHistory",
	async () => {
		const response = await fetchPriceHistory();
		return response;
	}
);

export const getBtcCurrentPrice = createAsyncThunk(
	"btc/getCurrentPrice",
	async () => {
		const response = await fetchCurrentPrice();
		return response;
	}
);
