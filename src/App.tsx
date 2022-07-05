import React from "react";
import "./App.css";
import ChartContainer from "./containers/Chart";
import NewsContainer from "./containers/News";
import SpotPriceContainer from "./containers/SpotPrice";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<SpotPriceContainer />
				<ChartContainer />
				<NewsContainer />
			</header>
		</div>
	);
}

export default App;
