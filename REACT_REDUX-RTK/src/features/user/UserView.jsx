import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';
export default function UserView() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);
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
			{!isLoading && users.length && (
				<ul>
					{users.map(user => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			)}
		</div>
	);
}
