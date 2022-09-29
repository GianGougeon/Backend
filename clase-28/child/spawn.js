const { spawn } = require("child_process");

const child = spawn("echo", ["hola"]);

child.stdout.on("data", (data) => {
  console.log(`data ${data}`);
});

child.stderr.on("data", (data) => {
  console.log(`error ${data}`);
});

child.on("error", (err) => {
  console.log(err);
});

child.on("close", (code) => {
  console.log(code);
});
