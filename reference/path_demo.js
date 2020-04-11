const path = require("path");

// Base file name (displays only the name of the file)
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// create Path object
console.log(path.parse(__filename).base);

// Concatenate (../test/hello.html)
console.log(path.join(__dirname, "test", "hello.html"));
