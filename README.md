Friend Finder-Node and Express Servers

This friend finder application works like a dating app. There is a home page with links to a survey page where the user can fill out a compatibility survey which consisted of 10 questions with 5 drop down answer choices. There is also a link to the API Friends list and to the author's Github page.

The application's data is saved inside of app/data/friends.js as an array of objects. Each of these objects has the name of friend, a link to his/her photo, and his/her scores (1 - 5). When a new user completed the survey his or her data is also updated to the friends list. 

 When the user finished answering all fields in the survey and click submit, the data will be matched against the existing list of potential friends in the friends array. The user's results is converted into a simple array of numbers, 10 numbers corresponding to the total number of questions and answers (from 1 to 5). The result of the current user's scores is compared to other users's, question by question. The differences are added up to calculate the totalDifference. There cannot be a negative result so have to use the absolute value of the differences. The closet match will be the user with the 
 least amount of difference.

 Once the most compatible friend is found, the result is displayed as a modal pop-up. The modal will display both the name and picture of the closest match.

 Finally, the app is deployed in Heroku. 

 Technologies used:Node and Server express, NPM packages: Express, body-parser, path.

 Here is the link to the heroku site: https://protected-everglades-04089.herokuapp.com/
 Here is the link to my Github repositories: https://github.com/vkcgithub2019/FriendFinder
 Here is the link to my portfolio page: https://vkcgithub2019.github.io/Responsive-Portfolio/

