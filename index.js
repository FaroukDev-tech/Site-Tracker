let mySites = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const clearBtn = document.getElementById("clear-btn")
const outputBtn = document.getElementById("output-btn")

inputBtn.addEventListener("click", function (){
    mySites.push(inputEl.value); 
    ulEl.innerHTML += `<li><a href=${inputEl.value} target="_blank">${inputEl.value}</a>`
    inputEl.value = null;
    localStorage.setItem("Sites", JSON.stringify(mySites))
})

outputBtn.addEventListener("click", function () {
    renderSites()
})

clearBtn.addEventListener("click", function (){
    ulEl.innerHTML = ""
    localStorage.clear()
})

function renderSites(){
    let sites = localStorage.getItem("Sites")
    sites = JSON.parse(sites)

    ulEl.innerHTML = "";
    for (let i=0; i < sites.length; i++){
        ulEl.innerHTML += `<li><a href=${sites[i]} target="_blank">${sites[i]}</a>`
    }
}
















