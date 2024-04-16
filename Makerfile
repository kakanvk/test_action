CC = gcc
CFLAGS = -Wall -Wextra -Werror

.PHONY: all clean

all: test_prime

test_prime: src/prime.o test/test_prime.o
    $(CC) $(CFLAGS) $^ -o $@

src/prime.o: src/prime.c src/prime.h
    $(CC) $(CFLAGS) -c $< -o $@

test/test_prime.o: test/test_prime.c src/prime.h
    $(CC) $(CFLAGS) -c $< -o $@

clean:
    rm -rf test_prime src/*.o test/*.o
