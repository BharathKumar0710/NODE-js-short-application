const http = require("http");

// create Server Object
http
  .createServer((req, res) => {
    // write response
    res.write("Node running on port:5000");
    res.end();
  })
  .listen(5000, () => console.log("Server Running..."));
