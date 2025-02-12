import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
	userId: number;
	id: string;
	title: string;
	body: string;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/1';

export default function FetchingWithLoader() {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);
	const [post, setPost] = useState<Post | null>(null);

	// we use 3 states and invoke 3 metods,
	// go and check example with reducer

	useEffect(() => {
		axios
			.get(BASE_URL)
			.then(response => {
				setIsLoading(false);
				setIsError(false);
				setPost(response.data);
			})
			.catch(err => {
				setIsLoading(false);
				setIsError(true);
				setPost(null);
				console.log(err);
			});
	}, []);

	return (
		<div>
			{isLoading ? 'Loader Component' : post?.title}
			{isError && 'Error Component'}
		</div>
	);
}
