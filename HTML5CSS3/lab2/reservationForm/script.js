function SaveData(){
    var userName = document.getElementById("name").value;
    var userAge = document.getElementById("age").value;
    var userEmail = document.getElementById("email").value;
    let user = {name:userName, age:userAge, email:userEmail};
    localStorage.setItem("userData",JSON.stringify(user))
}