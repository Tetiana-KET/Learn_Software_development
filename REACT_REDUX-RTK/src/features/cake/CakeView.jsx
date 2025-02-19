import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

export default function CakeView() {
	const cakesAmount = useSelector(state => state.cake.cakesAmount);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Number of Cakes - {cakesAmount}</h2>
			<button onClick={() => dispatch(ordered())}>Order a Cake</button>
			<button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
		</div>
	);
}
