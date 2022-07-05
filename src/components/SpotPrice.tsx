import { DateTime } from "luxon";
import React from "react";
import styled from "styled-components";
import { H1, H2, H3, H4, H5 } from "../theme/Heading";
import VStack from "../theme/VStack";

type SpotPriceProps = {
	price: number;
	updatedAt: string;
};

const SpotPriceSection = styled(VStack)`
	margin-bottom: 48px;
`;

const SpotPrice = ({ price, updatedAt }: SpotPriceProps) => {
	if (!price) return null;

	return (
		<SpotPriceSection>
			<H2>Current Price of BCH (USD)</H2>
			<H4>Updated as per {updatedAt} UTC</H4>
			<H3>1 BCH = {price / 100} USD</H3>
		</SpotPriceSection>
	);
};

export default SpotPrice;
