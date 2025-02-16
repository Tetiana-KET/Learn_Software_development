import React, { Component, RefObject } from 'react';
import InputComponent from './InputComponent';
interface Props {}

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
	marginRight: '5px',
};

class FocusInput extends Component {
	componentRef: RefObject<InputComponent>;

	constructor(props: Props) {
		super(props);

		this.componentRef = React.createRef<InputComponent>();
	}

	clickHandler = () => {
		this.componentRef.current?.focusInput();
	};

	render() {
		return (
			<div>
				<InputComponent ref={this.componentRef} />
				<button onClick={this.clickHandler} style={inputStyle}>
					Focus Input
				</button>
			</div>
		);
	}
}

export default FocusInput;
