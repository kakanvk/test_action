#include <stdio.h>
#include "prime.h"

int main() {
    // Unit test cases
    printf("Test case: 2\n");
    if (isPrime(2)) {
        printf("Result: Passed\n");
    } else {
        printf("Result: Failed\n");
    }

    printf("Test case: 4\n");
    if (!isPrime(4)) {
        printf("Result: Passed\n");
    } else {
        printf("Result: Failed\n");
    }

    printf("Test case: 17\n");
    if (isPrime(17)) {
        printf("Result: Passed\n");
    } else {
        printf("Result: Failed\n");
    }

    printf("Test case: 20\n");
    if (!isPrime(20)) {
        printf("Result: Passed\n");
    } else {
        printf("Result: Failed\n");
    }

    printf("Test case: 53\n");
    if (isPrime(53)) {
        printf("Result: Passed\n");
    } else {
        printf("Result: Failed\n");
    }

    printf("Test case: 53\n");
    if (isPrime(59)) {
        printf("Result: Passed\n");
    } else {
        printf("Result: Failed\n");
    }

    return 0;
}
