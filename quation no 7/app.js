document.write(
  "<h1> Write a program that takes  time as input from user is 24 Hours Clock fromat like ; 1900 = 7pm. Implement the following  case using if  else and else if statement </h1>"
);

alert(
  "Enter time like: if time is 1pm, Enter it like = 1300, 5pm = 1700 Whatever the time is enters like this I will give you the response according to your time "
);

var inputTime = prompt("Enter Your Time");
// 1900 = 7pm
// 1200 = 12pm
// 1700 = 5pm
// 2100 = 9pm
// 2359 = 11:59pm
if (inputTime >= 0 && inputTime < 1200) {
  alert("Good Morning!");
} else if (inputTime >= 1200 && inputTime < 1700) {
  alert("Good Afternoon!");
} else if (inputTime >= 1700 && inputTime < 2100) {
  alert("Good Evening");
} else if (inputTime >= 2100 && inputTime < 2300) {
  alert("Good Night");
} else {
  alert("Invalid Time Input");
}
