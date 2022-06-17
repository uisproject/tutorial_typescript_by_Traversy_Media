// Data type

let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "hello";

id = 5;
console.log("ID", id);

// Array
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, 2, true, "hello"];

// Tuple
let person: [number, string, boolean] = [1, "brad", true]; // so the value must perfectly match the rules must only consist of three values and with matched data type

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Joe"],
  [2, "haha"],
]; // use this kind of tuple if you have specific data more than 1

// Union
let pid: string | number = 22; // gives you optional data type could be string or number

// Enum
enum Direction1 {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
} // those data have value of 0 - 3 by default, depending how many data it contains, but you also can assign in manually

console.log(Direction1.Up);

// Objects
// const user: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "John",
// };

// or you can just do it like to be more cleaner
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid; // explicitly tell cid that it's number data type
// let customerId = cid as number; // you also can do this alternatively

// function
function addNum(x: number, y: number): number {
  // it means it has number type value of x and y and the function itself is number
  return x + y;
}

function log(message: string | number) {
  // the parameter (message) has the data type of either string or number
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number; // you can't overwrite the id, only the first time inputting with the UserInterface
  name: string;
  age?: number; // this will become optional
}

const user1: UserInterface = {
  id: 1,
  name: "lala",
};

// interface Point = number | string;       // you can't do that with interface
type Point = number | string;
const p1: Point = 1;

interface MathFunc {
  // creating interface with function
  (x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  //  you can put access modifier, by default it's public and there are protected and private
  //  public means you can access the data outside of the class
  //  protected means you can access the data either from class or extended class version
  //  private means you can only access the data by the class only, you can do that by using setter getter

  id: number;
  name: string;
  private phoneNumber: number; // so if you want to put access modifier you needn't put into interface

  constructor(id: number, name: string, phoneNumber: number) {
    (this.id = id), (this.name = name), (this.phoneNumber = phoneNumber);
    console.log("hi");
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "haha", 123); // this will run constructor

console.log(brad.register());

interface EmployeeInterface {
  position: string;
}

class Employee extends Person implements EmployeeInterface {
  position: string;

  constructor(id: number, name: string, phoneNumber: number, position: string) {
    super(id, name, phoneNumber);

    this.position = position;
  }
}

const emp = new Employee(1, "Jack", 187, "manager");
console.log(emp.position);

// Generics

function getArray<T>(items: T[]): T[] {
  return [...items];
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "john", "jill"]);

strArray.push("1");
