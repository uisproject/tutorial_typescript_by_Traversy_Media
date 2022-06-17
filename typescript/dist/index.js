"use strict";
// Data type
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "hello";
id = 5;
console.log("ID", id);
// Array
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, true, "hello"];
// Tuple
let person = [1, "brad", true]; // so the value must perfectly match the rules must only consist of three values and with matched data type
// Tuple Array
let employee;
employee = [
    [1, "Joe"],
    [2, "haha"],
]; // use this kind of tuple if you have specific data more than 1
// Union
let pid = 22; // gives you optional data type could be string or number
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "up";
    Direction1["Down"] = "down";
    Direction1["Left"] = "left";
    Direction1["Right"] = "right";
})(Direction1 || (Direction1 = {})); // those data have value of 0 - 3 by default, depending how many data it contains, but you also can assign in manually
console.log(Direction1.Up);
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid; // explicitly tell cid that it's number data type
// let customerId = cid as number; // you also can do this alternatively
// function
function addNum(x, y) {
    // it means it has number type value of x and y and the function itself is number
    return x + y;
}
function log(message) {
    // the parameter (message) has the data type of either string or number
    console.log(message);
}
const user1 = {
    id: 1,
    name: "lala",
};
const p1 = 1;
const add = (x, y) => x + y;
// Classes
class Person {
    constructor(id, name, phoneNumber) {
        (this.id = id), (this.name = name), (this.phoneNumber = phoneNumber);
        console.log("hi");
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "haha", 123); // this will run constructor
console.log(brad.register());
class Employee extends Person {
    constructor(id, name, phoneNumber, position) {
        super(id, name, phoneNumber);
        this.position = position;
    }
}
const emp = new Employee(1, "Jack", 187, "manager");
console.log(emp.position);
// Generics
function getArray(items) {
    return [...items];
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "john", "jill"]);
strArray.push("1");
