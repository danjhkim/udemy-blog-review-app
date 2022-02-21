function alphabetPosition(text) {
	const alpha = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	let newarray = [];

	for (let i = 0; i < text.length; i++) {
		for (let b = 0; b < alpha.length; b++) {
			if (alpha[b] === text[i]) {
				newarray.push(b + 1);
			}
		}
	}

	return newarray;
}

console.log(alphabetPosition('hello my baby'));
