const express = require("express");
const router = require("./routes");

const app = express();

//middleware
app.use("/static", express.static(__dirname + "/public"));
app.use(express.json());
app.use("/api", router);

app.listen(8080, () => {
  console.log("Server up");
});
