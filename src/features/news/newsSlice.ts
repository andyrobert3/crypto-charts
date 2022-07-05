import { createSlice } from "@reduxjs/toolkit";
import { NewsSection } from "./newsAPI";
import { getNewsThunk } from "./newsThunk";

export interface NewsSlice {
	data: NewsSection[];
}

const initialState: NewsSlice = {
	data: [],
};

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getNewsThunk.fulfilled, (state, action) => {
			state.data = action.payload;
		});
	},
});

export default newsSlice.reducer;
