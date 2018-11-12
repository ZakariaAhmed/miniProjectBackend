var express = require('express');
var usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', function(req, res, next) {
  res.send({userName:"Zakaria"});
});

module.exports = usersRouter;
