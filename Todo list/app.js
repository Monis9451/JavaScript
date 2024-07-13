let button = document.querySelector("button")
let input = document.querySelector("input")
let ul = document.querySelector("ul")

button.addEventListener("click",function()
{
    let item = document.createElement("li")
    item.innerText = input.value + " "
    let delbtn = document.createElement("button")
    delbtn.innerText = "Delete"
    delbtn.classList.add("del")
    item.appendChild(delbtn)
    ul.appendChild(item)
    input.value = ""
})


ul.addEventListener("click", function(event)
{
    if(event.target.nodeName == "BUTTON" && event.target.className == "del")
    {
        event.target.parentElement.remove()
    }
})

document.addEventListener("keydown",function(event)
{
    if(event.key === "Enter")
    {
        let item = document.createElement("li")
        item.innerText = input.value
        let delbtn = document.createElement("button")
        delbtn.innerText = "Delete"
        delbtn.classList.add("del")
        item.appendChild(delbtn)
        ul.appendChild(item)
        input.value = ""
    }
})