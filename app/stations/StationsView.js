import React from 'react';
import ReactDOM from 'react-dom';
import joint from 'jointjs';

import { connect } from 'react-redux';

import { Station } from './Station'
import { Link } from './Link'

export class StationsView extends React.Component {
	constructor(props) {
		super(props);
		this.graph = new joint.dia.Graph();
		this.cells=[];
	}

	componentDidMount() {
		const paper = new joint.dia.Paper({
			el: ReactDOM.findDOMNode(this.refs.placeholder),
			width: 600,
			height: 200,
			model: this.graph,
			gridSize: 1
		});

		this.graph.addCells(this.cells);
	}

	renderSubwayLine(lineData, lineId) {
		const links = lineData.map((v, i, l)=>{ return {current: v, next: l.get(i+1) }}).filter(linkData => linkData.next);
		const renderedLinks = links.map((linkData) => {
			return <Link container={this.cells} from={ linkData.current.toJS() } to={ linkData.next.toJS() } />
		});
		return renderedLinks;
	}

	renderStation(station) {
		return <Station container={this.cells} station={station.toJS()} onChangedPosition={ this.props.onChangedPosition } />;
	}

	render() {
		const allStations = this.props.stations.valueSeq().reduce((prev, cur) => { return prev.concat(cur) }).toSet();
		const renderedStations = allStations.map(this.renderStation.bind(this)).toList();

		const renderedLinksByLine = this.props.stations.map(this.renderSubwayLine.bind(this));
		const renderedLinks = renderedLinksByLine.valueSeq().reduce((prev, cur) => { return prev.concat(cur)});

		return <div ref="placeholder">{renderedStations.concat(renderedLinks)}</div>;
	}
}

function mapStateToProperties(state) {
	return {
		stations: state.get('stations')
	};
}
const actionCreators = {
	onChangedPosition: (id, x, y) => {
		return {
			type: 'STATION_MOVED',
			id: id,
			x: x,
			y: y
		};
	}
}

export const StationsViewContainer = connect(mapStateToProperties, actionCreators)(StationsView);
