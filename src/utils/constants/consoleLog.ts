const consoleLines: string[] = [
    '#include\nint main(void) {\n\tputs("Hello, world!");\n}',
    '#include\nint main() {\n\tstd::cout << "Hello, world!";\n\treturn 0;\n}',
    'document.write("Hello, world!");',
    'print "Hello, world!"',
    'puts "Hello, world!"',
    'println("Hello, world!")',
    'program HelloWorld;\nbegin\n  WriteLn("Hello, world!");\nend.',
    'cat("Hello, world!")',
    'echo "Hello World"',
];

export default consoleLines;
