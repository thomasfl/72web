import React, {Component} from 'react';
import './App.css';
import FrontPage from "./components/frontPage";
import {BrowserRouter} from "react-router-dom";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Syver from "./components/7ver";

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route exact path='/' component={FrontPage}/>
						<Route exact path='/7ver' component={Syver}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
