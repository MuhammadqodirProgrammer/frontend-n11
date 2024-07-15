// "use strict";
// function showThis() {
//     console.log(this);
// }
// showThis();



// const person = {
//     name: "Ahmad",
//     greet: () => {
//         console.log(this);
//     }
// };
// person.greet(); // "Ahmad"

// function Person(name) {
//     this.name = name;
//     console.log(this);
// }
// const person1 = new Person("Ali");
// console.log(person1.name); // "Ali"

// function logger(nimdir, nimdir2) {
//     console.log(this, nimdir, nimdir2);
// }


// const ozimiziThis = {
//     age: 20,
//     salary: 10000
// }
// call applay ni ishlatishda farqi faqat argumnt berishda 
// logger.call(ozimiziThis, "bu calldan kelmoqda", "bu ikki call")
// logger.apply(ozimiziThis, ["bu esa applaydan kelmoqda", " bu ikkinchi applay"])


// let newFunc = logger.bind(ozimiziThis)
// newFunc("ehllo", "hello")


let courseData = [{
        "id": "bdaf6bc4-9281-4bf3-8483-6ba4d522078c",
        "name": {
            "qr": "react js",
            "uz": "react js "
        },
        "totalDuration": 0,
        "lessonCount": 0,
        "description": {
            "qr": "bu kursda sz uyda otirib pul topasz",
            "uz": " bu kursda sz uyda otirib pul topasz"
        },
        "descriptionvideo": "https://www.youtube.com/watch?v=PL3Odw-k8W4",
        "type": "occupation",
        "degree": "beginner",
        "teacher": "Ahmadboy",
        "teacherphoto": "f360140d-a5d6-48c6-9993-204d40411457.jpg",
        "cover": "ed1375d4-cdf7-410d-8441-37cf21fd0729.jpg",
        "count": 2,
        "queue": 7,
        "updatedat": "2024-07-15T06:17:52.887Z"
    },
    {
        "id": "1cb0f26f-7b6a-4d81-a090-94df0398f0fe",
        "name": {
            "qr": "spp pro pr",
            "uz": "Smm pro"
        },
        "totalDuration": 0,
        "lessonCount": 0,
        "description": {
            "qr": "bu kursda sz uyda otirib pul topasz",
            "uz": " bu kursda sz uyda otirib pul topasz"
        },
        "descriptionvideo": "https://www.youtube.com/watch?v=PL3Odw-k8W4",
        "type": "occupation",
        "degree": "beginner",
        "teacher": "Ahmadboy",
        "teacherphoto": "f360140d-a5d6-48c6-9993-204d40411457.jpg",
        "cover": "ed1375d4-cdf7-410d-8441-37cf21fd0729.jpg",
        "count": 2,
        "queue": 3,
        "updatedat": "2024-07-15T13:08:46.468Z"
    },
    {
        "id": "2fa679f6-b08f-4c57-bcb1-d627d8ee3492",
        "name": {
            "qr": " node js qr",
            "uz": "Node js"
        },
        "totalDuration": 0,
        "lessonCount": 0,
        "description": {
            "qr": "bu kursda sz uyda otirib pul topasz",
            "uz": " bu kursda sz uyda otirib pul topasz"
        },
        "descriptionvideo": "https://www.youtube.com/watch?v=PL3Odw-k8W4",
        "type": "occupation",
        "degree": "beginner",
        "teacher": "Ahmadboy",
        "teacherphoto": "f360140d-a5d6-48c6-9993-204d40411457.jpg",
        "cover": "ed1375d4-cdf7-410d-8441-37cf21fd0729.jpg",
        "count": 2,
        "queue": 5,
        "updatedat": "2024-07-15T13:09:18.513Z"
    }
]

let newData = []
courseData.forEach((el, i) => newData.push({queue: i,id: el ?.id}))
console.log(newData);