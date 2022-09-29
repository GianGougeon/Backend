const { exec } = require("child_process");

exec("echo Hola", (err, stdout, stderr) => {
  if (err) {
    console.log("error: ", err);
  }

  if (stderr) {
    console.log("error: ", stderr);
  }

  console.log("stdout", stdout);
});
