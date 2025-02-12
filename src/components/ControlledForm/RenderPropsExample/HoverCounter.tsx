import React, { Component } from 'react';
interface Props {
	count: number;
	incrementCount: () => void;
}
export class HoverCounter extends Component<Props> {
	render() {
		const { count, incrementCount } = this.props;
		return (
			<div>
				<h1
					onMouseOver={incrementCount}
					style={{ fontSize: '30px', fontWeight: 'bold' }}
				>
					{' '}
					Hovered {count} times
				</h1>
			</div>
		);
	}
}

export default HoverCounter;
