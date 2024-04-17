#!/bin/bash

# Compile the Java program
javac "$PWD/src/Main.java"

# Run the program and capture the output
output=$(java -cp "$PWD/src" Main)

# Compare the output with expected output
if [[ "$output" == "Expected output" ]]; then
  echo "Pass"
else
  echo "Fail"
fi
