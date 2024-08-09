// CRUD / CREATE(YARATISH) / READ(OQ'ISH) /  UPDATE(O'ZGARTIRISH) / DELETE(O'CHIR'ISH) 




const storgaSaqla = (arr) => localStorage.setItem("todos", JSON.stringify(arr))
let storageTodos = JSON.parse(localStorage.getItem("todos")) || []
storgaSaqla(storageTodos)


const tBody = document.querySelector("tbody")
const elText = document.querySelector(".name_inpt")
const elBtn = document.querySelector("#btn")
const elForm = document.querySelector("form")

// READ(OQ'ISH)
function domgaChiqarator(data) {
    console.log(data, "inner data");
    tBody.innerHTML = ""

    data.forEach((todo) => {
        tBody.innerHTML += `
    <tr>
        <td> ${todo.text}</td>
        <td> ${todo.createdAt}  </td>
        <td class="text-right  pr-4 " > 
        <button data-todo-id='${todo.id}' class="edit py-1 px-3 bg-orange-500 rounded-[10px] text-white"> Edit  </button>
        <button data-todo-id='${todo.id}'   class="delete py-1 px-3 bg-red-500 rounded-[10px] text-white"> Delete  </button>
        </td>
    </tr>
    `
    })

    storgaSaqla(storageTodos)

}

domgaChiqarator(storageTodos)

// CREATE(YARATISH)
elBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    let date = new Date()
    let yaratilganVaqti = date.getHours() + ":" + date.getMinutes()
    let newTodo = {
        id: storageTodos.length ? storageTodos[storageTodos.length - 1].id + 1 : 1,
        text: elText.value,
        createdAt: yaratilganVaqti,
        isCompleted: false,
    }

    storageTodos.push(newTodo);
    // qayta chizish =>
    domgaChiqarator(storageTodos)
    elText.value = ""

})


tBody.addEventListener("click", (evt) => {
    evt.preventDefault()

    // delete
    if (evt.target.matches(".delete")) {
        let id = evt.target.dataset.todoId
        let findIndex = storageTodos.findIndex((el) => el.id == id)
        storageTodos.splice(findIndex, 1)
        domgaChiqarator(storageTodos);

    }
    // edit
    if (evt.target.matches(".edit")) {
        let id = evt.target.dataset.todoId
        let find = storageTodos.find((el) => el.id == id)
        let newText = prompt("Todo ozgartiring", find.text)
        find.text = newText
        domgaChiqarator(storageTodos);

    }
})








let elOpenBtn = document.querySelector(".open")
let elClose = document.querySelector(".close")
let elOverlay = document.querySelector(".overlay")

elOpenBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    elOverlay.classList.add("active")
})

elClose.addEventListener("click", (evt) => {
    evt.preventDefault()
    elOverlay.classList.remove("active")
})

elOverlay.addEventListener("click", (evt) => {
    evt.preventDefault()
    console.log(evt.target.matches(".overlay"));
    if (evt.target.matches(".overlay")) {
        elOverlay.classList.remove("active")
    }
})