// Function :: a block of code that fulfil a specific task
// hoisting :: it is the process of moving fn declaration to top of the file, done automatically by JS engine(V8)

// console.log("Kya hua");

// fn declaration
function run() {
    console.log("Running");

}

// function call or invoke
// run();


// Named fn assignment
let anshu = function walk() {
    console.log("Walking");

}
// anonymous fn assignment
let anshu2 = function () {
    console.log("Walking");

}
anshu();
anshu2();
let ips = anshu;
ips();


let x = 10;
x = "India";
console.log(x);

function sum(a, b) {
    let total = 0;
    for (let value of arguments) {
        total = total + value;
    }
    return total;
}
// console.log(sum(1, 2));
// console.log(sum(1));
// console.log(sum());
// let ans = console.log(sum(1, 2, 3, 4, 10));
// console.log(ans);

// Rest Operator
function sum(...args) {
    console.log(args);

}
// sum(1,2,3,4,5);


// Default Parameter
// after r=2, it is compulsory to assign value
function si(p, r = 2, t) {
    return (p * r * t) / 100;
}
// console.log(si(10, 50, 50));


// getter, setter
let person = {
    fName: "Narendra",
    lName: "Modi",

    get fullName() {
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value) {
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};
// console.log(person);
// console.log(fullName());
console.log(person.fullName());







