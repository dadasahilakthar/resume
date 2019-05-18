console.log("displaying on console");
// document.write("displaying on webpage");
// window.alert("this is is an alert");
// // alert("this is also an alert");
// // window.reload(); reloads a page
// prompt("enter prompt in alert");// takes text into allert;
// var cards=document.getElementById("#cards");
var cards=document.querySelector('#cards');
var data=document.createElement("div");
data.classList.add("data");
cards.appendChild(data);
var image=document.createElement('img');
image.src="img/first.png";
data.appendChild(image);
var h1=document.createElement('h1');
h1.textcontent="capitan";
data.appendChild(h1);

// var data=document.createElement("div");
// cards.add
