//alert("Don't make noise");
console.log("Make yourself confortable");
console.log("My name is Priya Shrestha");
console.log(document.getElementById("Paragraph").innerHTML)
document.getElementById("Paragraph").innerHTML="Hello, Beautiful People!!!!";
//document.getElementById("Paragraph").style.color="brown";
//document.getElementById("Paragraph").style.backgroundColor="acqua";
document.getElementById("Paragraph").style.cssText="color:brown; background: pink";

var a = 1;
var b ="Priya";

console.log(typeof a);
console.log(typeof b);
console.log(typeof document);

var age = 10;
age = 30;
let age1 = 20;
age1 = 10;
const age3 = 30;
//age3 = 40;

console.log(age);
console.log(age1);
console.log(age3);

console.log(prompt("Enter your name:"));

document.getElementById("message").innerHTML="Hello my name is :" +b;