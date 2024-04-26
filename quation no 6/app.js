document.write(
  "<h6>This if/ else statement dose not work. Try to fix it: [ var greeting; ] [ var hour = 13; ]<br> if(hour < 18 ) {greeting = 'Good day'; else greeting = 'Good evebing';} </h6>"
);

var greetingOne = "Good day";
var greetingTwo = "Good evening";
var inputHour = prompt("Enter Hour");

var hour = 13;
if (hour < 18) {
  document.write("<h6>" + greetingOne + "</h6>");
} else {
  document.write("<h6>" + greetingTwo + "</h6>");
}
