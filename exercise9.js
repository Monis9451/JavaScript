//task 1
let div1 = document.createElement("div")
document.querySelector("body").prepend(div1)
let redPara = document.createElement("p")
redPara.innerText = "Hey, I'm red!"
div1.prepend(redPara)
redPara.classList.add("red")

//task2
let blueH3 = document.createElement("h3")
blueH3.innerText = "Hey, I'm blue h3!"
div1.prepend(blueH3)
blueH3.classList.add("blue")

//task3
let div2 = document.createElement("div")
let innerH1 = document.createElement("h1")
let innerP = document.createElement("p")
innerH1.innerText = "I'm in a div"
innerP.innerText = "ME TOO!"
div2.prepend(innerH1)
div2.prepend(innerP)
div2.classList.add("box")
document.querySelector("body").prepend(div2)

//task4
let input = document.createElement("input")
let button = document.createElement("button")
button.innerText = "Click me"
document.querySelector("body").append(input)
document.querySelector("body").append(button)

//task 5
input.setAttribute("placeholder","username")
button.setAttribute("id","btn")

//task 6
button = document.getElementById("btn")
btn.classList.add("btn")

//task 7
let h1 = document.createElement("h1")
h1.innerText = "DOM Practice"
h1.classList.add("h1style")
document.querySelector("body").append(h1)

//task 8
let para = document.createElement("p")
para.innerHTML = "Apna College <b> Delta </b> Practice"
document.querySelector("body").append(para)
