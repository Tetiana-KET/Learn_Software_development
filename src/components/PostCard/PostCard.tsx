import { Post } from '../../types/entities/Post';
import ClickEvent from '../ClickEvent';

/**
 * responsible for rendering a single post
 * responsible for styling the post
 */

interface PostCardProps {
	post: Post;
}

export function PostCard({ post }: PostCardProps) {
	return (
		<div>
			<h2 className='mb-4 text-2xl font-bold'>{post.title}</h2>
			<p>{post.content}</p>
			<ClickEvent />
		</div>
	);
}
