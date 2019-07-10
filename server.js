// mongoose
const mongoose = require("mongoose");
// get database from mlab
const { database } = require("./configs/database");
// connect to server mlab
mongoose.connect(database, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to server");
});
// express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;
// OrbitingBody
const { OrbitingBody } = require("./models/OrbitingBody");
// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// get all modifiers
app.get("/api/modifiers", async (req, res) => {
  try {
    const orbitingBody = await OrbitingBody.find();
    res.send(orbitingBody);
  } catch (error) {
    console.log(error);
  }
});
// post
app.post("/api/modifiers/add", async (req, res) => {
  try {
    const { orbitingBodys } = req.body;
    const arrOrbitingBody = JSON.parse(orbitingBodys);
    if (Array.isArray(arrOrbitingBody) && arrOrbitingBody.length > 0) {
      for (let item of arrOrbitingBody) {
        const name = item.trim();
        const slug = name.toLowerCase();
        // check in database if slug exists
        const orbitingBody = await OrbitingBody.findOne({ slug });
        if (!orbitingBody) {
          const newOrbitingBody = new OrbitingBody({ name, slug });
          const result = await newOrbitingBody.save();
          console.log(result);
        }
      }
    }
    res.send("OK");
  } catch (error) {
    console.log(error);
  }
});
//
app.listen(port, () => console.log(`Listening on port ${port}`));
