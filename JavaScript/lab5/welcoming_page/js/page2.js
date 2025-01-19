var queries = location.search.replace("?","");
queries = queries.split("&");
// console.log(queries);

var infoCop = [];
for (let i in queries) {
  infoCop[i] = queries[i].split("=");
}
// console.log(infoCop);

var info = [];
for (var i = 0; i < infoCop.length; i++) {
  info[infoCop[i][0]] = infoCop[i][1];
}
// console.log(info);

document.querySelector(".username").innerHTML =
  "<h2>welcome, " + info.username + " & Title " +info.title+ " </h2>";
  
// console.log(info.username);

document.querySelector(".info").innerHTML =
  "<h3> Address: " +info.address +"<br>Gender: " +info.gender +
  "<br> Email: " +info.email +"<br>Mobile: " + info.phone +"</h3>";



// Chek of User Agent
if (navigator.userAgent.indexOf("Chrome") > -1) {
  console.log("Welcome in Google Chrome");
} else {
  console.log("We Recommend you to use Google Chrome");
}