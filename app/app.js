import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import { HeaderContainer } from './Header';
import { MainSectionContainer } from './MainSection';

import tabsReducer from './tabsReducer';
import stationsReducer from './stations/stationsReducer'

const reducer = combineReducers({
	tabs: tabsReducer,
	stations: stationsReducer
});
const initialState = {
	tabs: [
		{ name: "Network", id: "network", active: true },
		{ name: "Plan Journey", id: "plan", active: false }
	],
	stations: {
		u1: [
			{ name: "Steyregg", id: "steyr", x: 1050, y: 250},
			{ name: "VOEST", id: "voest", x: 950, y: 250},
			{ name: "Bulgariplatz", id: "bulg", x: 850, y: 250},
			{ name: "Hauptbahnhof", id: "hbf", x: 750, y: 250},
			{ name: "Stadion", id: "stad", x: 650, y: 250},
			{ name: "Gaumberg", id: "gaumb", x: 550, y: 250},
			{ name: "Haag", id: "haag", x: 450, y: 250},
			{ name: "Doppl", id: "doppl", x: 350, y: 250},
			{ name: "Plus City", id: "plus", x: 250, y: 250},
			{ name: "Flughafen", id: "airp", x: 150, y: 250}
		],
		u2: [
			{ name: "Universitaet", id: "uni", x: 750, y: 50 },
			{ name: "St. Magdalena - Kirche", id: "smk", x: 750, y: 100 },
			{ name: "Urfahr", id: "urf", x: 750, y: 150 },
			{ name: "Wildbergstr.", id: "wbs", x: 750, y: 200 },
			{ name: "Hauptbahnhof", id: "hbf", x: 750, y: 250},
			{ name: "Bindermichl", id: "bin", x: 750, y: 300 },
			{ name: "Kleinm.", id: "km", x: 750, y: 350 },
			{ name: "Ennsfeld", id: "ennsf", x: 750, y: 400 },
			{ name: "Ebelsberg", id: "ebel", x: 750, y: 450 },
			{ name: "Solar City", id: "sol", x: 750, y: 500}
		]
	}
};
let store = createStore(reducer, fromJS(initialState));

ReactDOM.render(
	<Provider store={store}>
		<div>
			<HeaderContainer />
			<MainSectionContainer />
		</div>
	</Provider>,
	document.getElementById('app-root')
);
