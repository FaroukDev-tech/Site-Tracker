let mySites = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const clearBtn = document.getElementById("clear-btn")
const outputBtn = document.getElementById("output-btn")
const deleteBtn = document.getElementById("delete-btn")
const sitesFromLocalStorage = JSON.parse(localStorage.getItem("Sites"))

if (sitesFromLocalStorage) {
    mySites = sitesFromLocalStorage
    renderSites() 
} else {
    ulEl.innerHTML = `<p style="font-style:italic">Nothing saved yet.</p>`
}

inputBtn.addEventListener("click", function (){
    if (mySites.length===0)
        ulEl.innerHTML = ""
    mySites.push(inputEl.value); 
    ulEl.innerHTML += `<li><a href=${inputEl.value} target="_blank">${inputEl.value}</a>`
    inputEl.value = "";
    localStorage.setItem("Sites", JSON.stringify(mySites))
})

outputBtn.addEventListener("click", function () {
    if (mySites.length===0)
        ulEl.innerHTML = `<p style="font-style:italic">Nothing saved yet.</p>`
    else
        renderSites()
}) 

clearBtn.addEventListener("click", function (){
    ulEl.innerHTML = ""
})

deleteBtn.addEventListener("dblclick", function (){
    localStorage.clear()
    ulEl.innerHTML = ""
    mySites = []
})

function renderSites(){
    ulEl.innerHTML = "";
    for (let i=0; i < mySites.length; i++){
        ulEl.innerHTML += `<li><a href=${mySites[i]} target="_blank">${mySites[i]}</a>`
    }
}
















