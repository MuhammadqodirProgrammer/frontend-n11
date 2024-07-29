// Functions dectaration
function declarationFunction(params) {

}


// Functions  expression
const functionExpression = function () {

}

// Arrow function

const arrowFunction = () => {

}

//  Pure  vs inpure functions

const pureFunction = (a) => {
    return a + 5
}

// console.log(pureFunction(5));
// console.log(pureFunction(50));
// console.log(pureFunction(50));


const inpureFunction = (a) => {
    return Math.floor(Math.random() * 5) + a
}

// console.log(inpureFunction(5));
// console.log(inpureFunction(5));
// console.log(inpureFunction(5));
// console.log(inpureFunction(5));


// iffe fuction (Aniqlanishi bilan darhol chaqiriladigan funksiya)

(
    (a, b) => {
        var yosh = 20
        // console.log(yosh, a, b);
    }
)(20, 77)

// recursive function

const recursiveFunction = (a) => {
    console.log(a);
    if (a > 0) {
        recursiveFunction(--a)
    }
    return a
}
// recursiveFunction(5)


// Currying functions

function add(x) {
    return (y) => function (z) {
        return x + y + z
    }

}

console.log(add(1)(2)(5));


// Clouser  in js 
function makeSizer(size) {

    return function () {
        document.body.style.fontSize = `${size}px`;
    };
}

const size12 = makeSizer(12);

// const size14 = makeSizer(14);
// const size16 = makeSizer(16);



// higher order functons

const highOrderFuction = (a) => {
    a()
}
let callback = () => alert("salom ")

// highOrderFuction(callback)



let vada = new Promise((resolve, reject) => {
    setTimeout(() => {
        return reject("error chiqti")
    }, 5000)
})
vada.then((val) => {
    console.log(val);
}).catch((err) => {
    console.log(err);
})