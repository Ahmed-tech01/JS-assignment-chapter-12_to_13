document.write(
  "<h2> Write a JavaScript program that accept two integers and  <br> display larger. Also show of the two integers are equal or Not . </h2>"
);

alert(" Write two numbers i will show you the larger number ");

var firstNum = prompt("Enter First Number");
var secondNum = prompt("Enter Second Number");
var letter = " ";

if (firstNum > secondNum) {
  document.write("<h2>" + firstNum + " is larger then" + secondNum + "<h2>");
} else if (firstNum >= secondNum) {
  document.write("<h2>" + firstNum + " is equals to" + secondNum + "<h2>");
}
if (secondNum > firstNum) {
  document.write("<h2>" + secondNum + " is larger then " + firstNum + "<h2>");
}

if (firstNum === letter) {
  document.write("<h2> Invalid value use Numbers Only<h2>");
}
 