import React, { ReactNode } from 'react';

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
	marginRight: '5px',
};

interface Button {
	handleClick: () => void;
	children: ReactNode;
}

function Button({ handleClick, children }: Button) {
	// we accept a function as a prop
	// it is created every time the parent re-renders
	//// the function before render is different from a function after render
	// and since it is a prop, react.memo sees that the prop has changed, and will not prevent re-render
	// you should use useCallback, when creating a function in parent component

	console.log('Rendering button - ', children);
	return (
		<button onClick={handleClick} style={inputStyle}>
			{children}
		</button>
	);
}

export default React.memo(Button);
// it will prevent the Button from re-render, when the parent rerenders, unless its state or props are changed
