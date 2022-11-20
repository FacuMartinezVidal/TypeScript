"use strict";
//INTRODUCCION
// function add(n1: number, n2: number, showResult: boolean, result: string) {
//   const operation = n1 + n2;
//   if (showResult) {
//     console.log(result + operation);
//   } else {
//     return n1 + n2;
//   }
// }
// const number1 = 2;
// const number2 = 4;
// const printResult = true;
// const phrase = "result is";
// const result = add(number1, number2, printResult, phrase);
// console.log(result);
//object type
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Facundo",
//   age: 30,
// };
// const person = {
//   name: "Lautaro",
//   surname: "Acosta",
// };
//array type
// let hobbies: string[];
// hobbies = ["Videojuegos", "Futbol"];
//enum type
// const ADMIN = 0;
// const USER = 1;
// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GENDER = "Femine",
// }
// const person = {
//   role: Role.ADMIN,
// };
// if (person.role === Role.ADMIN) {
//   console.log("is an admin");
// }
//union type and literal type
// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: "as-number" | "as-text"
// ) {
//   if (
//     (typeof input1 === "number" && input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     const result = +input1 + +input2;
//     return result;
//   } else {
//     const result = input1.toString() + input2.toString();
//     return result;
//   }
// }
// const combineAge = combine(20, 32, "as-number");
// console.log(combineAge);
// const combineAgeString = combine("20", "32", "as-text");
// console.log(combineAgeString);
//alias type
// type Combinable = number | string;
// type ConversionDescriptor = "as-number" | "as-text";
// function combine(
//   input1: Combinable,
//   input2: Combinable,
//   resultConversion: ConversionDescriptor
// ) {
//   if (
//     (typeof input1 === "number" && input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     const result = +input1 + +input2;
//     return result;
//   } else {
//     const result = input1.toString() + input2.toString();
//     return result;
//   }
// }
// const combineAge = combine(20, 32, "as-number");
// console.log(combineAge);
// const combineAgeString = combine("20", "32", "as-text");
// console.log(combineAgeString);
// type User = { name: string; age: number };
// const u1: User = { name: "Max", age: 30 }; // this works!
//function (return type, function as type)
// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }
// function printResult(num: number): void {
//doesn't return anything, thats why, we put the return is void
//   console.log("Result: ", +num);
// }
// printResult(add(5, 12));
// let combineValues: Function;
// let combineValues: (a: number, b: number) => number;
// combineValues = add;
// printResult(combineValues(10, 10));
// function addAndHandle(n1: number, n2: number, callBack: (num: number) => void) {
//   const result = n1 + n2;
//   callBack(result);
// }
// addAndHandle(10, 20, (result) => {
//   console.log(result);
// });
//uknown type
// let userInput: unknown;
// userInput = 5;
// userInput = "hi";
//never type
//this function never return nothing
// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }
//classes
// abstract class Deparment {
//   static year: number = 2020;
//   protected employees: string[] = [];
//   constructor(protected readonly id: number, public name: string) {
//     this.name = name;
//     this.id = id;
//   }
//   static createEmployee(name: string) {
//     return { name: name };
//   }
//   abstract describe(this: Deparment): void;
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }
// }
// console.log(Deparment.year);
// class ITDeparment extends Deparment {
//   private report: string;
//   get mostRecentReport() {
//     if (this.report) {
//       return this.report;
//     }
//     throw new Error("No report found");
//   }
//   set mostRecentReport(value: string) {
//     this.addReport(value);
//   }
//   constructor(id: number, public admins: string[], private reports: string[]) {
//     super(id, "IT");
//     this.report = reports[0];
//   }
//   addIt(name: string) {
//     this.employees.push(name);
//   }
//   addReport(text: string) {
//     this.reports.push(text);
//     this.report = text;
//   }
//   describe() {
//     console.log("IT Deparment - ID: ", this.id);
//   }
// }
//interface
// interface Name {
//   name: string;
//   outputName?: string;
// }
// interface Greetable extends Name {
//   greet(phrase: string): void;
// }
// class Person implements Greetable {
//   constructor(public name: string) {
//     this.name = name;
//   }
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   }
// }
// let user1: Greetable;
// user1 = {
//   name: "Facu",
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };
// user1.greet("Hi im ");
// interface ErrorContainer {
//   [prop: string]: string;
// }
// const error: ErrorContainer = {
//   email: "Error reading email",
// };
//type
// type Admin = {
//   name: string;
//   privilieges: string[];
// };
// type Employee = {
//   name: string;
//   startDate: Date;
// };
// type ElevatedEmployee = Admin & Employee;
// const UserInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
// const UserInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;
// UserInputElement.value = "Hi there";
