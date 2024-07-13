let button = document.querySelector("button")
let input = document.querySelector("input")
let ul = document.querySelector("ul")

button.addEventListener("click",function()
{
    let item = document.createElement("li")
    item.innerText = input.value
    let delbtn = document.createElement("button")
    delbtn.innerText = "Delete"
    ul.appendChild(item)
    input.value = ""
})