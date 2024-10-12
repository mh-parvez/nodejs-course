class MyEventEmitter {
  constructor() {
    this._events = {};
  }

  on(eventName, handler) {
    if (this._events[eventName]) {
      this._events[eventName].push(handler);
    } else {
      this._events[eventName] = [handler];
    }
  }

  emit(eventName, ...args) {
    this._events[eventName]?.forEach((event) => {
      event(...args);
    });
  }
}

const emitter = new MyEventEmitter();

emitter.on("x", () => {
  console.log("Emitted event x 1");
});

emitter.on("x", () => {
  console.log("Emitted event x 2");
});

emitter.on("y", (a, b, c) => {
  console.log("Emitted event y");
  console.log(a, b, c);
});

emitter.emit("y", 1, 2, 6);
