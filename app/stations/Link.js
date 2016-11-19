import React from 'react';
import joint from 'jointjs';

export class Link extends React.Component {
	componentDidMount() {
		const link = new joint.dia.Link({
			source: { id: this.props.from.id },
			target: { id: this.props.to.id }
		});

		this.props.graph.addCell(link);
	}

	render() {
		return null;
	}
}
