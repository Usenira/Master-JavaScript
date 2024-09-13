let score = "33abc" 


// console.log(typeof score); // type check
// console.log(typeof (score));

let valueInNumber = Number(score); // converting String to number
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN -> Not a Number

let x = null

// console.log(typeof x); // object
let x1 = Number(x);
// console.log(typeof x1); // number
// console.log(x1); // 0




let y = undefined

// console.log(typeof y); //undefined
let y1 = Number(y);
// console.log(typeof y1); //number
// console.log(y1); // NaN

let z = true
// console.log(typeof z); // boolean
let z1 = Number(z)
//console.log(typeof z1); // number
//console.log(z1); // 1 and if false return 0


//Notes

// "33" => 33
// "33abc" => NaN // not converted but type is number
// 

let isLoggedIn = "ty"
let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn);

// 1  or "absc"=> true
// 0 or "" => false;



