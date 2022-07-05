import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import bchReducer from "../features/bch/bchSlice";
import newsReducer from "../features/news/newsSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		bchPrices: bchReducer,
		news: newsReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
