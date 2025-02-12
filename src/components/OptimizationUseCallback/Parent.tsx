import React, { useState, useCallback, useEffect } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

export default function Parent() {
	const [age, setAge] = useState(25);
	const [salary, setSalary] = useState(50000);

	// new function is created every re-render
	// the function before render is different from a function after render
	// you should use useCallback, when creating a function in parent component
	// if you pass a function as callback to optimized with React.memo child

	useEffect(() => {
		return () => console.log('---------------------------------');
	});

	const incrementSalary = useCallback(() => setSalary(salary + 5000), [salary]);
	const incrementAge = useCallback(() => setAge(age + 1), [age]);

	return (
		<div>
			<Title />
			<Count text='Age' count={age} />
			<Button handleClick={incrementAge}> Increment Age</Button>
			<Count text='Salary' count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	);
}
