const Express = require("express");
require("dotenv").config();
const App = Express();
const BodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

//PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db");
const db = new Pool(dbParams);
db.connect();

const users = require("./routes/users");
const items = require("./routes/items");

App.use("/api/users", users(db));
App.use("/api/items", items(db));
App.use("/api/orders", orders(db));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});

