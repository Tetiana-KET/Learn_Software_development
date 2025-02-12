import React from 'react';
import { CountContext } from './ContextWithReducer';

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
	margin: '5px',
};

export default function ComponentA() {
	const countContext = React.useContext(CountContext);
	console.log(countContext); // Object - {count: 3, dispatch: ƒ}

	return (
		<div>
			<h1 style={{ fontSize: '40px' }}>Component A - {countContext?.count}</h1>
			<button
				onClick={() => countContext?.dispatch('increment')}
				style={inputStyle}
			>
				Increment
			</button>
			<button
				onClick={() => countContext?.dispatch('decrement')}
				style={inputStyle}
			>
				Decrement
			</button>
			<button
				onClick={() => countContext?.dispatch('reset')}
				style={inputStyle}
			>
				Reset
			</button>
		</div>
	);
}
