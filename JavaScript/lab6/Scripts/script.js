// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.getElementsByName

// document.querySelector
// document.querySelectorAll

// console.log(document.forms)//[]
// console.log(document.forms[0])//[]
// console.log(document.forms['f1'])//[]

// function clickMe() {
//     document.getElementById("name").value = "Clicked"
// }

// var flag = 0
// function keyDown(){
//     if(flag==0){
//         document.getElementById("name").value = "";
//         flag = 1;
//     }
// }

// function keyDown(){
//     console.log("Down")
// }
// function keyUp(){
//     console.log("Up")
// }
// function changeNow(){
//     console.log("Changed")
// }
// function inputChangeOnSpot(){
//     console.log("Input Changed Now")
// }

// function startNow() {
//   /** Session Cookie */
//   document.cookie = "userName=Ahmed";
//   document.cookie = "userAge=20";

//   /** Persistant Cookie */
//   //Create New Date
//   var today = new Date();
//   today.setMonth(today.getMonth() + 2);
//   document.cookie = "userPhone=01512345678;expires=" + today;
// }


// function addCookiesNow(){
//     var userName = document.getElementById("userName").value;
//     var userAge = document.getElementById("userAge").value;
//     var userEmail = document.getElementById("userEmail").value;

//     //session cookie
//     document.cookie = "name="+userName;
//     document.cookie = "age="+userAge;
//     // createCookie("name", userName);

//     //persistant Cookie
//     var today = new Date();
//     today.setMonth(today.getMonth() + 2);
//     document.cookie = "email="+userEmail+";expires="+today;
//     // createCookie("email", userEmail, 2);
// }

function addCookiesNow(){
    var userName = document.getElementById("userName").value;
    var userAge = document.getElementById("userAge").value;
    
    // var gender = document.getElementById("gender").value;

var gender= document.getElementsByName('gender').forEach(radio =>{
        if(radio.checked){
            console.log(("gender", radio.value));
            createCookie("gender", radio.value);
        }
    })

    // if(radio.value=male){
    //     alert("yes")
    // }
    // console.log(gender);
    // for(var i=0;i<gender.length;i++){
    //     if(gender[i].checked)
    //         console.log(gender[i].value);
            
    // }
    
   createCookie("name", userName);
    createCookie("age", userAge);
    createCookie("gender",gender.value)




}















// console.log(obj1);



// var alaa = {'Name':'Aly'}
// var obj2 = new Object({'Name':'Aly'});
// console.log(alaa);
// console.log(obj2);