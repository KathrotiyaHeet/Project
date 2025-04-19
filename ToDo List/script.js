const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let newTask = document.createElement('li');
        newTask.textContent = inputBox.value;
        listContainer.appendChild(newTask);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        newTask.appendChild(span);
    };

    inputBox.value = "";
    saveData();
};

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
};

function loadData() {
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
};

window.onload = loadData;