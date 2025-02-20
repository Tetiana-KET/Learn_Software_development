import React from 'react';

function Title() {
	console.log('Rendering TITLE');
	return (
		<h2 style={{ fontWeight: 'bold', margin: '5px' }}>
			{' '}
			Learning UseCallback{' '}
		</h2>
	);
}
export default React.memo(Title);
