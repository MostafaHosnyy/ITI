document.getElementById("Name").innerHTML = "Hi: "+GetCookie('name') +"</span> and you are visited site " + add();
document.getElementById("Age").innerHTML = "Your Age: "+GetCookie('age');
// document.getElementById("Gender").innerHTML = "Gender: "+GetCookie("gender");
// document.getElementById("colorName").innerHTML = "colorName: "+GetCookie("color");

if(GetCookie("color")=="red"){
document.getElementById("Name").style.color="red"
}
if(GetCookie("color")=="green"){
    document.getElementById("Name").style.color="green"
    }
    if(GetCookie("color")=="blue"){
        document.getElementById("Name").style.color="blue"
        }
var img =document.getElementById("img");
if(GetCookie("gender") == "Male"){
    img.src='../Images/M.jpg' ;
   
} else{
    img.src='../Images/F.jpg' ;

    }




