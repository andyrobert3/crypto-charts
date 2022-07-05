import axios from "axios";
import { DateTime } from "luxon";

const BASE_API_URL = "https://index-api.bitcoin.com/api/v0/cash";

async function fetchPriceHistory() {
	const url = `${BASE_API_URL}/history`;

	let response;

	try {
		response = await axios.get(url);
	} catch (error) {
		console.error(error);
	}

	const priceHistory = response?.data.map((price: unknown[]) => ({
		timestamp: DateTime.fromISO(price[0] as string).valueOf(),
		price: price[1] as number,
	}));

	return priceHistory;
}

async function fetchCurrentPrice() {
	const url = `${BASE_API_URL}/price/usd`;

	let response;

	try {
		response = await axios.get(url);
	} catch (error) {
		console.error(error);
	}

	const currentPrice = {
		timestamp: DateTime.fromISO(response?.data.stamp as string).valueOf(),
		price: response?.data.price as number,
	};

	return currentPrice;
}

export { fetchPriceHistory, fetchCurrentPrice };
