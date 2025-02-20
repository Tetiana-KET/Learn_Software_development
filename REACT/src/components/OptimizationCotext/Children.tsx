import React from 'react';
import { CountContext } from './CountContext';

export function ChildA() {
	console.log('Child A renders');
	return (
		<>
			<div>Child A</div>
			<ChildB />
		</>
	);
}

export function ChildB() {
	console.log('Child B renders');
	return (
		<>
			<div>Child B</div>
			<ChildC />
		</>
	);
}

export function ChildC() {
	const count = React.useContext(CountContext);
	console.log('Child C renders');
	return <div>Child C count = {count}</div>;
}
