import React, { Component } from 'react';

interface Props {
	count: number;
	incrementCount: () => void;
}

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
	marginRight: '5px',
};

class ClickCounter extends Component<Props> {
	render() {
		const { count, incrementCount } = this.props;
		return (
			<div>
				<button onClick={incrementCount} style={inputStyle}>
					{' '}
					Clicked {count} times
				</button>
			</div>
		);
	}
}

export default ClickCounter;
