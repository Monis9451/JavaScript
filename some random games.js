// let win = false;
// while(win == false)
//     {
//         let num = Math.floor(Math.random()*10);
//         let yourNum = prompt("Guess the random number between 0-10: ")
//         console.log(`Your entered number: ${yourNum}`)
//         console.log(`Number to guess is: ${num}`)
//         if(num == yourNum)
//             {
//                 console.log("Congrats! You guess the number correctly.")
//                 win = true;
//             }
//     }

//Making a multiplication table

// function multiplicationTable(num)
// {
//     console.log(`${num} x 1 = ${num*1}`)
//     console.log(`${num} x 2 = ${num*2}`)
//     console.log(`${num} x 3 = ${num*3}`)
//     console.log(`${num} x 4 = ${num*4}`)
//     console.log(`${num} x 5 = ${num*5}`)
//     console.log(`${num} x 6 = ${num*6}`)
//     console.log(`${num} x 7 = ${num*7}`)
//     console.log(`${num} x 8 = ${num*8}`)
//     console.log(`${num} x 9 = ${num*9}`)
//     console.log(`${num} x 10 = ${num*10}`)
// }
// num = prompt("Enter a number for its multiplication table: ")
// multiplicationTable(num);

// let names = "monis"
// function changeName()
// {
//     names = "ali";
// }
// changeName();
// console.log(names);

// function welcome()
// {
//     console.log("It will print after 5 seconds!")
// }
// setTimeout(welcome,5000)

// let square = (n) => n*n
// console.log(square(9))

// function display()
// {
//     console.log("Hello world!")
// }

let id = setInterval(() => {
    console.log("Hello World!")
}, 2000);
setTimeout( ()=> {
    clearInterval(id);
},10500)