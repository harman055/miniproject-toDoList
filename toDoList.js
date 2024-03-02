const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let popUp = document.getElementById("popUp");
let yesBtn = document.querySelector(".yesButton");
let noBtn = document.querySelector(".noButton");


const addTask = () => {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
};

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.addEventListener("click", showPopUp(e));
    }
});

const showPopUp = (e) => {
    popUp.classList.add("open-popUp");

    yesBtn.addEventListener("click", () => {
        e.target.parentElement.remove()
        popUp.classList.remove("open-popUp");
        saveData();
    });
    noBtn.addEventListener("click", () => {
        popUp.classList.remove("open-popUp");
        saveData();
    });

}

const closePopUp = () => {
    popUp.classList.remove("open-popUp");
}


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
};

function showTask() {
    let data = localStorage.getItem("data");
    listContainer.innerHTML = data;
    console.log("Data shown:", data);
}
showTask();

