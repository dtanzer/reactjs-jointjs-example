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
			{ name: "Foo", id: "foo", x: 100, y: 100},
			{ name: "Bar", id: "bar", x: 150, y: 100},
			{ name: "Baz", id: "baz", x: 200, y: 100}
		],
		u2: [
			{ name: "Snuggle", id: "snuggle", x: 100, y: 150 },
			{ name: "Foo", id: "foo", x: 100, y: 100}
		]
	}
};
let store = createStore(reducer, fromJS(initialState));
/*
		U1: [ 'Steyregg', 'VOEST', 'Bulgariplatz', 'Hauptbahnhof', 'Stadion', 'Gaumberg', 'Haag', 'Doppl', 'Plus City', 'Flughafen' ],
		U2: [ 'Universität', 'St. Magdalena - Kirche', 'Urfahr', 'Wildbergstr.', 'Hauptbahnhof', 'Bindermichl', 'Kleinmünchen', 'Ennsfeld', 'Ebelsberg', 'Solar City']
*/

ReactDOM.render(
	<Provider store={store}>
		<div>
			<HeaderContainer />
			<MainSectionContainer />
		</div>
	</Provider>,
	document.getElementById('app-root')
);
