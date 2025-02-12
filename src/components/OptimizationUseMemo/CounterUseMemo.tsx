import React, { useState, useMemo } from 'react';

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
};

export default function CounterUseMemo() {
	const [counterOne, setCounterOne] = useState(0);
	const [counterTwo, setCounterTwo] = useState(0);

	const incrementOne = () => setCounterOne(counterOne + 1);
	const incrementTwo = () => setCounterTwo(counterTwo + 1);

	// the loop just to simulate heavy computations, or fetching
	// this slows down counter 1, but counter 2 is slow as well
	// every time the state updates, the component re-renders and function is called again
	// so we need to tell react not to recalculate this value
	// useMemo returns a cached value, and do not recalculate it if dependency doesn't change
	// isEven now is not a function, it stores a returned cached value

	const isEven = useMemo(() => {
		let i = 0;
		while (i < 200000000) i++;
		return counterOne % 2 === 0;
	}, [counterOne]);

	return (
		<div
			style={{
				display: 'flex',
				gap: '10px',
				justifyContent: 'center',
				padding: '10px	',
			}}
		>
			<button onClick={incrementOne} style={inputStyle}>
				Count One is {isEven ? 'Even' : 'Odd'} - {counterOne}
			</button>
			<button onClick={incrementTwo} style={inputStyle}>
				Count Two - {counterTwo}
			</button>
		</div>
	);
}
