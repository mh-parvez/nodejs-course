import { createWriteStream } from "fs";
import { spawn } from "child_process";

const childProcess = spawn("node", ["childApp.js"]);

const writeStream = createWriteStream("abc.mp4");

childProcess.stdout.pipe(writeStream)
