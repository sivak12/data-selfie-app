const express = require("express");
const Datastore = require("nedb");

const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database.db");
database.loadDatabase();
// database.insert({ name: "siva", status: ':rainbow' });
// database.insert({ name: "sam", status: ':happy' });


app.post("/api", (request, response) => {
  console.log(request.body);
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json({
    status: "success.!",
    timestamp: timestamp,
    latitude: data.lat,
    longitude: data.lon,
  });
});
 ///TODO:
 /***** 
 09/03/22
 Add one more field in the UI and save it to the database
 *******/