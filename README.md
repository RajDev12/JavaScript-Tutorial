# JAVASCRIPT  IMPORTANT NOTES


## JavaScript Variable Declarations and Dynamic Typing

## Variable Declarations
- In JavaScript, variables can be declared using `var`, `let`, or `const`.
- `var` has issues with block scope and functional scope, making it outdated.
- `let` allows variables to be declared with block scope, enhancing predictability.
- `const` is used for declaring constants. Once assigned, its value cannot be reassigned.

## Dynamic Typing
- JavaScript is a dynamically typed language, similar to Python.
- Variables can be defined and initialized without using any keyword.

## Variable Initialization
- Variables can be defined without initializing them, resulting in a value of `undefined`.

## Console Output
- The `console.log()` function is used to output data to the console.
- `console.table()` can be used to display data in tabular format.

## Variable Types and Assignments
- `var` is outdated due to scope issues. `let` and `const` are commonly used in modern JavaScript.
- Attempting to reassign a value to a `const` variable results in an error.



# Data Types in JavaScript
##Primitive

- **Number**: Represents numerical values. In JavaScript, numbers are represented as 64-bit floating-point numbers, with precision up to 2 to the power 53.
- **BigInt**: Used for representing integers of arbitrary length.
- **String**: Represents textual data enclosed within quotes.
- **Boolean**: Represents logical values - `true` or `false`.
- **null**: Represents the intentional absence of any object value.
- **undefined**: Indicates that a variable has been declared but not assigned any value.
- **Symbol**: Uniquely define a variable, return type is also symbol
## Non-Primitive / Reference Types

Non-primitive or reference types involve passing the address (or reference) of the variable to a function or operation. Any changes made to the variable via a new variable will reflect on the original one as well. This behavior is observed in arrays, functions, and objects, as they are all non-primitive data types.

### Arrays

- Arrays are passed by reference when used as function arguments.
- Modifications made to the array within a function will affect the original array outside the function.

### Functions

- Functions are treated as first-class citizens in many programming languages.
- When you pass a function as an argument to another function, you are passing a reference to that function.

### Objects

- Objects are complex data types consisting of key-value pairs.
- When you pass an object to a function or assign it to another variable, you are passing a reference to the object in memory.
- Changes made to the object via the new variable will be reflected in the original object.

In summary, non-primitive or reference types exhibit pass by reference behavior, where changes made via a new variable will affect the original one.


## Additional Notes

- The `alert()` function is specific to the browser environment and is used to display an alert dialog.
- Objects are also a data type in JavaScript, but they are not explicitly demonstrated in this code snippet.

## Console Output

- Outputs the string `"hi"` to the console.
- Logs the data types of variables `a`, `null`, and `undefined`, which are `"number"`, `"object"`, and `"undefined"` respectively.

---To be Continued----
