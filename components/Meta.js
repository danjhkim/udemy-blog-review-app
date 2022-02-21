import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<meta name='keywords' content={keywords} />
			<meta name='description' content={description} />
			<meta charset='utf-8' />
			<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
			<title>{title}</title>
			<link rel='icon' href='/icons/favicon.ico' />
		</Head>
	);
};

Meta.defaultProps = {
	title: 'Blog',
	keywords: 'web developlenmt, programming, blogs, tech',
	description: 'BLog page!',
};

export default Meta;
