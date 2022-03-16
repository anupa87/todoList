let taskArray = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task"))
  : [];
//Saving it locally//
localStorage.setItem("task", JSON.stringify(taskArray));

const date = new Date();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayName = weekdays[date.getUTCDay()];
const day = date.getUTCDate();
const month = date.getMonth() + 1;
const year = date.getUTCFullYear();

// Display date //
const displayDate = document.querySelector("#displayDate");

displayDate.innerHTML = `${dayName}, ${day}. ${month}. ${year}`;

// Create list //
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.getElementById("addTask");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  listMaker(input.value);
  input.value = "";
});

const listMaker = (text) => {
  const list = document.createElement("li");
  const checkbox = document.createElement("input");
  const deleteBtn = document.createElement("span");
  const deleteIcon = document.createElement("i");

  list.classList.add("todoListItem");
  list.textContent = text;

  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";

  deleteBtn.classList.add("delBtn");
  deleteIcon.classList.add("fa-solid");
  deleteIcon.classList.add("fa-xmark");

  checkbox.addEventListener("change", toggleDone);
  deleteBtn.addEventListener("click", function removeItem(e) {
    e.target.parentNode.parentNode.remove();
  });

  list.appendChild(checkbox);
  list.appendChild(deleteBtn);
  deleteBtn.appendChild(deleteIcon);
  ul.appendChild(list);
};

const toggleDone = (event) => {
  let checkbox = event.target;
  if (checkbox.checked) {
    checkbox.parentNode.classList.add("markedDone");
    checkbox.parentNode.classList.remove("markedUnDone");
  } else {
    checkbox.parentNode.classList.add("markedUnDone");
    checkbox.parentNode.classList.remove("markedDone");
  }
};

//Clear all//
const clearAllTodo = () => {
  const allList = document.querySelectorAll(".todoListItem");
  allList.forEach((item) => {
    item.remove();
  });
};
