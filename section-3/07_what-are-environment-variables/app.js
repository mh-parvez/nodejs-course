const fs = require("fs");

const fileData = fs.readFileSync("./.env").toString();

fileData.split(/\r?\n/).forEach((variable) => {
  const [key, value] = variable.split("=");
  process.env[key] = value;
});

setInterval(() => {
  const a = process.env;
  console.log("hii");
}, 1000);

// 199
// NODEREGEX