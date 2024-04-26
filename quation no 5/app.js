document.write(
  "<h5>Write a program that a Store Correct Password in a JavaScript  Variable. <br>Asks user to enter his/her password Valide the two passwords.<br>Check if user has entered password If not then give message <br>[ Please Enter your password ]<br>Check if both password are same. If they are same, show message<br>[ Correct! The password you Entered matches the original password ].<br>Show [ Incorrect password  ] otherwise</h5>"
);

var password;
var password = prompt("Enter Your  Password");
var passwordConfirm = prompt("Confirm Password ");
if (password != passwordConfirm) {
  alert("Incorrect Password!");
} else if (password === passwordConfirm) {
  alert(
    "The password you entered is Correct! it's Matches the original password"
  );
} else {
  alert("Incorrect Password");
}
