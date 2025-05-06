// module import file

//default import
import mul from "./mathOperationsModule.js";

//named import/function
import { add, sub } from "./mathOperationsModule.js";

console.log(mul(2, 2));
console.log(add(5, 7));
console.log(sub(9, 7));
