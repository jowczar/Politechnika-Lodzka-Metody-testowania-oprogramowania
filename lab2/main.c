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
	for(int i=0;i<strlen(format_string);i++){
		// every other character that is not a parameter specifier
		if (format_string[i] != '#') {
			putchar(format_string[i]);
			continue;
		}

		// we have parameter specifier but no length specifier so we print the whole parameter
		if (format_string[i+1] == 'k') {
			i++;
			swap_case(param);
			printf("%s",param);
			continue;
		}

		// we have parameter specifier and length specifier 
		// so we print the first n characters of the parameter
		if (format_string[i+1] == '.') {
			
			// case we have nothing after the length specifier
			if (i+2 >= strlen(format_string)) {
				putchar(format_string[i]); // #
				putchar(format_string[i+1]); // .
				i++;
				continue;
			}

			// case next is some character other than a number
			if (format_string[i+2] < '0' || format_string[i+2] > '9') {
				putchar(format_string[i]); // #
				putchar(format_string[i+1]); // .
				putchar(format_string[i+2]); // some character that is not the number
				i += 2;
				continue;
			}
			
			// find the next non-number character
			int future_i = i + 2;
			char test = format_string[future_i]; 
			int length = 0;
			while (test >= '0' && test <= '9' && future_i < strlen(format_string)) {
				future_i++;
				test = format_string[future_i];
				length = length * 10 + (test - '0');
			}

			// case we have length specifier but the number is not followed by k
			if (test != 'k') {
				// put all those chars here back
				for (int j=i; j<future_i; j++) {
					putchar(format_string[j]);
				}
				i += future_i;
				continue;
			}
			
			// case we have length specifier and this number is followed by k (the correct case)
			i += future_i;
			swap_case(param);
			for (int j=0; j<length; j++) {
				putchar(param[j]);
			}

			continue;
		}
		
		// case after # we have some character other than k or .
		putchar(format_string[i]);
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
