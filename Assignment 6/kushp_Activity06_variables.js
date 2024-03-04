/*
Name - Kush Pamnani
Feb 10, 2024
Activity06 - Variables
*/

console.log("---- I am in V A R I A B L E S ----")

// Q1 : Is it permited the next ?
console.log("Q1 ---------------")
var var1 = "Iowa";
console.log(var1);
var var1 = 124;
console.log(var1);
// Is it permited ?
console.log("Yes, re-declaration is permitted with 'var'.");

// Q2 : Is it valid ?
console.log("Q2 ----------------");
let var2 = "Ames";
console.log(var2);
let var2 = 124;
// Is it valid ?
console.log("Cannot redeclare block-scoped variable 'var2'.ts(2451). Not valid due to redeclaration. Corrected by assigning a new value without 'let'.");


// Q3 : Is it valid ?
console.log("Q3 ----------------");
let var3 = "ISU";
console.log(var3);
var3 = 2023;
console.log(var3);
console.log("Valid ?")

// Q4 : Explain the Error.
// console.log("Q4 ----------------");
// let var4;
// const var5;
// console.log("Error explained: 'const' declaration must be initialized.")

// Q5 : Explain the Error.
console.log("Q5 ----------------");
const var6 = 3.1415;
var6 = 2.8;
console.log("Error explained: 'const' variables cannot be reassigned.")

// Q6 : Explain the Error.
let first name = "Abraham";
console.log("',' expected.ts(1005). a comma is expected in the statement.");
let 2numbers = [1,2];
console.log("Variable declaration not allowed at this location.ts(1440). ';' expected.ts(1005). In the first one the variable declaration is not allowed, and in the second one the comma is expected");
let city-state = "Ames Iowa";
console.log("',' expected.ts(1005). ';' expected.ts(1005). In both these errors a comma was");

// Q7 : What !! ??
let mainCity ="DesMoines";
console.log("This is the Capital :", MainCity)
console.log("Could not find name 'MainCity'. Did you mean 'mainCity'? The issue was due to a case sensitivity error. Variable names in JavaScript are case-sensitive.");

// Q8 : "let" and "const" scope vs "var" scope
if (5 === 5) {
    var var7 = 100;
    }
    console.log(var7);
    if (5 === 5) {
    let var8 = 100;
    }
    console.log(var8);
    console.log("var7 is accessible outside its block due to function scoping of 'var'. var8 causes a ReferenceError outside its block due to block scoping of 'let'.")