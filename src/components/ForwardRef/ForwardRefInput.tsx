import React from 'react';
const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
	marginRight: '5px',
};

const ForwardRefInput = React.forwardRef<HTMLInputElement, {}>(
	(_props, ref) => {
		return (
			<div>
				<input type='text' style={inputStyle} ref={ref} />
			</div>
		);
	}
);

export default ForwardRefInput;
