import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCurrentPrice, fetchPriceHistory } from "./bchAPI";

export const getBchPriceHistory = createAsyncThunk(
	"bch/getPriceHistory",
	async () => {
		const response = await fetchPriceHistory();
		return response;
	}
);

export const getBchCurrentPrice = createAsyncThunk(
	"bch/getCurrentPrice",
	async () => {
		const response = await fetchCurrentPrice();
		return response;
	}
);
