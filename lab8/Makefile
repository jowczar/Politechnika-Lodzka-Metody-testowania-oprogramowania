APP=./main.js
all:
	gcc unit.c -o tester
	chmod +x $(APP)
tests:
	./tester $(APP)
clean:
	rm tester 
manual_test:
	gcc printf_manual_test.c -o printf_manual_test
	./printf_manual_test