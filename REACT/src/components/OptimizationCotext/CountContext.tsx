import React, { createContext, useState } from 'react';

interface Props {
	children: React.ReactNode;
}

export const CountContext = createContext(0);

export default function ContextParent({ children }: Props) {
	const [count, setCount] = useState(0);
	console.log('ContextParent renders');
	return (
		<div style={{ border: '1px solid #000', margin: '10px' }}>
			<button onClick={() => setCount(prev => prev + 1)}>
				Count = {count}
			</button>
			<CountContext.Provider value={count}>{children}</CountContext.Provider>
		</div>
	);
}
// only parent and component C will re-render
// when react re-renders ContextParent component, it knows, that component can't modify its props,
// so react may be sure, that children are unchanged, so there is no need to re-render them
