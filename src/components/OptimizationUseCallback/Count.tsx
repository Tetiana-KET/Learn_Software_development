import React from 'react';

interface Count {
	text: string;
	count: number;
}

function Count({ text, count }: Count) {
	console.log(`Rendering - ${text}`);
	return (
		<div>
			{text} - {count}
		</div>
	);
}
export default React.memo(Count);
