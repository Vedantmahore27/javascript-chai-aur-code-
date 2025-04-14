let score = null;
let marks = "33ab";

console.log(typeof score);  // Output: object (not number)
console.log(typeof marks);  // Output: string

let valueNumber = Number(marks);
console.log(valueNumber);   // NaN (Not a Number)

let val = Number(score);
console.log(val);           // 0

// Conversion rules:
// "33" => 33
// "33abc" => NaN
// null => 0
// true => 1
// false => 0

let isLoggedIn = 1;
let va7 = Boolean(isLoggedIn);  // ✅ Use Boolean() not bool()
console.log(va7);               // true
