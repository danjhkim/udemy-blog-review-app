import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lib/posts';

function Homepage({ posts }) {
	console.log(posts);

	return (
		<>
			<Head>
				<title>My blog</title>
				<meta name='description' value='This is my blog' />
			</Head>
			<main>
				<h1>My Blog</h1>
				<ul>
					{posts.map(post => {
						return (
							<li key={post.slug}>
								<Link href={`/posts/${post.slug}`}>
									<a>{post.title}</a>
								</Link>
								<span>{post.date}</span>
							</li>
						);
					})}
				</ul>
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	const posts = await getPosts();

	return {
		props: { posts },
	};
};

export default Homepage;
