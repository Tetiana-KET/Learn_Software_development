// npm install axios
// jsonplaceholder.typicode.com/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
	userId: number;
	id: string;
	title: string;
	body: string;
}

export default function DataFetchingWithAxios() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [post, setPost] = useState<Post | null>(null);
	const [postId, setPostId] = useState('');

	useEffect(() => {
		if (!postId) {
			axios
				.get(BASE_URL)
				.then(res => {
					console.log(res.data);
					setPost(null);
					setPosts(res.data);
				})
				.catch(err => {
					console.log(err);
				});
		} else {
			axios
				.get(`${BASE_URL}/${postId}`)
				.then(res => {
					setPost(res.data);
					setPosts([]);
					console.log(res.data);
				})
				.catch(err => {
					console.log(err);
				});
		}
	}, [postId]); //empty array to fetch data only once

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPostId(e.target.value);

	return (
		<div>
			<input
				type='text'
				value={postId}
				onChange={handleChange}
				style={{
					border: 'solid 1px #000',
					padding: '5px 10px',
					margin: '5px 0',
				}}
			/>
			<ul>
				{/* Render single post if available */}
				{post ? (
					<Post id={post.id} title={post.title} />
				) : (
					posts.map(post => (
						<Post key={post.id} id={post.id} title={post.title} />
					))
				)}
			</ul>
		</div>
	);
}
