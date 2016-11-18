import React from 'react';
import ReactDOM from 'react-dom';
import joint from 'jointjs';

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

    render() {
        return <div ref="placeholder"></div>;
    }
}
