import React, { useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export interface CountContext {
	count: number;
	dispatch: React.Dispatch<any>;
}

export const CountContext = React.createContext<CountContext | null>(null);

const initialState = 0;

const reducer = (curState: number, action: any) => {
	switch (action) {
		case 'increment':
			return curState + 1;
		case 'decrement':
			return curState - 1;
		case 'reset':
			return initialState;
		default:
			return curState;
	}
};

export default function ContextWithReducer() {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<CountContext.Provider value={{ count, dispatch }}>
			{/* count value is shared between components */}
			<h1 style={{ fontSize: '40px' }}>Count in parent component: {count}</h1>
			<ComponentA />
			<ComponentB />
			<ComponentC />
		</CountContext.Provider>
	);
}
