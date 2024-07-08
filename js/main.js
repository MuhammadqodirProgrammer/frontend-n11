// *******************************************


// const calculateTwoNum = (operation, num1, num2) => {

//     switch (operation) {
//         case "+":
//             console.log(num1 + num2);
//             break;
//         case "-":
//             console.log(num1 - num2);
//             break;
//         default:
//             console.log("Bunday amal yoq ");
//             break

//     }


// }

// calculateTwoNum("+", 60, 50) // 110
// calculateTwoNum("-", 60, 50) // 10
// //va boshqalar 


// *******************************************

let arr = ["null", 1, 5, 0, 'a', null, " ", 'bcd', undefined, "", false, , "hello World", "false", ""]


// const separateTruthyFalsy = (array) => {
//     let truthyValues = [];
//     let falsyValues = [];


//     for (let i = 0; i < array.length; i++) {
//         if (array[i]) {
//             truthyValues.push(array[i])
//         } else {
//             falsyValues.push(array[i])
//         }

//     }

//     return {
//         truthyValues: truthyValues,
//         falsyValues: falsyValues
//     };
// };

// const result = separateTruthyFalsy(arr);
// console.log("Truthy values:", result.truthyValues);
// console.log("Falsy values:", result.falsyValues);


// *******************************************

// function mergeArrays(arr1, arr2) {

//     let newArr = [...arr1, ...arr2]

//     newArr.sort((a, b) => b - a)
//     console.log(newArr);


// }

// let array1 = [9, 6, 3];
// let array2 = [4, 1, 2];
// let mergedArray = mergeArrays(array1, array2);



// *******************************************


function myFunction(arrone, arrtwo) {


    if (arrone.length !== arrtwo.length) return false;

    for (let i = 0; i < arrone.length; i++) {
        if (arrone[i] !== arrtwo[i]) return false
    }

    return true;

}
console.log(myFunction([1, 2, 3], [1, 2, 3])); // True
console.log(myFunction([1, 2, 3], [1, 2, 5])); // False