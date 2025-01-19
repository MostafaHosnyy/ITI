

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
    var colors= document.getElementsByName('color').forEach(radio =>{
        if(radio.checked){
            console.log(("color", radio.value));
            createCookie("color", radio.value);
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
    createCookie("colors",colors.value)





}















// console.log(obj1);



// var alaa = {'Name':'Aly'}
// var obj2 = new Object({'Name':'Aly'});
// console.log(alaa);
// console.log(obj2);