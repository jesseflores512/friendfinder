
var path = require("path");
var friends = require("../app/data/friends.js");

module.exports = function(app){

  app.get("/api/people", function(req, res){
        res.json(friends);
  })

  app.post("/api/people", function(req, res){
      var newUser = req.body
       friends.push(newUser);
  });
};
