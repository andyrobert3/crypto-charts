import axios from "axios";
import { BtcPrice } from "./btcSlice";

const BASE_API_URL = "https://index-api.bitcoin.com/api/v0/cash";

async function fetchPriceHistory() {
	const url = `${BASE_API_URL}/history`;

	let response;

	try {
		response = await axios.get(url, {});
	} catch (error) {
		console.error(error);
	}

	const priceHistory = response?.data.map((price: unknown[]) => ({
		timestamp: price[0] as string,
		price: price[1] as number,
	})) as BtcPrice[];

	return priceHistory;
}

export { fetchPriceHistory };
