#!/bin/bash

# Compile the Java program
javac Main.java

# Run the program and capture the output
output=$(java Main)

# Compare the output with expected output
if [[ "$output" == "Expected output" ]]; then
  echo "Pass"
else
  echo "Fail"
fi
