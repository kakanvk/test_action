all: test

test:
    javac *.java
    java TestRunner
