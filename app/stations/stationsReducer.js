import { Map, fromJS } from 'immutable';

export default function(state, action) {
	switch(action.type) {
		case 'STATION_MOVED':
			return state
				.update('u1', _updateStationPositionInLine(action))
				.update('u2', _updateStationPositionInLine(action));
	}
	return state;
}

function _updateStationPositionInLine(action) {
	return line => line.map(station => {
				if(station.get('id') === action.id) {
					return station.set('x', action.x).set('y', action.y);
				}
				return station;
			})
}