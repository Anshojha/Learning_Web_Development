const fs = require("fs");
let text = fs.readFileSync("dele.txt",'utf-8');
text = text.replace("beautiful", "Rohan");

console.log("The contennt of the file is")
console.log(text);
console.log("Creating a new file.")
fs.writeFileSync("rohan.txt", text);