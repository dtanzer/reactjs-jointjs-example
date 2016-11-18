import React from 'react';
import { connect } from 'react-redux';

export class Header extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Tabs: ", this.props.tabs);
        return <div>Header</div>;
    }
}

function mapStateToProperties(state) {
    return {
        tabs: state.get('tabs').toJS()
    };
}

export const HeaderContainer = connect(mapStateToProperties)(Header);