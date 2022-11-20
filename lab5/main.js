#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lingeringLine = "";

function check_g_param(param) {
	const asNumber = Number(param);
	if (!Number.isInteger(asNumber) || Math.abs(asNumber) > 2147483647) {
		throw new Error(`Error: parameter ${param} is not a valid integer`);
	}
} 

function handle_g_param(param) {
	check_g_param(param);
	
	const hasSign = Number(param) < 0;
	const reversedNumber = Math.abs(param).toString().split("").reverse().join("");
	return `${hasSign ? '-' : ''}${Number(reversedNumber)}`;
}

function handle_x_g_param(param) {
	check_g_param(param);

	const hasSign = Number(param) < 0;
	const substractedNumber = Math.abs(param).toString().split("").map(c => {
		const asNumber = Number(c);
		if (asNumber == 0) {
			return '9';
		}

		return (asNumber - 1).toString();
	}).join("");
	return `${hasSign ? '-' : ''}${Number(substractedNumber)}`;
}

function my_printf(format_string,param){
	if (format_string.indexOf('#g') !== -1) {
		check_g_param(param);
		format_string = format_string.replace(/#g/g, handle_g_param(param));
	}

	if (format_string.match(/#\d+g/g)) {
		check_g_param(param);
	// 	format_string = format_string.replace(/\#x/g, handle_x_g_param(param));
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
			// hide error and just print 'Error' instead so the primitive C tester can handle it
			process.stdout.write("Error\n");
		}
		i++;
	}

});

