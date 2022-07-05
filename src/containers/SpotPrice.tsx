import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import SpotPrice from "../components/SpotPrice";
import { getBtcCurrentPrice } from "../features/btc/btcThunk";

const SpotPriceContainer = () => {
	const btcPrice = useAppSelector(
		(state: RootState) => state.btcPrices.currentPrice
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getBtcCurrentPrice());
	}, []);

	return <SpotPrice price={btcPrice?.price ?? null} />;
};

export default SpotPriceContainer;
