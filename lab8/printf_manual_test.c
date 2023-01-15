#include <stdio.h>

int main(void)
{
  printf("In C, x stands for unsigned integer represented as lowercase heximal number\n");
  printf("===========================================\n");
  printf("text with %.3x\n", 200000);
  printf("text with %.1x\n", 1234);
  printf("text with %.1x\n", 2147483645);
  
  return 0;
}