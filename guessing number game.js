let win = false;
while(win == false)
    {
        let num = Math.floor(Math.random()*10);
        let yourNum = prompt("Guess the random number between 0-10: ")
        console.log(`Your entered number: ${yourNum}`)
        console.log(`Number to guess is: ${num}`)
        if(num == yourNum)
            {
                console.log("Congrats! You guess the number correctly.")
                win = true;
            }
    }