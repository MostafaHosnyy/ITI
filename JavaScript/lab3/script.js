//task1

document.getElementById("task1").addEventListener("click", function() {
    var values =[]
    var sum =0;
    var multi =1;
    for (var index = 0; index < 3; index++) {
       var value = Number(prompt("Please Enter Number for Operations"))
       values.push(value)
    }
    for (var index = 0; index < values.length; index++) {
        sum += values[index]
        multi *= values[index]
     }
     dividing = values[0]/values[1]/values[2]
     document.write("<h2>Sum of the 3 Values : "
        +values[0]+"+"+values[1]+"+"+values[2]+" ="+sum+"</h2> </br>")
     document.write("<h2>Multiplication of the 3 Values : "
        +values[0]+"*"+values[1]+"* :"+values[2]+" ="+multi+"</h2> </br>")
     document.write("<h2>dividing of the 3 Values : "
        +values[0]+"/"+values[1]+"/"+values[2]+" ="+dividing+"</h2> </br>")
})

// task2

document.getElementById("task2").addEventListener("click", function() {

var myarray = [];

var num;
for (var i = 0; i < 5; i++) {
  num = prompt("Please Enter Number for sorting " + (i + 1));
  myarray.push(num);
}
document.write("You've entered the values of : " +myarray +"<br>");
document.write("Your values after being sorted descending : "
    + myarray.sort(function (a, b) {return b - a;}),
);
document.write("<br>")
document.write( "Your values after being sorted ascending : "
    +myarray.sort(function (a, b) {return a - b; }),
);
})

// task3

document.getElementById("task3").addEventListener("click", function() {

function circle(rad) {return 3.14 * rad * rad;}
  
function sqRoot(area) {return Math.sqrt(area);}
  
function cosAng(angle) {var x = Math.cos((angle * Math.PI) / 180); return x.toFixed(2);}
  
  var reqCircle = prompt("What is the value of your circles radius");
  alert("Total area of the circle is " +circle(reqCircle));
  
  var reqSquare = prompt("What is the value of you want to calc its square root");
  alert("Square root of " + reqSquare + " is " +sqRoot(reqSquare));
  
  var reqAngle = prompt("What is the angle you want to calc its cos value");
  document.write("cos " + reqAngle + "&deg; is " +cosAng(reqAngle));
})