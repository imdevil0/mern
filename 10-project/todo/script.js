const inputTag = document.getElementById("input");
const ulContainer = document.getElementById("list");
const countContainer = document.getElementById("task-count");
const allBtn = document.getElementById("filter-all");
const pendingBtn = document.getElementById("filter-pending");
const completedBtn = document.getElementById("filter-completed");

const arr = [];
let nextId = 1;

// Add Task
function addTask() {
  const val = inputTag.value.trim();

  if (val === "") {
    alert("Please enter a task.");
    return;
  }

  const newEntry = {
    id: nextId++,
    title: val,
    completed: false,
  };

  arr.push(newEntry);

  renderList();
  inputTag.value = "";
}

// Delete Task
function onDelete(id) {
  const index = arr.findIndex((task) => task.id === id);

  if (index !== -1) {
    arr.splice(index, 1);
  }

  renderList();
}

// Toggle Task
function updateTask(id) {
  const task = arr.find((task) => task.id === id);

  if (task) {
    task.completed = !task.completed;
  }

  renderList();
}

// Clear Completed
function clearCompleted() {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].completed) {
      arr[i].completed = false;
    }
  }

  renderList();
}
function filterTasks(filterType) {
  let filteredTasks = [];

  switch (filterType) {
    case "pending":
      filteredTasks = arr.filter((task) => !task.completed);
      updateFilterButtons(pendingBtn);
      break;

    case "completed":
      filteredTasks = arr.filter((task) => task.completed);
      updateFilterButtons(completedBtn);
      break;

    default:
      filteredTasks = arr;
      updateFilterButtons(allBtn);
      break;
  }

  ulContainer.innerHTML = "";

  filteredTasks.forEach((task) => {
    ulContainer.appendChild(generateLi(task));
  });

  updateTaskCount();
}

// Update Counter
function updateTaskCount() {
  const completed = arr.filter((task) => task.completed).length;

  countContainer.textContent = `${completed} of ${arr.length} tasks completed`;
}

// Render All Tasks
function renderList() {
  ulContainer.innerHTML = "";

  arr.forEach((task) => {
    ulContainer.appendChild(generateLi(task));
  });

  updateTaskCount();
}

// Create LI
function generateLi(task) {
  const li = document.createElement("li");

  li.innerHTML = `
    <input
      type="checkbox"
      ${task.completed ? "checked" : ""}
      onchange="updateTask(${task.id})"
    />

    <span class="${task.completed ? 'task-completed' : ''}">${task.title}</span>

    <button onclick="onDelete(${task.id})">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-trash"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
        />
        <path
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
        />
      </svg>
    </button>
  `;

  return li;
}


function updateFilterButtons(activeButton) {
  const buttons = [allBtn, pendingBtn, completedBtn];

  //update the active button class dynamically based on the selected filter
  buttons.forEach((button) => {
    if (button === activeButton) {
      button.classList.add("active-filter");
    } else {
      button.classList.remove("active-filter");
    }
  });
}