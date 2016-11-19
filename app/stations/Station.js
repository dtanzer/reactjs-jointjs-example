import React from 'react';
import joint from 'jointjs';

export class Station extends React.Component {
	componentDidMount() {
		const station = this.props.station;

		const rect = new joint.shapes.basic.Rect({
			position: { x: station.x, y: station.y },
			size: { width: 100, height: 30 },
			attrs: {
				rect: { fill: 'blue' },
				text: { text: station.name, fill: 'white' }
			}
		});
		rect.set('id', station.id);

		this.props.graph.addCell(rect);
	}

	render() {
		return null;
	}
}
