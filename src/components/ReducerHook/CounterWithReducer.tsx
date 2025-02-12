import React, { useReducer } from 'react';

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
	margin: '5px',
};

const initialAState = 0;

const reducer = (curState: number, action: any) => {
	switch (action) {
		case 'increment':
			return curState + 1;
		case 'decrement':
			return curState - 1;
		case 'reset':
			return initialAState;
		default:
			return curState;
	}
};

export default function CounterWithReducer() {
	const [count, dispatch] = useReducer(reducer, initialAState);

	return (
		<div>
			<h1 style={{ fontSize: '40px' }}>Count {count}</h1>
			<button onClick={() => dispatch('increment')} style={inputStyle}>
				Increment
			</button>
			<button onClick={() => dispatch('decrement')} style={inputStyle}>
				Decrement
			</button>
			<button onClick={() => dispatch('reset')} style={inputStyle}>
				Reset
			</button>
		</div>
	);
}
