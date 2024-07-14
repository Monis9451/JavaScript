let gameSeq = []
let userSeq = []
let btns = ["box_1","box_2","box_3","box_4"]
let started = false
let lvl = 0
let highestScore = 0
h2 = document.querySelector("h2")

document.addEventListener("keydown", function(event)
{
    if(started == false)
    {
        started = true
        lvlUp()
    }
})

let allBtns = document.querySelectorAll(".inner_box")
for (btn of allBtns)
{
    btn.addEventListener("click", btnPress)
}

function lvlUp()
{
    userSeq = []
    lvl++
    h2.innerText = `Level ${lvl}`
    let rand = Math.floor(Math.random()*4)
    let randBox = btns[rand]
    let randBtn = document.querySelector(`.${randBox}`)
    gameSeq.push(randBox)
    console.log(gameSeq)
    btnFlash(randBtn)
}

function btnFlash(btn)
{
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}

function chkSeq(idx)
{
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(lvlUp,500)
        }
    }else{
        if(lvl>highestScore){
            highestScore = lvl
        }
        h2.innerHTML = `Game over! Your score is <b>${lvl}</b><br>Your highest score is ${highestScore}<br> Press any key to start again`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white"
        },150)
        reset()
    }
}

function btnPress()
{
    let btn = this
    btnFlash(btn)
    
    let userColor = btn.getAttribute("id")
    console.log(userColor)
    userSeq.push(userColor)
    chkSeq(userSeq.length-1)
}

function reset()
{
    started = false
    gameSeq = []
    userSeq = []
    lvl = 0
}