import React from 'react';
import { connect } from 'react-redux';

import { StationsView } from './stations/StationsView';

export class MainSection extends React.PureComponent {
    render() {
        if(this.props.activeTabId === 'network') {
            return <StationsView />;
        }
        return <div>Not yet implemented</div>;
    }
}

function mapStateToProperties(state) {
    return {
        activeTabId: state.get('tabs').filter(tab => tab.get('active')).first().get('id')
    };
}

export const MainSectionContainer = connect(mapStateToProperties)(MainSection);