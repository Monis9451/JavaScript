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
// function colorChange(color, delay, newFunc){
//     setTimeout(()=>{
//         h1.style.color = color
//         if(newFunc)
//             {
//                 newFunc()
//             }
//     },delay)
    
// }

// colorChange("red",1000,()=>{
//     colorChange("blue",1000,()=>{
//         colorChange("green",1000,()=>{
//             colorChange("yellow",1000)
// })
// })
// })

// function saveToDB(data)
// {
//     return new Promise((success, failure)=>{
//     let internetSpeed = Math.floor(Math.random()*10)+1
//     if(internetSpeed>4){
//         success("data was saved")
//     }else{
//         failure("retry, data not saved")
//     }
//     })
// }

// // let request = saveToDB("Monis Hussain")//request = promise object
// saveToDB("Monis Hussain")
// .then((result)=>{
//     console.log("Result: ",result)
//     console.log("Promise was resolved, Data 1 saved")
//     return saveToDB("Umair nadeem")
// })
// .then((result)=>{
//     console.log("Result: ",result)
//     console.log("Promise was resolved, Data 2 saved")
//     return saveToDB("Another name")
// })
// .then((result)=>{
//     console.log("Result: ",result)
//     console.log("Promise was resolved, Data 3 saved")
// })
// .catch((error)=>{
//     console.log("Error: ",error)
//     console.log("Promise was rejected")
// })

// //Callback hell for color code


// h1 = document.querySelector("h1")
// function colorChange(color,delay){
//     return new Promise((success)=>{
//         setTimeout(()=>{
//             h1.style.color = color
//             success("Color changed successfully")
//         },delay)
//     })
// }

// colorChange("red",1000)
// .then(()=>{
//     console.log("Text converted to red color")
//     return colorChange("green",1000)
// })
// .then(()=>{
//     console.log("Text converted to green color")
//     return colorChange("lightblue",1000)
// })
// .then(()=>{
//     console.log("Text converted to lightblue color")
//     return colorChange("yellow",1000)
// })
// .then(()=>{
//     console.log("Text converted to lightblue color")
// })

//practicing async and await function
function colorChange1(color, delay){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            h1.style.color = color
            console.log(`Color changed to ${color}.`)
            resolve("Color changed")
        },delay)
    })
}

async function changing(){
    await colorChange1("red",1000)
    await colorChange1("blue",1000)
    await colorChange1("green",1000)
    colorChange1("yellow",1000)
}
changing()