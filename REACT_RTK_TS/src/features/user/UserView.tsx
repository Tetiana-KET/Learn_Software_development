import { useEffect } from 'react';
import { fetchUsers } from './userSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
export default function UserView() {
	const dispatch = useAppDispatch();
	const user = useAppSelector(state => state.user);
	const { isLoading, error, users } = user;

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);
	<li></li>;
	return (
		<div>
			<h2>List of Users</h2>
			{isLoading && <div>LOADING...</div>}
			{!isLoading && error && <div>ERROR: {error}</div>}
			{!isLoading && users.length ? (
				<ul>
					{users.map(user => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			) : null}
		</div>
	);
}
