import React, { useEffect, useState } from 'react';

export default function Timer() {
	const [count, setCount] = useState(0);

	const tick = () => {
		setCount(prev => prev + 1);
	};

	useEffect(() => {
		const interval = setInterval(tick, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<h1 style={{ fontSize: '50px', fontWeight: 'bold', marginTop: '10px' }}>
				{count}
			</h1>
		</div>
	);
}
/**
 * The function prev => prev + 1 receives the most recent value of count from React internally,
 * regardless of when or where it is called. It doesn't rely on the closure's count value,
 * avoiding potential stale state issues.
 * If you did this instead:

  const tick = () => {
    setCount(count + 1); // relies on closure
  };
  It would always increment based on the initial count value (0), 
  leading to incorrect behavior due to stale closures unless you include count in the dependency array of useEffect.

  Using prev => prev + 1 inside setCount is the recommended approach in asynchronous callbacks (like timers) 
  to avoid stale state issues. This is why your code works perfectly without dependencies in the useEffect.
 */
