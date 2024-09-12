"use strict";

const b = loadModule("./math.js");

// vm.runInNewContext("console.log(num)", { num });
// eval("var a = 5");

function loadModule(path) {
  const fs = require("fs");
  const vm = require("vm");
  const fileContent = fs.readFileSync(path).toString();
  return (function (send) {
    vm.runInNewContext(fileContent, { send, loadModule, console });
    // eval(fileContent);
    return send;
  })({});
}
