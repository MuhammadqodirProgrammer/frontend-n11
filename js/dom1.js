// document.body.style.backgroundColor = "red"

// const elList = document.querySelector(".nav_list")
// console.dir(elList);
// // document.body.appendChild(h1)

// for (let i = 0; i < 20; i++) {
//     const li = document.createElement("li")
//     li.textContent = "salom dunyo"
//     elList.appendChild(li)
// }




//  text generation

// const elTextInput = document.querySelector("#text")
// const elCount = document.querySelector("#count")
// const elBtn = document.querySelector("#btn")
// const elContent = document.querySelector(".text_content")






// elBtn.addEventListener("click", (evt) => {
//     evt.preventDefault()
//     for (let i = 0; i < elCount.value; i++) {
//         elContent.textContent += elTextInput.value

//     }
// })






let userData = [{
        id: 1,
        name: "Ali",
        age: 20,
        adress: "Tashkent, Chilonzor "
    },
    {
        id: 2,
        name: "Eshmat",
        age: 30,
        adress: "Tashkent, Olmazor "
    },

]

const elList = document.querySelector("tbody")
const elName = document.querySelector(".name_inpt")
const elAge = document.querySelector(".age_inpt")
const elAdress = document.querySelector(".adress_inpt")
const elBtn = document.querySelector("#btn")
const elForm = document.querySelector("form")
console.log(elName, elAge, elAdress);

elBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let newUser = {
        name: elName.value,
        age: elAge.value,
        adress: elAdress.value,
    }
    userData.push(newUser);
    domgaChiqarator(userData)
    elForm.reset()
})

function domgaChiqarator(data = []) {
    elList.innerHTML = ""
    data.forEach((user) => {
        elList.innerHTML += `
    <tr>
        <td> ${user.name}</td>
        <td> ${user.adress}  </td>
        <td>  ${user.age}   </td>
    </tr>
    `
    })
}

domgaChiqarator(userData)