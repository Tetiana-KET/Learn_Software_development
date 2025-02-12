import React, { Component, RefObject } from 'react';
interface Props {}

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
	marginBottom: '5px',
};

class InputComponent extends Component {
	inputRef: RefObject<HTMLInputElement>;

	constructor(props: Props) {
		super(props);

		this.inputRef = React.createRef();
	}

	focusInput = () => {
		this.inputRef.current?.focus();
	};

	render() {
		return (
			<div>
				<input type='text' ref={this.inputRef} style={inputStyle} />
			</div>
		);
	}
}

export default InputComponent;
