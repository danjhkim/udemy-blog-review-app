import Layout from '../components/Layout';
// _app.js is a special key file that always loads first
// then it loads the rest of the Component and pageProps
// you can add headers here and also even entire page layouts
//that return children
import '../styles/globas.css';

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default App;
