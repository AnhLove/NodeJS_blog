const newsRouter = require("./news");
const meRouter = require("./me");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
function route(app) {
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);

  app.get("/trang-chu", (req, res) => {
    return res.send(`<h1 style="color:red";>Hello World!</h1>`);
  });
}

module.exports = route;
