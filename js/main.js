// varda elon qilsa , qayta tenglasa ,  va shu nom bilan qayta elon qilsa  boladi  
// console.log(age);


// var age = "20"


var a = 20
a = 60
var a = 80
// console.log(a);

// let elon qilsa , qayta tenglasa 
// tdz vaqtinchalik olik zona ?

// console.log(b);
let b = 40
b = null
// let b =50 buni qilib bolmaydi 
// console.log(b);

// const da faqat elon qilsa boladi , qayta tenglab bolmaydi 
// "use strict"

// console.log(c);

const c = 50
// c = 80 !!! qayta tenglash mumkin mesa 

// console.log(c);



// type majburlash

let sum = 100
// let sum2 = "50"

// let sums = sum - sum2
// console.log(sums);

// console.log(sum * "");
// console.log(sum++);
// console.log(++sum);
// console.log(sum);

// console.log(true + false);



// let x = BigInt(999999999999999);
// let y = BigInt(9999999999999999);
// console.log(x + y);

































// String metodlari 

// indexOf
// lastIndexOf

// let str = "hello@ world";
// console.log(str[2]);
// console.log(str.indexOf("@", 6));

// console.log(str.indexOf("l"));
// console.log(str.lastIndexOf("l"));




// slice() metodi stringdan berilgan indekslar orasidagi qismini kesib olib, yangi string hosil qiladi.

// let str = "hello@ world";

// console.log(str.slice(0, 5));

// console.log(str);



// substr(boshlangichIndex, qanchaOlishKerakliki) metodi stringdan berilgan indeksdan boshlab belgilangan uzunlikdagi qismini kesib olib, yangi string hosil qiladi.

// let str = "hello@ world";
// console.log(str.substr(5, 5));
// console.log(str);


// replace() metodi stringdagi bir qatorni yoki belgini yangi qator yoki belgi bilan almashtiradi. bu haqiqiy stringga tasir qilmaydi !!!! Temur

// let str = "hello@ world";
// let newStr = str.replace("@", "#")
// console.log(newStr);
// console.log(str);

// charAt() metodi berilgan indeksdagi belgini qaytaradi.

let str = "hello@ world";
console.log(str[5]);
// console.log(str.charAt(2)); //default holatda  0 oldi 
// console.log(str.charCodeAt());

// console.log(str);

// Task 1 

// sizda qandaydir string bor va shundagi oxirgi so’zning length ni toping split ishlatilmasin
// let hat = "salomx ali hhe"


// function test(words = "") {
//     var n = words.lastIndexOf(" ");
//     return words.slice(n - 1).length
// }
// test(hat)

// Task 2 

// argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan  va alarni b ga almashtradigan   function tuzing 

// let hat = "salom ali "

// let shrifla = (hat = "") => {
//     let str = hat.replaceAll("a", "@").replaceAll("s", "$").replaceAll("o", "0").replaceAll("l", "*")
//     return str

// } // $@l0mB@li
// console.log(shrifla(hat));
// let shrifdanChirarish = (shriflanganHat) => {

// }




// funksiyalar

// declatation 
// console.log(declatationFunsiyasi());

// function declatationFunsiyasi(params) {
//     return "hello world"
// }


// expression
// console.log(expressionFunsiyasi()); //tdz
// const expressionFunsiyasi = function () {
//     return "hello world"
// }

// arrow function
// console.log(arrowFunsiyasi());
// const arrowFunsiyasi = () => {
//     return "hello world"
// }




// let users = {
//     0: "Eshmat",
//     1: "User2",
//     2: "Temur",
// }

// console.log(users[0]);

// let usersArr = ["Eshmat", "User2", "Temur"];

// console.log(usersArr.concat([25255, 56, 5, 5, 5], ["boshqa arraday ke;dod"]))

// usersArr.forEach((val, index, arr) => {

//     console.log(val, arr);
// });

// let newArr = usersArr.map((val, index, arr) => {
//     return val + " Bu qoshimcha soz"
// });

// console.log(newArr);

// let newArr2 = []
// let toq = []
// let newArr = usersArr.forEach((val, index, arr) => {
//     newArr2.push(val + " Bu qoshimcha soz")
//     // return val + " Bu qoshimcha soz"
// });

// console.log(newArr, newArr2);


let usersArr = ["Eshmat", "User2", "Temur", "ali"];

// let newArr = usersArr.filter((val, index, arr) => {
//     return val
// });

// console.log(newArr);

// usersArr.reduce((acc, val, index, arr) => {
//     console.log(acc, val);
//     return "ha eshmat User2" + 'Temer'
// }, "ha")\

// let nums = [1, 2, 5, 6]
// let yegindi =nums.reduce((acc, val, index, arr) => {
//     acc = acc + val
//     return acc
// }, 0)
// // ikkinchui usul
// // let yegindi = nums.reduce((acc, val, index, arr) => acc + val, 0)

// console.log(yegindi);



// Array.prototype.mapniTestla = function () {
//     let obj = {
//         raqambormi: false,
//         length: this.length,
//         stiringBormi: false
//     }
//     for (let i = 0; i < this.length; i++) {
//         if (!isNaN(this[i])) {
//             obj.raqambormi = true
//         } else if (typeof this[i] === "string") {
//             obj.stiringBormi = true
//         }

//     }
//     return obj

// }

// console.log(Array.prototype);



// let nums = [1, 5, 6, 8 , "hello world"]

// console.log(nums.mapniTestla()); //{raqambormi:true, length:4, stiringBormi:false}





// let fruits = [{
//     age: 20
// }, 'banana', 'orange'];

// let [firstFruit, secondFruit, thirdFruit] = fruits;

// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);

// let person = {
//     ism: 'John',
//     yosh: 30,
//     job: 'developer'
// };

// let {
//     ism: ism2,
//     job,
//     yosh
// } = person
// console.log(ism2);