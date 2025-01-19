//  task 1
document.getElementById("task1").addEventListener("click" ,function(){

    var mes = prompt("Please Enter Your message");
    // var mes = "";
    for( i = 1; i < 7; i++) {
        document.write("<h"+i+ ">your message is "+mes+"</h"+i+">");
        console.log(mes)
    
    }
    })


// task2 

document.getElementById("task2").addEventListener("click" ,function(){
    var sum = 0;
    var num;
    do{
      num =parseInt(prompt('Please Enter Your number'));
       if (num != 200 || 0) {
        sum += num;
       alert(sum);
       }}
    while(num<200){
        alert('Not valid');
     }
})

