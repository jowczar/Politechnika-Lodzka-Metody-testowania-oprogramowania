#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lingeringLine = "";

function my_printf(format_string, param){
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

