import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import { HeaderContainer } from './Header';
import { MainSection } from './MainSection';

import tabsReducer from './tabsReducer';

const reducer = combineReducers({
  tabs: tabsReducer
});
const initialState = {
  tabs: [
    { name: "Network", id: "network", active: "true" },
    { name: "Plan Journey", id: "plan", active: "false" }
  ]
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
      <MainSection />
    </div>
  </Provider>,
  document.getElementById('app-root')
);
