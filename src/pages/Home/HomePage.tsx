import { useEffect, useState } from 'react';

import { posts as dummyPosts } from '../../api/data/posts';
import ClickCounter from '../../components/RenderPropsExample/ClickCounter';
import Counter from '../../components/RenderPropsExample/Counter';
import HoverCounter from '../../components/RenderPropsExample/HoverCounter';
import CounterWithObjectReducer from '../../components/ReducerHook/CounterWithObjectReducer';
import { Post } from '../../types/entities/Post';
import MultipleUseReducerHooks from '../../components/ReducerHook/MultipleUseReducerHooks';
import ContextWithReducer from '../../components/ReducerWithContextForGlobalState/ContextWithReducer';
import FetchingWithLoader from '../../components/FetchingAxios/FetchingWithLoader';
import FetchingDataWithReducer from '../../components/FetchingDataWithReducer/FetchingDataWithReducer';
import Parent from '../../components/OptimizationUseCallback/Parent';
import CounterUseMemo from '../../components/OptimizationUseMemo/CounterUseMemo';
import RefsDemoUseRefFocusInput from '../../components/Refs/RefsDemoUseRefFocusInput';
import TimerWithUseRef from '../../components/Refs/TimerWithUseRef';
import FormControlled from '../../components/FormControlled/FormControlled';
import FormControlledWithHook from '../../components/FormControlled/FormControlledWithHook';
import ObjectUseState from '../../components/Render/ObjectUseState';
import ParentOne from '../../components/OptimizationSameReference/ParentOne';
import ChildOne from '../../components/OptimizationSameReference/ChildOne';
import { ChildA } from '../../components/OptimizationCotext/Children';
import ContextParent from '../../components/OptimizationCotext/CountContext';

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
				<ParentOne>
					<ChildOne />
				</ParentOne>
				<ContextParent>
					<ChildA />
				</ContextParent>
				{/* <ForwardRefInputParent /> */}
				{/* <FocusInput /> */}
				{/* <RefsDemo /> */}
				{/* <ControlledForm /> */}
				{/* <PostFeed posts={posts} /> */}
				{/* two ways to use it, or use attribute render (it may be called in a dif.way) or pass between tags 
				<Counter>
					{(count, incrementCount) => (
						<ClickCounter count={count} incrementCount={incrementCount} />
					)}
				</Counter>
				when used this way in Counter use this.props.children
				*/}
				{/* <Counter
					render={(count, incrementCount) => (
						<ClickCounter count={count} incrementCount={incrementCount} />
					)}
				/>
				<Counter
					render={(count, incrementCount) => (
						<HoverCounter count={count} incrementCount={incrementCount} />
					)}
				/> */}
				{/* <Timer /> */}
				{/* <DataFetchingWithAxios /> */}
				{/* <CounterWithReducer /> */}
				{/* <CounterWithObjectReducer /> */}
				{/* <MultipleUseReducerHooks /> */}
				<RefsDemoUseRefFocusInput />
				<ContextWithReducer />
				<FetchingWithLoader />
				<FetchingDataWithReducer />
				<Parent />
				{/* <CounterUseMemo /> */}
				<TimerWithUseRef />
				<FormControlledWithHook />
				<ObjectUseState />
			</div>
		</div>
	);
}
export default HomePage;
