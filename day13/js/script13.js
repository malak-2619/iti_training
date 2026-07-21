document.addEventListener(`DOMContentLoaded`, function (e) {
    console.log(`HTML Loaded`);
});

let namein = document.querySelector("#name");
let agein = document.querySelector("#age");
let jobin = document.querySelector("#job");
let button1 = document.querySelector("button");

let user = {
    name: undefined,
    age: undefined,
    job: undefined,
    printinfo: function () {
        console.table(Object.entries(user));
    }
}

button1.addEventListener(`click`,
    function () {
        let n = document.getElementById(`name`).value.trim();
        let a = document.getElementById(`age`).value;
        let j = document.getElementById(`job`).value.trim();
        if (n === "" || a === "" || j === "") {
            alert("please fill all the fields");
        }
        else {
            if (a < 18) {
                alert("You are under age");
            }
            else {
                alert("Registeration Completed");
                console.log(`Name: ${n}`);
                console.log(`Age: ${a}`);
                console.log(`Job: ${j}`);
                // user.name=n;
                // user.job=j;
                // user.age=a;
                // user.printinfo();
            }
        }

    }

);