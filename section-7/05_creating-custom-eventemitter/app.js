import EventEmitter from "events";

const emitter = new EventEmitter();

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

emitter.once("abc", (a, b, c) => {
  console.log(a, b, c);
});

emitter.emit("abc", 1, 2, 3);