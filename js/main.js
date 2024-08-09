// let numbers = [4, 4, 5, 5, "ajoyib", 6, 7, 7, 8, 8, 9, 9, 10]

// let seterArr = new Set(numbers)

// let arr = Array.from(seterArr)
// console.log(arr, "ozizmizni arr");
// seterArr.add("salom")
// seterArr.delete(10)
// seterArr.forEach((val, val2, set) => {
//     console.log(val, val2, set);
// })
// console.log(seterArr.has(10));
// console.log(seterArr.values());


// Clear bu setni tozalab beradi
// seterArr.clear()
// console.log(seterArr.size);


// console.log(seterArr);




for (let i = 0; i < 50; i++) {
    document.body.innerHTML += `<button>id ${i +1} </button>`
}

// console.table({
//     name: "Ahamadboy",
//     age: 20,
//     adress: "tashkent"
// });
// console.table(["apple", "orange", "banana"]);




function rotateArrayLeft(arr, n) {
    let a = arr.splice(0, n + 1)
    arr.push(...a)
    console.log(arr);
}

console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2));



const oddIndexedElements = (arr) => arr.filter(num => num % 2 == 0)

console.log(oddIndexedElements([1, 2, 3, 4, 5, 6]));



const removeDigits = (str) => str.split("").filter(str => isNaN(str)).join("")


console.log(removeDigits("abc123def456"));