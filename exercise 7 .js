//-------------------------------------------------task 1
// const arrayAverage = (Arr) =>
    // {
//     let total=0;
//     for(let i=0;i<Arr.length;i++)
//     {
//         total+=Arr[i];
//     }
//     let average = (total/Arr.length)
//     console.log(`The average of the numbers of this array is: ${average}`)
// }
// arr = [3,6,1,9,6,3,7]
// arrayAverage(arr);

//-------------------------------------------------task 2

// const isEven = (num) =>
// {
//     if(num%2 == 0)
//     {
//         console.log("The number is even.")
//     }
//     else
//     {
    //         console.log("The number is odd")
    //     }
    // }
    
    // isEven(621);


    //-------------------------------------------------task 3

//     function outerfunc()
//     {
//         function innerFunc()
//         {
//             console.log(`The value of x is: ${x}`);
//         }
//         let x = 5;
//         innerFunc();
//         console.log(this);
//     }
// outerfunc();

//checking reduce function
// arr = [1,2,3,4]
// arr2 = arr.reduce((R,E)=>R*E)
// console.log(arr)
// console.log(arr2)

//a function to check is every element is divisible by 10 or not
// arr = [10,20,30,40,50,60,110,100347820]
// check = arr.every((el) => (el%10==0));
// console.log(check)

//finding the minimum number in the arry
// arr=[4,6,1,3,6,8,99,-3,34,562,21]
// ans = arr.reduce((R,E) => {
    //     if(R>E)
//     {return E}
//     else{return R}
// })
// console.log(`This is the smallest value of the array: ${ans}`)

//Finding the the smallest is arry using spread function.
// arr=[4,6,1,3,6,8,99,-3,34,562,21]
// function min (ar)
// {
//     return arr.reduce((R,E) => 
//     {
//         if(R>E)
//         {return E}
//         else{ return R}
//     })
// }
// ans = min(...arr)
// console.log(ans)
