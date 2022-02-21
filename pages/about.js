import Meta from '../components/Meta';

//! meta within a component overrides the layout one if it exists so its all good
const About = () => {
	return (
		<>
			<Meta
				title='About Me'
				description='Read more about me'
				keywords='About me'
			/>

			<div>
				<h1>About</h1>
			</div>
		</>
	);
};

export default About;
