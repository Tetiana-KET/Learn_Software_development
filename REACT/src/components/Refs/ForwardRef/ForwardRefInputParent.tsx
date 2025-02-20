import React, { Component, RefObject } from 'react';
import ForwardRefInput from './ForwardRefInput';
const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
	marginTop: '5px',
};
interface Props {}
class ForwardRefInputParent extends Component {
	inputRef: RefObject<HTMLInputElement>;

	constructor(props: Props) {
		super(props);

		this.inputRef = React.createRef();
	}

	clickHandler = () => {
		this.inputRef.current?.focus();
	};

	render() {
		return (
			<div>
				<ForwardRefInput ref={this.inputRef} />
				<button onClick={this.clickHandler} style={inputStyle}>
					Focus input
				</button>
			</div>
		);
	}
}

export default ForwardRefInputParent;
