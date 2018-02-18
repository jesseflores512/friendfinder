
var path = require("path");
var friends = require("../app/data/friends.js");

module.exports = function(app){

  app.get("/api/people", function(req, res){
        res.json(friends);
  })

  app.post("/api/people", function(req, res){

      var newUser = req.body

      var userResponses = newUser.scores;
      var matchName = '';
      var matchImg = '';
      var totalDiffernce = 10000;

      for (var i = 0; i < friends.length; i++) {

      var diff = 0;
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friends[i].scores[j] - userResponses[j]);
        // var match = Math.min.apply(Math, diff)
      }

      if (diff < totalDiffernce) {

        totalDiffernce = diff;
        matchName = friends[i].name;
        matchImg = friends[i].photo;

      }
    }
    friends.push(newUser);
    res.json({status: 'OK', matchName: matchName, matchImg: matchImg});
  });
};
