let data = JSON.parse(localStorage.getItem("userData"));
document.getElementById("name").innerHTML+= data.name;
document.getElementById("email").innerHTML+= data.email;
document.getElementById("age").innerHTML+= data.age;

