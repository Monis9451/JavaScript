// let btn = document.querySelectorAll("button")

// for(button of btn)
// {
//     // button.addEventListener("click", alertFunc)
//     // button.addEventListener("click", helloFunc)
//     button.addEventListener("dblclick", dblFunc)
// }
// function alertFunc()
// {
//     alert("Button is clicked")
// }
// function helloFunc()
// {
//     alert("Hello")
// }
// function dblFunc()
// {
//     console.log("You double clicked")
// }

//Random color generator
button1 = document.querySelector("button")
button1.addEventListener("click", function()
{
    let h3 = document.querySelector("h3")
    rColor = getRandomColor()
    h3.innerText = rColor
    
    let div1 = document.querySelector("div")
    div1.style.backgroundColor = rColor
    console.log("Color updated")
})

function getRandomColor()
{
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    let color = `rgb(${red}, ${green}, ${blue})`
    return color
}
