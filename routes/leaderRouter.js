const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res, next) => {
    res.end("Will send all the leaders to you");
  })

  .post((req, res, next) => {
    res.end(
      "Will add the leader: " +
        req.body.name +
        " with details :" +
        req.body.description
    );
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation not supported on /leaders" + req.body.description);
  })

  .delete((req, res, next) => {
    res.end("Deleting all the /leaders");
  });

leaderRouter
  .route("/:leaderId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res, next) => {
    res.end("Will send all the leader: " + req.params.leaderId + " to you");
  })

  .post((req, res, next) => {
    req.statusCode = 403;
    res.end("POST operation not support" + req.params.leaderId);
  })

  .put((req, res, next) => {
    res.write("Updating the leaderId: " + req.params.leaderId + "\n");
    res.end(
      "Will update the dish: " +
        req.body.name +
        "and description: " +
        req.body.description
    );
  })

  .delete((req, res, next) => {
    res.end("Deleting the leaderId: " + req.params.leaderId);
  });

module.exports = leaderRouter;
