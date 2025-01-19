document.getElementById("Name").innerHTML = "Welcome "+GetCookie('name');
document.getElementById("Age").innerHTML = "Age: "+GetCookie('age');
document.getElementById("Gender").innerHTML = "Gender: "+GetCookie("gender");
var img =document.getElementById("img");
if(GetCookie("gender") == "Female"){
    img.src='../Images/F.jpg' ;
}


