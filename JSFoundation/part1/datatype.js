/*
String("")
Number(0-9)
Boolean(True - False)
BigInt(For large Number)
undefined(there might be some values in it,in future add some value in it )
null(empty, empty does not mean ZERO)

Object

Symbol(identofied unique value)
 */

// var keyword used for create variable is a old way in JS because this VAR keyword inside the whole program can be re-initialize and re-generate it
// var score = 102;

let score = 102; //-------------NUMBER data type
// in new way of creating variable used let keyword because it can only re-initialize the value and not re-generate the variable name

let name = "Shrutika"; //---------------STRING data type

let isLoggedIn = true; //-----------BOOLEAN data type

// object
let teaTypes = ["lemon", "black", "milk"]; //-----Array

let user = { firstname: "Shruti", lastname: "Wakodikar" }; //-----------Object

// Also we can refer one variable value in another variable as a value

let getScore = score;

console.log(getScore);
