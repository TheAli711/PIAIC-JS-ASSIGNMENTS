var num1 =parseInt(prompt("Enter a number:"))
var num2 = parseInt(prompt("Enter a number:"))
var op = prompt("Enter an operation(+,-,*,/):")
console.log(op)
if (op == "+" ) {
    alert(num1 +" "+ op+" " + num2 +" = "+ (num1+num2))
} else if (op == "-") {
    alert(num1 +" "+ op+" " + num2 +" = "+ (num1-num2))

} else if (op == "*") {
    alert(num1 +" "+ op+" " + num2 +" = "+ (num1*num2))

} else if (op == "/") {
    alert(num1 +" "+ op+" " + num2 +" = "+ (num1/num2))

}

var course1 = parseInt(prompt("Enter course1"));
var course2 = parseInt(prompt("Enter course2"));
var course3 = parseInt(prompt("Enter course3"));
var course4 = parseInt(prompt("Enter course4"));
var course5 = parseInt(prompt("Enter course5"));
var obtmarks = course1+course2+course3+course4+course5;
var totalmarks = 500;
alert("Obtained Marks = " + obtmarks);
alert("Total Marks = " + totalmarks);
alert("Percentage = " + ((obtmarks/totalmarks)*100))