import Meta from '../../components/Meta';
import { getPost, getSlugs } from '../../lib/posts';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

const PostPage = ({ post }) => {
	const router = useRouter();
	const { slug } = router.query;

	const renderPost = () => {
		if (router.isFallback) {
			return <div>Loading...</div>;
		} else {
			return (
				<div>
					<span>params: {slug}</span>
					<p>{post.date}</p>
					<h1>{post.title}</h1>
					<article>
						<ReactMarkdown>{post.body}</ReactMarkdown>
					</article>
				</div>
			);
		}
	};

	return (
		<>
			<Meta
				title={post.title}
				description='First Post'
				keywords='First Post'
			/>
			{renderPost()}
		</>
	);
};

export const getStaticProps = async ({ params: { slug } }) => {
	const post = await getPost(`${slug}`);
	return {
		props: {
			post,
		},
	};
};

export async function getStaticPaths() {
	//rememer the slug is already formatted from the lib/posts.js
	const data = await getSlugs();

	const paths = data.map(slug => {
		return {
			params: { slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export default PostPage;
