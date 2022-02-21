import { useState } from 'react';
import DarkTheme from './DarkTheme';

const ThemeSwitch = () => {
	const [darkMode, setDarkMode] = useState(loadDarkMode());
	// if (typeof window !== 'undefined') {
	// 	const saved = localStorage.getItem('darkMode');
	// }

	function loadDarkMode() {
		// this is needed as nextjs tries to run localstorage on serverside so if its server u always return false

		if (typeof localStorage === 'undefined') {
			return false;
		}
		const value = localStorage.getItem('darkMode');
		return value === null ? false : JSON.parse(value);
	}

	const darkModeSetter = () => {
		setDarkMode(!darkMode);
		localStorage.setItem('darkMode', JSON.stringify(!darkMode));
	};

	const text = darkMode ? 'Light Mode' : 'Dark Mode';
	// suppress hydation warning is need because the server will always render darkmode as false as stated above which assumes the text should be 'dark mode'
	// however the client side will access localstorage and change it so there will be a discrepancy which in this case is okay.
	return (
		<>
			<button onClick={() => darkModeSetter()} suppressHydrationWarning>
				{text}
			</button>
			<style jsx>{`
				button {
					background: none;
					border: none;
					cursor: pointer;
					color: inherit;
				}
			`}</style>
			{/* jsx cannot be rendered contionally */}
			{/*thus we import it from a different component also fot nextjs this is making use of hydrate*/}
			{darkMode ? <DarkTheme /> : null}
		</>
	);
};

export default ThemeSwitch;
