const DarkTheme = () => {
	return (
		<style jsx global>
			{`
				:root {
					--background-color: rgb(56, 56, 56);
					--text-color: rgb(223, 223, 223);
					--link-color: rgb(255, 187, 3);
				}
			`}
		</style>
	);
};

export default DarkTheme;
