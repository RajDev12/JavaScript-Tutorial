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

## Memory Allocation in JavaScript

This project explores the concept of memory allocation in JavaScript, focusing on the distinction between primitive data types and non-primitive (reference) types.

### Key Points Covered:

1. **Primitive Data Types**: Primitive data types (e.g., numbers, strings, booleans) are stored directly in the stack memory. When a primitive value is assigned to a variable, a copy of that value is passed, and any changes to the copy do not affect the original value.

2. **Example**: In the provided code snippet, variables `a` and `b` demonstrate this behavior with primitive data types. When `b` is assigned the value of `a`, it creates a copy of the value, and subsequent changes to `b` do not affect `a`.

3. **Non-Primitive (Reference) Types**: Non-primitive or reference types (e.g., objects) are stored in the heap memory. When a non-primitive value is assigned to a variable, the reference address of the object in memory is passed. Therefore, both variables point to the same object, and changes made via one variable will reflect in the other.

4. **Example**: The code snippet also demonstrates this behavior with objects `user1` and `user2`. When `user2` is assigned the value of `user1`, they both reference the same object in memory. Subsequent changes to `user2` also affect `user1`.

### Conclusion:

Understanding the differences between primitive and non-primitive data types in terms of memory allocation is crucial for writing efficient and bug-free JavaScript code. By grasping these concepts, developers can effectively manage memory usage and avoid unexpected behavior in their applications.


---To be Continued----
