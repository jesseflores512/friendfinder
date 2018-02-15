
var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app){
  
  app.get("/api/people", function(req, res){
        res.json(friends);
  })
  app.post("/api/people", function(req, res){

    var bestMatch = {
        name: "",
        photo: ""
    }
    // var userData = req.body;
    // var userScores = userData.scores;
    var userScores = req.body.scores;
    friends.push(userData);
    res.json(bestMatch);
  });
}
