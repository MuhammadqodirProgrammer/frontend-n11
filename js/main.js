// ***************************** Undecodedan stringa o'tkasiz ********************************

// let unecodeArr = [
// 	113, 111, 121, 105, 108, 32, 115, 122, 32, 116, 111, 112, 116, 105, 110, 103,
// 	105, 122, 32, 55357,
// ];

// console.log(String.fromCharCode(121));// "qoyil sz toptingiz"



// let str ="Salom dunyo"
// *************** split berilgan sperator yordamida stiringni bolib arrayga solib beradi *******************

// console.log(str.split('o')); //["Sal", "m dunyo", " "]

// ********* replace() stringni ichida qidirayotgan qiymatimiz bolsa almashtrib qoyadi bolmas yoq ******************

// console.log(str.replace('not', ' heloo '));

// *********** Funksiyada default parametr berish ismni taskariga ogirish*********************

// function reverseString(username = 'Muhammadqodir') {
// 	let newName = '';
// 	for (let i = username.length - 1; i >= 0; i--) {
// 		newName = newName + username[i];
//         console.log(newName);
// 	}

// return newName;
// }

// let name2 = 'Ozodbek';
// let reversedName = reverseString(name2);
// // console.log(reversedName);  // "kebdozO"


// ***************************** Ichma ich arrayda misol  ********************************

// let arr = [
// 	[10, 8, 6],
// 	[3, 5, 7],
// 	[11, 22, 3],
// ];

// function getSum(arr = []) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr[i].length; j++) {
// 			console.log(arr[i][j]);
// 			sum += arr[i][j];
// 		}
// 	}
// }

// getSum(arr);

// ************************** arrayni ichidagi eng uzun textni length va index topshi  ****************************

// function findMaxWordIndex(arr = []) {
// 	let max = arr[0].length;
// 	let index = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (max < arr[i].length) {
// 			max = arr[i].length;
// 			index = i;
// 		}
// 	}
// 	console.log(max, i);
// }
// let arr = [
// 	'Salom dunyo',
// 	" ajoyib so'z",
// 	'javascript juda yaxshi till va oson',
// 	' Men Full-stack dasturchiman va men code yozishni yaxshi koraman',
// ];

// findMaxWordIndex(arr);















