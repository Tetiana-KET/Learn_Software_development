import { Post } from '../../types/entities/Post';
import { PostCard } from '../PostCard/PostCard';

interface PostFeedProps {
	posts: Post[];
}

/**
 * responsible for taking a list of posts and rendering them as Postcards
 * responsible for passing post prop to the PostCard
 * responsible for its own inner style
 */

function PostFeed({ posts }: PostFeedProps) {
	return (
		<div className='flex flex-col gap-4'>
			{posts.map(post => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	);
}
export default PostFeed;
