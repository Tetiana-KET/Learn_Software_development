import React, { useReducer } from 'react';
// when using action as object you are able to pass additional data to the reducer function.
// using state as object you are able to keep track on multiple state variables
// maintaining multiple variables in a single state object is suitable for dealing with global state

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
	margin: '5px',
};

interface State {
	count: number;
	secondCount: number;
}

type UpdateActionType = 'increment' | 'decrement' | 'increment2' | 'decrement2';
type UpdateAction = { type: UpdateActionType; value: number };

type ResetAction = { type: 'reset' };

const initialState: State = {
	count: 0,
	secondCount: 0,
};

const reducer = (state: State, action: UpdateAction | ResetAction): State => {
	switch (action.type) {
		case 'increment':
			return { ...state, count: state.count + action.value };
		case 'decrement':
			return { ...state, count: state.count - action.value };
		case 'increment2':
			return { ...state, secondCount: state.secondCount + action.value };
		case 'decrement2':
			return { ...state, secondCount: state.secondCount - action.value };
		case 'reset':
			return initialState;
		default:
			return state;
	}
};

export default function CounterWithObjectReducer() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h1 style={{ fontSize: '40px' }}>Count: {state.count}</h1>
			<h1 style={{ fontSize: '40px' }}>Second Count: {state.secondCount}</h1>
			<button
				onClick={() => dispatch({ type: 'increment', value: 1 })}
				style={inputStyle}
			>
				Increment
			</button>
			<button
				onClick={() => dispatch({ type: 'decrement', value: 1 })}
				style={inputStyle}
			>
				Decrement
			</button>
			<button
				onClick={() => dispatch({ type: 'increment', value: 5 })}
				style={inputStyle}
			>
				Increment 5
			</button>
			<button
				onClick={() => dispatch({ type: 'decrement', value: 5 })}
				style={inputStyle}
			>
				Decrement 5
			</button>
			<button
				onClick={() => dispatch({ type: 'increment2', value: 100 })}
				style={inputStyle}
			>
				Increment Second
			</button>
			<button
				onClick={() => dispatch({ type: 'decrement2', value: 100 })}
				style={inputStyle}
			>
				Decrement Second
			</button>
			<button onClick={() => dispatch({ type: 'reset' })} style={inputStyle}>
				Reset
			</button>
		</div>
	);
}
