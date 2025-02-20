import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

interface State {
	isLoading: boolean;
	isError: boolean;
	post: Post | null;
}

interface Post {
	userId: number;
	id: string;
	title: string;
	body: string;
}

const InitialState: State = {
	isLoading: true,
	isError: false,
	post: null,
};

type Action = { type: 'SUCCESS'; payload: Post } | { type: 'ERROR' };

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/1';

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'SUCCESS':
			return {
				isLoading: false,
				isError: false,
				post: action.payload,
			};
		case 'ERROR':
			return {
				isLoading: false,
				isError: true,
				post: null,
			};
		default:
			return state;
	}
};

export default function FetchingDataWithReducer() {
	const [state, dispatch] = useReducer(reducer, InitialState);

	useEffect(() => {
		axios
			.get(BASE_URL)
			.then(response => {
				dispatch({ type: 'SUCCESS', payload: response.data });
			})
			.catch(err => {
				dispatch({ type: 'ERROR' });
				console.log(err);
			});
	}, []);

	return (
		<div>
			<h1 style={{ margin: '10px 0', fontWeight: 'bold' }}>
				Fetching from component FetchingDataWithReducer
			</h1>
			{state.isLoading ? 'Loader Component' : state.post?.title}
			{state.isError && 'Error Component'}
		</div>
	);
}
