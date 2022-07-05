import axios from "axios";

export type NewsSection = {
	title: string;
	publishDate: string;
	thumbnail: string;
	excerpt: string;
	href: string;
};

export async function fetchNews() {
	const url = "https://news.bitcoin.com/wp-content/weekly_popular_posts.json";

	let response;

	try {
		response = await axios.get(url);
	} catch (error) {
		console.error(error);
	}

	const news = response?.data.map((n: Record<string, any>) => ({
		...n,
		publishDate: n.publish_date,
	}));

	return news as NewsSection[];
}
