import React from "react";
import ChartContainer from "./containers/Chart";
import NewsContainer from "./containers/News";
import SpotPriceContainer from "./containers/SpotPrice";
import VStack from "./theme/VStack";

function App() {
	return (
		<VStack>
			<header className="App-header">
				<SpotPriceContainer />
				<ChartContainer />
				<NewsContainer />
			</header>
		</VStack>
	);
}

export default App;
