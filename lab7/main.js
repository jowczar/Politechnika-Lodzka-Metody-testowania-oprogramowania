#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lingeringLine = "";

function check_j_param(param) {
	const asNumber = Number(param);
	if (!Number.isInteger(asNumber) || asNumber < 0 || asNumber > 4294967295) {
		throw new Error(`Error: parameter ${param} is not a valid unsigned integer`);
	}
} 

function handle_j_param(param) {
	let asHex = Number(param)
		.toString(16)
		.replace(/a/gi, 'g')
		.replace(/b/gi, 'h')
		.replace(/c/gi, 'i')
		.replace(/d/gi, 'j')
		.replace(/e/gi, 'k')
		.replace(/f/gi, 'l');
	return asHex;
}

function my_printf(format_string, param){
	if (format_string.indexOf('#j') !== -1) {
		check_j_param(param);
		format_string = format_string.replace(/#j/g, handle_j_param(param));
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

