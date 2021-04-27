const express = require("express");
const app = express();
const apiRoute = require("./routes/api");

app.use("/api", apiRoute);
app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log(">> server running on port 5000");
});
