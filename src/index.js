const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const { engine } = require("express-handlebars");
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
console.log(__dirname);

// Routes init
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
