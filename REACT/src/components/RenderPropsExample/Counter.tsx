import React, { Component, ReactNode } from 'react';

interface Props {
	render: (count: number, incrementCount: () => void) => ReactNode;
}

interface State {
	count: number;
}

class Counter extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = { count: 0 };
	}

	incrementCount = () => {
		this.setState(prevState => {
			return { count: prevState.count + 1 };
		});
	};

	// it doesn't render anything by its own, it is going to render, what ever is passed as a render prop
	render() {
		return (
			<div>{this.props.render(this.state.count, this.incrementCount)}</div>
		);
	}
}

export default Counter;
