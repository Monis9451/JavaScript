// function one()
// {
//     return 1
// }

// function two()
// {
//     return one() + one()
// }

// function three()
// {
//     let ans = two() + one()
//     console.log(ans)
// }

// three()

//Making a call  stack hell

h1 = document.querySelector("h1")
function colorChange(color, delay, newFunc)
{
    setTimeout(()=>{
        h1.style.color = color
        if(newFunc)
            {
                newFunc()
            }
    },delay)
    
}

colorChange("red",1000,()=>{
    colorChange("blue",1000,()=>{
        colorChange("green",1000,()=>{
            colorChange("yellow",1000)
})
})
})