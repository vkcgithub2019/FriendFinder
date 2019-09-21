
//tallying the scores and determining the difference to find the best match
var friends = require("../data/friends");

module.exports = function(app) {

  // Return all friends found in friends.js as JSON

  app.get("/api/friends", function(req, res) {

    res.json(friends);

  });

  app.post("/api/friends", function(req, res) {

    console.log(req.body.scores);

    // Receive user details (name, photo, scores)

    var user = req.body;

    // parseInt for scores

    for(var i = 0; i < user.scores.length; i++) {

      user.scores[i] = parseInt(user.scores[i]);

    }

    // default friend match is the first friend but result will be whoever has the minimum difference in scores

    var bestFriendIndex = 0;

    var minimumDifference = 40;

    // the comparison loop and 
    
    for(var i = 0; i < friends.length; i++) {
    // initialize with zero difference
      var totalDifference = 0;
    //   compare the user and the ith friend scores, one set at a time
      for(var j = 0; j < friends[i].scores.length; j++) {
    //no negative value allowed, use absolute value
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
    //  whatever the difference is, add to the total difference 
        totalDifference += difference;

      }



      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons

      if(totalDifference < minimumDifference) {

        bestFriendIndex = i;

        minimumDifference = totalDifference;

      }

    }



    // the new user is added to friend array

    friends.push(user);



    // display the best friend match

    res.json(friends[bestFriendIndex]);

  });

};