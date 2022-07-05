import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import SpotPrice from "../components/SpotPrice";
import { getBchCurrentPrice } from "../features/bch/bchThunk";

const SpotPriceContainer = () => {
	const bchPrice = useAppSelector(
		(state: RootState) => state.bchPrices.currentPrice
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getBchCurrentPrice());
	}, []);

	return <SpotPrice price={bchPrice?.price ?? null} />;
};

export default SpotPriceContainer;
