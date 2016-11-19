import { Map, fromJS } from 'immutable';

export default function(state, action) {
    switch(action.type) {
        case 'ON_TAB_CLICKED':
            return state.map((tab) => {
                return tab.set('active', tab.get('id') === action.tabId);
            });
    }
    return state;
}
