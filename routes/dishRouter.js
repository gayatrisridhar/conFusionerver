const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router(); //creates dish router as an express router

dishRouter.use(bodyParser.json());

dishRouter
  .route("/") //route takes the end point as a parameter
  //all the verbs will be chained into the end point(instead of writing individually get put post and all)
  //mounting
  .all((req, res, next) => {
    //for all verbs
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next(); //it will continue to look for additional sources that matches /dishes for all the verbs
  })

  .get((req, res, next) => {
    res.end("Will send all the dishes to you");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the dish: " +
        req.body.name +
        " with details:" +
        req.body.description
    );
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation not supported on /dishes" + req.body.description);
  })

  .delete((req, res, next) => {
    res.end("Deleting all the /dishes");
  });

dishRouter
  .route("/:dishId") //route takes the end point as a parameter
  //all the verbs will be chained into the end point(instead of writing individually get put post and all)
  //mounting
  .all((req, res, next) => {
    //for all verbs
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next(); //it will continue to look for additional sources that matches /dishes for all the verbs
  })

  .get((req, res, next) => {
    res.end(
      "Will send all the details of dish:" + req.params.dishId + " to you"
    );
  })

  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /dishes/" + req.params.dishId);
  })

  .put((req, res, next) => {
    res.write("Updating the dish " + req, params.dishId + "\n"); //it is used to add a line to the reply message
    res.end(
      "Will update the dish:" +
        req.body.name +
        "with details:" +
        req.params.details
    );
  })

  .delete((req, res, next) => {
    res.end("Deleting dish" + req.params.dishId);
  });

module.exports = dishRouter;

//middlewares are functions that handle requests in the above case (req,res,next) is the middleware's params
//next stores the application's next req-res cycle
