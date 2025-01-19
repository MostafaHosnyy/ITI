//task1
document.getElementById("task1").addEventListener("click", function(){
  var str=prompt("please Enter your text")
  var strCounts = str.split('').length;
  alert("Number of Letters "+strCounts);
});

//task2
document.getElementById("task2").addEventListener("click", function(){
var word =prompt("Please Enter your Text");
var letters = word.split("");
var revLetters=letters.reverse();
var revWordds= revLetters.join("");
if(word == revWordds){
    alert("Are Palindrome");
}else{
    alert("Is Not a Palindrome");    
}
});

//task3
document.getElementById("task3").addEventListener("click", function(){
var str=prompt("Please Enter your Sentence");
var strOfsentence = str.split(' ');
var sortedStr = strOfsentence.sort(
    (strA,strB)=>{
        return strB.length-strA.length;
    });

alert(sortedStr[0]);

});

//task4
document.getElementById("task4").addEventListener("click", getuserName);

//name
function isuserNameValid(username) {
  regExusernme = /^[a-zA-Z]/;
  return regExusernme.test(username);
}

//phone number
function isPhoneNumberValid(phoneNumber) {
    regPhNumber =/^(\+02){1}[0-9]{8}$/;
    return regPhNumber.test(phoneNumber);
  }

//mobile number
function isMobileNumberValid(mobileNumber) {
    regMoNumber =/[0-9]/;
    return regMoNumber.test(mobileNumber);
  }

//email
function isEmailValid(email) {
  regEmail =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(.com)$/i;
  return regEmail.test(email);
}

function getuserName() {
  var username = prompt("please enter your name");
  if (!isuserNameValid(username)) {
    alert(username + "Please try again");
    getuserName();
  } else {
    document.write("<h3>Welcome Dear guest "+username+"</h3>");
    getPhoneNumber();
  }
}

function getPhoneNumber() {
    var phoneNumber = prompt("Please enter your phone Number");
    if (!isPhoneNumberValid(phoneNumber)) {
      alert(phoneNumber + "Please try again");
      getPhoneNumber();
    } else {
       document.write("<h3>Your Phone Number: "+phoneNumber+"</h3>");
        getMobileNumber();
    }
  }
  function getMobileNumber() {
    var mobileNumber = prompt("Please enter your Mobile Number");
    if (!isMobileNumberValid(mobileNumber)) {
      alert(mobileNumber + "Please try again");
      getMobileNumber();
    } else {
       document.write("<h3>Your Mobile Number: "+mobileNumber+"</h3>");
        getEmail();
    }
  }
function getEmail() {
    var email = prompt("Please enter your email");
    if (!isEmailValid(email)) {
      alert(email + "Please try again");
      getEmail();
    } else {
       document.write("<h3>Your Email: "+email+"</h3>");
      console.log("Valid info");
      getColor()
    }
  }


  function getColor(){

    fcCol =prompt("What color would you like");
    document.body.style.color= fcCol;

  }