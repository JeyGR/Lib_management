const express = require("express");
const routes = express.Router();
const {
  getAll,
  searchOne,
  getFirst,
  getSecond,
  getThird,
  getFourth,
} = require("./controllers");

routes.route("/tasks").get(getAll);
routes.route("/tasks/1").get(getFirst);
routes.route("/tasks/2").get(getSecond);
routes.route("/tasks/3").get(getThird);
routes.route("/tasks/4").get(getFourth);

routes.route("/tasks/search/:author").get(searchOne);

module.exports = routes;
