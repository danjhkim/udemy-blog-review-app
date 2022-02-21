import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					{/* anchor tags to server side render and link to client side */}
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href='/about'>
						<a>about</a>
					</Link>
				</li>
			</ul>
			<ThemeSwitch />
			{/* pretty interest jsx tag localizes it within the component */}
			<style jsx>
				{`
					nav {
						display: flex;
						justify-content: space-between;
					}
					ul {
						list-style: none;
						padding: 0;
					}

					li {
						display: inline;
					}

					li:not(:first-child) {
						margin-left: 0.75em;
					}
				`}
			</style>
		</nav>
	);
};

export default NavBar;
