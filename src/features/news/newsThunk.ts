import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNews } from "./newsAPI";

export const getNewsThunk = createAsyncThunk("news/getNews", async () => {
	const response = await fetchNews();
	return response;
});
