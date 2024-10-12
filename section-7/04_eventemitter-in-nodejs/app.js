import EventEmitter from "events";

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.setMaxListeners(2);

emitter.on("x", () => {
  console.log("x event fired");
});

emitter.on("y", () => {
  console.log("second y event fired");
});

emitter.on("y", () => {
  console.log("first y event fired");
});

emitter.once("abc", () => {
  console.log("abc event fired");
});

emitter.emit("abc");
