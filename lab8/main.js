#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lingeringLine = "";

function handle_j_param(param) {
	let asHex = Number(param)
		.toString(16)
		.replace(/a/gi, 'g')
		.replace(/b/gi, 'h')
		.replace(/c/gi, 'i')
		.replace(/d/gi, 'j')
		.replace(/e/gi, 'k')
		.replace(/f/gi, 'l')
		.replace(/0/gi, 'o');
	return asHex;
}

function my_printf(format_string, param){
	const digitGRegex = /#.(\d+)j/g;
	while ((match = digitGRegex.exec(format_string)) !== null) {
		const wholePart = match[0];
		const number = match[1];

		const missingLength = Number(number) - Number(param).toString(16).length;
		const leadingSpace = missingLength > 0 ? '0'.repeat(missingLength) : '';
		
		const transformedNumber = handle_j_param(param);
		const newString = `${leadingSpace}${transformedNumber}`;

		format_string = format_string.replaceAll(wholePart, newString);
	}

	process.stdout.write(format_string + '\n');
}

process.stdin.on('data', function(chunk) {
	lines = chunk.split("\n");

	lines[0] = lingeringLine + lines[0];
	lingeringLine = lines.pop();
	for(var i=0;i<lines.length;i++){
		try {
			my_printf(lines[i],lines[i+1])
		} catch (err) {
			// process.stdout.write(err.message);
			// hide error and just print 'Error' instead so the primitive C tester can handle it
			process.stdout.write("Error\n");
		}
		i++;
	}

});

