import { EventEmitter,errorMonitor } from "node:events";

const myEmitter = new EventEmitter();


myEmitter.on("error", err => {
	console.log(err);
});
myEmitter.on("myEvent", () => {
	console.log("Sneeze event has been detected");
}); //using an arrow function disables the use of 'this' as a reference to the emitter


myEmitter.on("myEvent", () => {
	setImmediate(() => console.log("This will be asynchronous"));
});

myEmitter.emit("error", new Error("whoops!"));
myEmitter.emit("myEvent");

//const myEmitter2 = new EventEmitter();
/* myEmitter2.on("myEvent", function (a, b) {
	console.log(a, b, this);}); */
//myEmitter2.emit("myEvent",'uno','dos')
