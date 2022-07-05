import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ChartContainer from "./containers/Chart";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ChartContainer />
			</header>
		</div>
	);
}

export default App;
