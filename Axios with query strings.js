let url = "http://universities.hipolabs.com/search?name="

let btn = document.querySelector("button")
btn.addEventListener("click",async()=>{
    let country = document.querySelector("input").value
    let colleges = await getColleges(country)
    show(colleges)
})

async function getColleges(country){
    try{
        let res = await axios.get(url+country)
        return res.data
    }
    catch(err){
        console.log(`Error - ${err}`)
        return []
    }
}

function show(colleges){
    let list = document.getElementById("list")
    list.innerText = ""
    for (col of colleges){
        let li = document.createElement("li")
        li.innerText = col.name
        list.appendChild(li)
    }
}