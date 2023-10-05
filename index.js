let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
let textEl = document.getElementById("text");
const ulEl = document.getElementById("ul-el");
const clearBtn = document.getElementById("clear-btn")

inputBtn.addEventListener("click", function (){
    //ulEl.innerHTML += '<li><a target="_blank" href="'+inputEl.value+'">' + inputEl.value + '</a></li>';
    ulEl.innerHTML += `
        <li>
            <a target="_blank" href="${inputEl.value}">
                ${inputEl.value}
            </a>
        </li>`;
    // const li = document.createElement("li")
    // li.textContent = inputEl.value
    // ulEl.append(li)
    inputEl.value = null;
})

clearBtn.addEventListener("click", function (){
    ulEl.innerHTML = "";
})
















