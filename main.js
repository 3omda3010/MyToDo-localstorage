const task = document.querySelector(".tasktxt");
const addTask = document.querySelector("button");
const ul = document.querySelector("ul");

addTask.addEventListener("click", (e) => {
    if(task.value === ""){
        console.log("You have to write some thing")
    }else{
        let taskTxt = task.value.trim();
        // creat li
        let tasks = document.createElement("li");
        tasks.classList.add("task")
        // create delete button
        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delete");
        // appending Child
        tasks.append(taskTxt);
        tasks.appendChild(delBtn);
        ul.appendChild(tasks);
        task.value = "";
        saveData();
    }
});

ul.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", ul.innerHTML);
}
function showData() {
    ul.innerHTML = localStorage.getItem("data");
}
showData()