#include <stdio.h>

int main(void)
{
  printf("In C, x stands for unsigned integer represented as lowercase heximal number\n");
  printf("===========================================\n");
  printf("text with %x signed integer has undefined behaviour, it will be handled as Error\n", -15);
  printf("In C unsigned int has range 0 to 4,294,967,295\n");
  printf("text with %x normal integer range + 1 prints OK\n", 2147483648);
  printf("text with %x unsigned integer range + 1 prints overflows, it will be handled as Error\n",  4294967296);
  printf("===========================================\n");
  printf("text with %x normal\n", 12);
  printf("text with %x normal\n", 1234);
  printf("text with %x unsigned integer range\n", 4294967295);
  printf("text with %x unsigned integer range + 1\n", 4294967294);
  printf("text with %x zero\n", 0);
  printf("text with %x normal\n", 2147483645);
  printf("text with %x in octal system (prefixed with 0 in C) will be treated as 10-based in this program\n", 010);
  return 0;
}