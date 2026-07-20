var word="hello"
window.alert(word.toUpperCase());

//--loops-------------------------------------

//for
for (var i = 0; i < 6; i++) {
   console.log(i);
}

//while
var j = 5;
while (j > 0) {
   console.log(j);
   j--;
}

//do-while
var k = 1;
do {
   console.log(k);
   k++;
} while (k < 6);

//--functions----------------------------------

//function declaration
function add(x, y) {
   return x + y;
}

//arrow function
var a = 20;
var b = 30;
const avg = () => { return (add(a, b) / 2); }
console.log(avg());

//self-invoke function (factorial example)
(function (x) {
   var f = 1;
   for (var i = x; i > 0; i--) {
      f *= i;
   }
   console.log(`${x} factorial is: ${f}`);
})(3);

//function expression
var greeting = function () {
   console.log(`hello from console`);
}
greeting();

//--oop-------------------------------------
var employee = {
   fullname: "employee1",
   age: 30,
   gender: "female",
   job: "dev",
   salary: 9000,
   car: {
      model: 2010,
      color:`grey`,
   },
}
console.log(employee.car.color);

var student = {
   name: "student1",
   age: 20,
   grade: undefined,
   Pass: true,
   marks: 70,
   printinfo: function () {
      console.table(Object.entries(student));
   }
}
if (student.marks >= 90) {
   student.grade = `A`;
   student.Pass = true;
}
else if (90 > student.marks && student.marks >= 80) {
   student.grade = `B`;
   student.Pass = true;
}
else if (80 > student.marks && student.marks >= 70) {
   student.grade = `C`;
   student.Pass = true;
}
else if (70 > student.marks && student.marks >= 60) {
   student.grade = `D`;
   student.Pass = true;
}
else {
   student.grade = `F`;
   student.Pass = false;
}
student.printinfo();
