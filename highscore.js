// I need to store initials in local storage and attach them to the high scores from the quiz

//render Initials and high scores from local storage to a list item on the high score page

//do your read me page

var highList = document.getElementById("high-list");

var li = document.createElement("li");
// li.textContent = localStorage.getItem("score");
highList.append(li);



li.textContent = JSON.parse(localStorage.getItem("initials"));

// localStorage.getItem("initials", JSON.parse("initials"));
highList.append(li);