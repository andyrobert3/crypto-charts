import React from "react";

type SpotPriceProps = {
	price: number | null;
};

const SpotPrice = ({ price }: SpotPriceProps) => {
	if (!price) return null;

	return (
		<div>
			<h3>Current Price of BCH (USD)</h3>
			<h5>{price / 100} USD</h5>
		</div>
	);
};

export default SpotPrice;
