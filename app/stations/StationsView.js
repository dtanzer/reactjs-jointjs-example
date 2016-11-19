import React from 'react';
import ReactDOM from 'react-dom';
import joint from 'jointjs';

import { connect } from 'react-redux';

export class StationsView extends React.PureComponent {
	componentDidMount() {
		const graph = new joint.dia.Graph();

		const paper = new joint.dia.Paper({
			el: ReactDOM.findDOMNode(this.refs.placeholder),
			width: 600,
			height: 200,
			model: graph,
			gridSize: 1
		});

		const rect = new joint.shapes.basic.Rect({
			position: { x: 100, y: 30 },
			size: { width: 100, height: 30 },
			attrs: {
				rect: { fill: 'blue' },
				text: { text: 'my box', fill: 'white' }
			}
		});

		const rect2 = rect.clone();
		rect2.translate(300);

		const link = new joint.dia.Link({
			source: { id: rect.id },
			target: { id: rect2.id }
		});

		graph.addCells([rect, rect2, link]);
	}

	renderSubwayLine(lineData, lineId) {
		const links = lineData.map((v, i, l)=>{ return {current: v, next: l.get(i+1) }}).filter(linkData => linkData.next);
		const renderedLinks = links.map((linkData) => {
			return <div>{linkData.current.get('name')} - {linkData.next.get('name')}</div>
		});
		return renderedLinks;
	}

	renderStation(station) {
		return <div>{station.get('name')}</div>;
	}

	render() {
		const allStations = this.props.stations.valueSeq().reduce((prev, cur) => { return prev.concat(cur) }).toSet();
		const renderedStations = allStations.map(this.renderStation);

		const renderedLinksByLine = this.props.stations.map(this.renderSubwayLine);
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
}

export const StationsViewContainer = connect(mapStateToProperties, actionCreators)(StationsView);
