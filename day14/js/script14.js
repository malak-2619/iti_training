/*
part 1--------------------------------------
-choose
1) array جديدة بنفس الطول
2) find()
3) Array جديدة بالعناصر اللي حققت الشرط
4)undefined
5)arrays

pert 2---------------------------------------
-true or false
1)false
2)true
3)true
4)true
5)false

part 3---------------------------------------
-complete
q1) خلي الكود يطبع:
2
4
6
8
`````
const numbers = [1,2,3,4];
        ...
numbers.forEach((num)=>{
    console.log(num * 2);
});


q2) طلع Array فيها الأرقام الأكبر من 20.
```js
const nums = [10,25,5,30,15,40];
                    ------
const result = nums.filter((num)=>{
    return num > 20;
});

console.log(result);
```
q3) هات أول شخص عمره أكبر من 25.

```js
const users = [
    {name:"Ali", age:20},
    {name:"Sara", age:28},
    {name:"Omar", age:30}
];
                   ----
const user = users.find((item)=>{
    return item.age > 25;
});

console.log(user);

q4) حوّل كل الأسماء لـ Uppercase.

const names = ["ali","mona","ahmed"];
                    ----
const result = names.map((name)=>{
    return name.toUpperCase();
});

console.log(result);
*/

//part 4 (code)----------------------------------
"use strict"
const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

for (let index in fruits) {
    console.log(index);
}

fruits.forEach((fruit, index) => { console.log(`${index} -> ${fruit}`) });

//part 5--------------------------------------
//q1
let res = (a, b) => { return a + b };
console.log(res(5, 7));

//q2
const user = {
    name: "Mostafa",
    age: 25
};
let { name, age } = user;
console.log(`hello ${name}`);

//q4
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = [...arr1, ...arr2];
for (let n of result) {
    console.log(n);
}

//part 6-----------------------------------------

const students = [
    { name: "Ali", degree: 70 },
    { name: "Sara", degree: 95 },
    { name: "Ahmed", degree: 40 },
    { name: "Mona", degree: 85 },
    { name: "Omar", degree: 55 }
];

//1
let names = students.map(ob => { return ob.name; });
console.log(names);

//2
let grades = students.filter((stu) => {
    return stu.degree >= 60;
});
console.log(grades);

//3
const higher_grade = students.find((s) => {
    return s.degree > 90;
});
console.log(higher_grade);

//4
students.forEach(s => { console.log(s.name) });

//bonus
const numbers = [5, 10, 15, 20];
let sum = numbers.reduce((pv, cv) => { return pv + cv; },0);
console.log(sum);
