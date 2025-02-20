import React, { useDeferredValue, useEffect, useState } from 'react';

interface Props {
	children: React.ReactNode;
}

export default function ParentOne({ children }: Props) {
	const [count, setCount] = useState(0);
	console.log('Parent ONE renders');

	useEffect(() => {
		return () => console.log('*****************************');
	});

	return (
		<div style={{ border: '1px solid #000', margin: '10px' }}>
			<p>Count {count}</p>
			<button onClick={() => setCount(prev => prev + 1)}>Increment</button>
			{/* when we directly invoke a child component in a parent component,
      it will be unnecessary re-rendered when its parent re-renders. 
      to prevent it think of passing a child as a prop instead. 
      It is invoked in where Parent is invoked
      <ParentOne>	<ChildOne />	</ParentOne>*/}
			{/* <ChildOne /> */}
			{children}
		</div>
	);
}
