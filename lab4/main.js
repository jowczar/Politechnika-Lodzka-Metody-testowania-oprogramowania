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

	const reversedNumber = param.toString().split("").reverse().join("");
	process.stdout.write(reversedNumber);
}

function my_printf(format_string,param){
	check_g_param(param);

	for(var i=0;i<format_string.length;i++){
		if((format_string.charAt(i) == '#') && (format_string.charAt(i+1) == 'g')){
			handle_g_param(param);
			i++;
		}else{
			process.stdout.write(format_string.charAt(i));
		}
	}
	console.log("");
}

process.stdin.on('data', function(chunk) {
	lines = chunk.split("\n");

	lines[0] = lingeringLine + lines[0];
	lingeringLine = lines.pop();
	for(var i=0;i<lines.length;i++){
		try {
			my_printf(lines[i],lines[i+1])
		} catch (err) {
			// hide error and just print 'Error' instead so the C tester can handle it
			process.stdout.write("Error\n");
		}
		i++;
	}

});

