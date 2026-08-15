// const ibrahim = {
//   fullName: "Ibrahim",
//   age: 18,
//   marks: 610,
//   isPass: true,
// };

//operators
// let a = 5;
// let b = 2;

// console.log( a + b);                                 // plus hojaiga
// console.log( a - b);                                // mainus hojaiga
// console.log( a * b);                               // multiplai hojaiga
// console.log( a / b);                              // devide hojaiga
// console.log( a % b);                             // modiulus hoga yani k devide hoga or jo value bachy gi wo show hojaigi
// console.log( a ** b);                           // 5 power to 2 it means 5 to multiplai 5 is ecual to 25

//unary operators
// let a = 5;
// let b = 2;

// a = a - 2;                                  // 5 k under 2 mainus hojaiga
// a--;                                       // 5 k under 1 mainus hojaiga
// a = a + 2;                                // 5 k under 2 add hojaiga
// a++;                                     // 5 k under 1 add hojaiga

// console.log(a);

// console.log(++a);                      // phely 1 value add kryga

// console.log(a++);                     // baad main value add kryga

// console.log(a);                      // uper waly code ki value change kryga dono sath uncommant krny hain

// console.log(--a);                   // phely 1 mainus kryga

// console.log(a--);                  // baad main mainus kryga

// console.log(a);                   // uper waly code ki value change kryga dono sath uncommant krny hain

//Assignment operators
// let a = 5;
// let b = 2;

// a += 4;                         // 5 k under 4 add krna hain
// a -= 4;                        // 5 k under 4 mainus krna hain
// a *= 4;                       // 5 ko 4 sy multiply krna hain

// console.log(a);

//comparison operators
// let a = 5;
// let b = 2;

// let c = 5;
// let d = 2;

// console.log(a == b);            // kya A equal hai B k to false ya true aiga

// console.log(c != d);           // kya C not equal hai D k to false ya true aiga

// let a = 5; //number
// let b = "5"; //string

// console.log(a === b);         // kya number or string equal hai true ya false aiga

// let a = 5; //number
// let b = "5"; //string

// console.log(a !== b);        // kya number or string equal nahi hai true ya false aiga

// let a = 5;
// let b = 2;

// console.log(a > b);         // kya A bra hai B k true ya false

// let a = 5;
// let b = 2;

// console.log(a < b);        // kya A chota hai B k true ya false

// let a = 5;
// let b = 2;

// console.log(a >= b);      // kya A brabr hai B k true ya false

// let a = 5;
// let b = 2;

// console.log(a <= b);     // kya A brabr nahi hai B k true ya false

//Logical operators
// let a = 6;
// let b = 5;

// console.log(a < b && a === 6);              // double && bolta hai ki agar dono condition true hai to mein false dunga or agar conditions true ya false hai to false aigi

// let a = 6;
// let b = 5;

// console.log(a < b || a === 6);            // double (OR ||) bolta hai ki agar dono condition true hai to mein true dunga or agar conditions true ya false hai to true aigi

// let a = 6;
// let b = 5;

// console.log(!(a < b));                                      // (NOT !) iska matlab agar condition true hai to false aiga or agar false hai to true aiga

// conditional statement
// let age = 25;

// if (age >= 18) {
//   console.log("You can Vote");
// } else {
//   console.log("You can not Vote");
// }

// let mode = "black";                                      // multiple conditions check krna ka trika
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "red") {
//   color = "red";
// } else {
//   color = "white";
// }

// console.log(color);

// ternary operator
// let age = 25;                                        // 2 conditions ko check krna ka trika

// let result = age >= 18 ? "adult" : "not adult";

// console.log(result);

// propmt likhna ka trika
// let bheem = prompt("Hello Ibrahim");

// console.log(bheem);

// for loop
// for (let i = 1; i <= 5; i++) {                     // 1 sy lekr 5 tak loop hoga is sy uper bhi ja sakta hai
//   console.log("ibrahim");
// }

// while loop
// let i = 1;                                        // same loop

// while (1 <= 5) {
//   console.log("ibrahim");
//   i++;
// }

// template literal
// let obj = {
//   item: "pen",
//   price: 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;

// console.log(output);

// trim
// let str = "    ibrahim     js   ";            //start wali or end wali space khatam krta hai

// console.log(str.trim());

// slice
// let str = "ibrahim";                         //1 sy lekr 6 tak words dega

// console.log(str.slice(1, 6));

// replace
// let str = "hello";                          //pehle word ko dusry word k sath replace krta hai

// console.log(str.replace("h", "y"));

// basic arrays
// let marks = [69, 79, 89, 99, 100];         //sab values ka bundle bnjai ga

// console.log(marks);

// let marks = [69, 79, 89, 99, 100];        //same array

// for (i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }

//push
// let foodItems = ["potato", "apple", "litchi", "tomato"];               //cheezy add krta hai

// foodItems.push("chips", "burger", "pizza");

// console.log(foodItems);

//pop
// let foodItems = ["potato", "apple", "litchi", "tomato"];              //end sy ek cheez delete krta hai

// foodItems.pop();

// console.log(foodItems);

//tostring
//let foodItems = ["potato", "apple", "litchi", "tomato"];              //convert array to string

// console.log(foodItems.toString());

//unshift
// let foodItems = ["potato", "apple"];                                //shuru main add krdy ga

// foodItems.unshift("litchi");

//shift
// let foodItems = ["potato", "apple", "tomato"];                     //shuru main delete krdy ga

// foodItems.shift();

// console.log(foodItems);

//splice
// let array = [1, 2, 3, 4, 5, 6, 7];                                //add krny ka trika

// array.splice(2, 0, 69);

// let array = [1, 2, 3, 4, 5, 6, 7];                               //delete krny ka trika

// array.splice(3, 1);

// let array = [1, 2, 3, 4, 5, 6, 7];                              //replays krny ka trika

// array.splice(3, 1, 333);

// let age = 25;

// if (age >= 18) {
//   console.log("You can Vote");
// } else {
//   console.log("You can not Vote");
// }

// let talha = 40;

// if (talha >= 35) {
//   console.log("You are Smart");
// } else {
//   console.log("You have Fat");
// }

// let ibrahim = 55;

// if (ibrahim >= 50) {
//   console.log("you are smart");
// } else {
//   console.log("you are fat");
// }
