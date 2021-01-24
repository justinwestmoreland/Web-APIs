// this links my highscore.js to my html page and renders the Initials and the Scores that are saved in local storage. 

var highList = document.getElementById("high-list");
var li = document.createElement("li");
// li.textContent = localStorage.getItem("score");
highList.append(li);

li.textContent = JSON.parse(localStorage.getItem("initials"));

highList.append(li);