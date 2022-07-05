import React from "react";
import "./App.css";
import ChartContainer from "./containers/Chart";
import SpotPriceContainer from "./containers/SpotPrice";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<SpotPriceContainer />
				<ChartContainer />
			</header>
		</div>
	);
}

export default App;
