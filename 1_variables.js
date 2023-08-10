// Javascript variables
// We have some ways to define variables in javascript
// We can define variables using let,const,var
// and when defining a variable that can be initialized or not (except const: SyntaxError: Missing initializer in const declaration)

// Defining variables without initialize
let uninitializedLetVariable;
let uninitializedVarVariable;

// Defining variables and initializing
let initializedLetVariable = 1;
var initializedVarVariable = 'text';
const initializedConstVariable = 3.14;

// To redefine variables we do not need use the define variables keywords again
// Notice that it's impossible redefine const variables (TypeError: Assignment to constant variable.)
initializedLetVariable = 1;
initializedVarVariable = 'redefinedText';

// You can redeclare the var variables but not the let variables
var initializedVarVariable = 'redeclaredText';
// let initializedLetVariable = 1;  // Raise SyntaxError: Identifier 'initializedLetVariable' has already been declared

// It is considered good practice to use const for variables whoose value will never change.
// For example, if you want to store the number pi you would use const to store it because pi never changes.
// Doing so can prevent your code from behaving unexpectedly.
const pi = 3.14159;

// ** ADVANCED TOPICS ** //

// The difference between let and var is in the scope of the variables they create
// Variables declared by let are only available inside the BLOCK where they're defined. 
// Variables declared by var are available throughout the FUNCTION in which they're declared.
// Before ES6 (2015), JavaScript had Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block
studyingVariablesBehavior = () => {
    var myOutsideVarVariable = 2;// I can use this variable inside the function below
    let myOutsideLetVariable = 2;// I can use this variable inside the function below
    {
        console.log('Executing studyingVarBehavior method');
        console.log(myOutsideVarVariable);
        var myInsideVarVariable = 100;
        console.log(myInsideVarVariable);
        console.log('End of studyingVarBehavior method execution');
    }
    console.log('Checking the change of myOutsideVarVariable')
    console.log(myOutsideVarVariable)
    console.log('Checking the change of myInsideVarVariable')
    console.log(myInsideVarVariable)

    {
        // if i try access myOutsideLetVariable here it will raise an Undefined Variable Error
        console.log('Executing studyingLetBehavior method');
        console.log(myOutsideLetVariable);
        let myInsideLetVariable = 100;
        console.log(myInsideLetVariable);
        console.log('End of studyingLetBehavior method execution');
    }
    
    console.log('Checking the change of myOutsideLetVariable')
    console.log(myOutsideLetVariable)
    console.log('Checking the change of myInsideLetVariable')
    // console.log(myInsideLetVariable) // ReferenceError: myInsideLetVariable is not defined
}
studyingVariablesBehavior()

// Variables Hoisting
// Hoisting is the default javascript behavior of moving declarations to the top.
// if you use variables along your code the javascript will push it to the top, like typed languages
console.log(v1) // this will work because the javascript pushed de below declaration to the top of this declaration, but the value logged will be undefined
var v1 = 2;
// the code above is executed as following below, because that the 1 as logged undefined (the define is pushed to the top but assignment no)
var v1;
console.log(v1);
v1 = 2;
// to log the value 2 the statement is
var v1 = 2;
console.log(v1);
// if you use the let variable this will pushed to the top, but not the initializing, it will not be undefined and cannot be acessed raising ReferenceError if you try (ReferenceError: Cannot access 'v2' before initialization)
// console.log(v2)
// let v2 = 2;
// or
// console.log(v2)
// let v2;
// No one of the above statements works, this occurs because they are the same of below
// let v2;
// console.log(v2);
// And it doesn't work because the variable let are not initialized before use, it's only declared. (ReferenceError: Cannot access 'v2' before initialization)
// The ways to do this work is
let v2; //or let v2 = 'value' and skiping or not the next assignment statement
v2 = 'value'; // initializing
console.log(v2);
// The same of above let hoisting example occurs with const
// The code below will raise a SyntaxError on the second line, because that will be moved to the top during execution and executed before line 1 (SyntaxError: Missing initializer in const declaration)
// console.log(c1);
// const c1;
// If we declare and initialize the ReferenceError error will be raised instead the SyntaxError because only the declaration will be moved to the top;
// console.log(c1)
// const c1 = 3.14;
// The unique way to do that is
const c1 = 3.14;
console.log(c1);
// Now you can see the reason of is a good pratice always declare variables at the start of the scopes (like typed language), it will avoid a lot of bugs
