import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './iceCreamSlice';

export default function IceCreamView() {
	const iceCreamAmount = useSelector(state => state.iceCream.iceCreamAmount);
	const dispatch = useDispatch();
	const [value, setValue] = useState(1);
	return (
		<div>
			<h2>Number of Ice Creams - {iceCreamAmount}</h2>
			<button onClick={() => dispatch(ordered())}>Order an Ice Cream</button>
			<input
				type='number'
				placeholder='Enter a number'
				onChange={e => setValue(parseInt(e.target.value))}
			/>
			<button onClick={() => dispatch(restocked(value))}>
				Restock Ice Creams
			</button>
		</div>
	);
}
