#include <stdio.h>
#include <string.h>

void swap_case(char *param) {
	for (int i=0; i<strlen(param); i++) {
		if (param[i] >= 'A' && param[i] <= 'Z') {
			param[i] = param[i] + 32;
		} else if (param[i] >= 'a' && param[i] <= 'z') {
			param[i] = param[i] - 32;
		}
	}
}

int my_printf(char *format_string, char *param){
	int fill_string = 0;
	for(int i=0;i<strlen(format_string);i++){
		// every other character that is not a parameter specifier
		if (format_string[i] != '#') {
			putchar(format_string[i]);
			fill_string = 0;
			continue;
		}

		// we have parameter specifier but no length specifier so we print the whole parameter
		if (format_string[i+1] == 'k') {
			i++;
			swap_case(param);
			printf("%s",param);
			continue;
		}

		// case after # we have a dot
		if (format_string[i+1] == '.') {
			fill_string = 0;

			// case after a dot next is parameter specifier (#.k) and no length number so we print nothing instead of param string
			if (format_string[i+2] == 'k') {
				i += 2;
				continue;
			}

			// case next is some character other than a number
			if (format_string[i+2] < '0' || format_string[i+2] > '9') {
				putchar(format_string[i]);
				continue;
			}
		} else if (format_string[i+1] >= '0' && format_string[i+1] <= '9') { // case after # we have a number
			fill_string = 1;
		} else { // case after # we have some character other than k or . or a number
			putchar(format_string[i]);
			continue;
		}
		
		// case we have nothing after the length specifier
		if (i+2 >= strlen(format_string)) {
			putchar(format_string[i]);
			continue;
		}
		
		// find the next non-number character
		int next_i = fill_string ? i + 1 : i + 2; // #.[this character] or #[this character] in case of no-dot parameter
		char next_char = format_string[next_i]; 
		int length = 0;
		while (next_char >= '0' && next_char <= '9' && next_i <= strlen(format_string)) {
			length = (length * 10) + (next_char - '0');

			next_i++;
			next_char = format_string[next_i];
		}

		// case we have length specifier but the number is not followed by k
		if (next_char != 'k') {
			putchar(format_string[i]);
			continue;
		}
		
		// case we have length specifier and this number is followed by k
		i = next_i;
		swap_case(param);
		int chars_to_print = strlen(param) < length ? strlen(param) : length;

		// case we have length specifier and the length is bigger than the length of the parameter string
		if (fill_string && length > strlen(param)) {
			// add x times space before the string
			for (int j=0; j<length-strlen(param); j++) {
				putchar(' ');
			}
		}

		for (int j=0; j<chars_to_print; j++) {
			putchar(param[j]);
		}
		
	}
	puts("");
	return 0;
}

int main(int argc, char *argv[]){
	char buf[1024],buf2[1024];
	while(gets(buf)){
		gets(buf2);
		my_printf(buf,buf2);
	}
	return 0;
}
