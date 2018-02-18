
var path = require("path");
var friends = require("../app/data/friends.js");

module.exports = function(app){

  app.get("/api/people", function(req, res){
        res.json(friends);
  })

  app.post("/api/people", function(req, res){
      res.json(friends)
    // var userInput = req.body;
    // var userResponses = userInput.scores;
    // // var userData = req.body;
    // // var userScores = userData.scores;
    // var userScores = req.body.scores;
    // friends.push(userData);
    // res.json(bestMatch);
  });
};
