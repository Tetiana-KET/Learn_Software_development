import { ordered, restocked } from './cakeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export default function CakeView() {
	const cakesAmount = useAppSelector(state => state.cake.cakesAmount);
	const dispatch = useAppDispatch();
	return (
		<div>
			<h2>Number of Cakes - {cakesAmount}</h2>
			<button onClick={() => dispatch(ordered())}>Order a Cake</button>
			<button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
		</div>
	);
}
