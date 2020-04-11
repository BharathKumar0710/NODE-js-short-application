// File system Modules
const fs = require("fs");
const path = require("path");

//create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder Created...");
});

// create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello There !",
  (err) => {
    if (err) throw err;
    console.log("The File is created...");

    // File append
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " Append text ! has been replaced",
      (err) => {
        if (err) throw err;
        console.log("The File is created...");
      }
    );
  }
);

// To read a file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// To rename a file
fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "helloNew.txt"), (err) => {
  if (err) throw err;
  console.log("File Renamed");
});
