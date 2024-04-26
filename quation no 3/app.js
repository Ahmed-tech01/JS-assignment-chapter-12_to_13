document.write(
  "<h3> Write a program that takes input a number from user and state wether the number is Positive Or Negative Or Zero. </h3>"
);

alert(
  "Enter a Number and I'll tell you whether it's a Negative or Positive number Or Zero. "
);

var inputNum = +prompt("Enter A  Number : ");

if (inputNum < 0) {
  document.write("<h3>" + inputNum + " is a Negative Number </h3>");
} else if (inputNum == 0) {
  document.write("<h3> " + inputNum + "</h3>");
} else if (inputNum > 0) {
  document.write("<h3>" + inputNum + " is  a Positive Number</h3>");
}
