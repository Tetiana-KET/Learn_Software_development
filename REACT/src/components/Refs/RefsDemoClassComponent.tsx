import { Component, RefObject, createRef } from 'react';

interface Props {}
interface State {}

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
	marginRight: '5px',
};

class RefsDemo extends Component<Props, State> {
	inputRef: RefObject<HTMLInputElement>;
	callbackRef: HTMLInputElement | null;

	constructor(props: Props) {
		super(props);

		this.state = {};
		this.inputRef = createRef<HTMLInputElement>();

		// an older way to create ref? just to get aquanted
		this.callbackRef = null;
	}

	setCallbackRef = (element: HTMLInputElement | null) => {
		this.callbackRef = element;
	};

	componentDidMount(): void {
		//callbackRef is an old way to access dom element
		//it will call the ref callback with the DOM element, when component mounts
		//and call it with null when the component unmounts
		//so it is important to check if value exist
		// if (this.callbackRef) this.callbackRef.focus();

		this.inputRef.current?.focus();
	}

	handleButtonClick = () => {
		// access the value property of the input DOM node
		console.log(this.inputRef.current?.value);
	};

	handleButtonClickForCBRef = () => {
		//console.log(this.callbackRef?.value);
	};

	render() {
		return (
			<div>
				<input type='text' ref={this.inputRef} style={inputStyle} />
				<input type='text' ref={this.setCallbackRef} style={inputStyle} />
				<button onClick={this.handleButtonClick} style={inputStyle}>
					Click
				</button>
			</div>
		);
	}
}

export default RefsDemo;
