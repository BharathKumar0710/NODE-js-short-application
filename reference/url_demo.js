const url = require("url");
const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host(root domain) and Hostname
console.log(myUrl.host);
console.log(myUrl.hostname);

// PathName
console.log(myUrl.pathname);

// Serialize query
console.log(myUrl.search);

// params Object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
