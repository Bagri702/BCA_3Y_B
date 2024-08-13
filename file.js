// let a=10;
// document.write(a, "<br>")
// let b=5;
// document.write(b,"<br>")
// let sum = a+b;
// document.write(sum,"<br>")
// let difference =a-b;
// document.write(difference,"<br>")
// let product = a*b;
// document.write(product,"<br>")
// let quotient = a/b;
// document.write(quotient,"<br>")
// let remainder = a%b;
// document.write(remainder,"<br>")
// let isEqual = (a==b);
// document.write(isEqual,"<br>")
// let isNotEqual = (a!=b);
// document.write(isNotEqual,"<br>")
// let isGreater=(a>b);
// document.write(isGreater,"<br>")
// let logicalAnd = (a>b && b<10);
// document.write(logicalAnd,"<br>")
// let fname = "John";
// document.write("hello",fname,"<br>")
// let age =30;
// document.write("Age",age,"<br>")
// let isStudent=true;
// document.write(`Student - ${isStudent ? "yes" :"no"} <br>`)
// let emptyValue ="I am Computer Application Student";
// document.write(`null value : ${emptyValue || "write something"} <br>`)
// let unintialized;
// document.write(!unintialized && "Fill the detail completely")
//let age = prompt("Enter your Age")
// if (age>17){
//     document.write("Eligible for Vote")
// } else{
//     document.close("Not Eligible for vote")
// }
//document.write(age >17 ?"Eligible for vote": "Not Eligible for vote")
// let num=prompt("Enter the number");
// if(num>0){
//     console.log("Number is Positive")
// } else if(num<0){
//     console.log("Number is Negative")
// } else{
//     console.log("Number is Zero")
// }
// let fruit=prompt("Enter the fruit")
// switch(fruit){
//     case "apple":
//         console.log("You Choose an apple");
//         break;
//     case "banana":
//         console.log("You Choose Banana");
//         break;
//     default:
//         console.log("You choose random");  
// }
// let day =function(){
//     document.write("Ram Ram Bhai Sarayanei<br>")
// }
// day()
// day()
// let msg = ()=> {
//     document.write("Happy New Year<br>")
// }
// msg()
// //iife

// (function(){
//     document.write("This is My laptop<br>")
// }());
function Morning(){
    document.getElementById("demo").innerHTML="Good Morning";
    document.getElementById("mode").style.background="skyblue";
    document.getElementById("mode").style.color="Black";
}
Morning()
function Afternoon(){
    document.getElementById("demo").innerHTML="Good Afternoon";
    document.getElementById("mode").style.background="red";
    document.getElementById("mode").style.color="Black";
}    
Afternoon()
function Evening(){
    document.getElementById("demo").innerHTML="Good Evening";
    document.getElementById("mode").style.background="goldenrod";
    document.getElementById("mode").style.color="Black";
}
Evening()
function Night(){
    document.getElementById("demo").innerHTML="Good Night";
    document.getElementById("mode").style.background="black";
    document.getElementById("mode").style.color="white";
}
Night()
