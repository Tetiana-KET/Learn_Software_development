import { useEffect, useState } from 'react';

import { posts as dummyPosts } from '../../api/data/posts';
import PostFeed from '../../components/PostFeed/PostFeed';
import { Post } from '../../types/entities/Post';
import ControlledForm from '../../components/ControlledForm/ControlledForm';
import RefsDemo from '../../components/RefsDemo';
import FocusInput from '../../components/FocusInput';

/**
 * responsible for rendering home page and its components
 * The only code it should have is the code that allows it to render itself and its components
 * if you need to fetch some date to render homepage it is also its responsibility
 *
 * responsible for Posts state
 * responsible for container styles
 * Passes Posts state to the PostFeed component
 *
 * It is NOT responsible for rendering the PostFeed, it delegates the actual rendering to PostFeed  itself
 */

function HomePage() {
	const [posts, setPosts] = useState<Post[]>(dummyPosts);

	useEffect(() => {
		// Fetch data
	}, []);

	return (
		<div className='container py-4'>
			<h1 className='mb-8 text-center text-4xl font-bold'>Home Page</h1>
			<div className='mx-auto w-[500px]'>
				<FocusInput />
				{/* <RefsDemo /> */}
				{/* <ControlledForm /> */}
				{/* <PostFeed posts={posts} /> */}
			</div>
		</div>
	);
}
export default HomePage;
