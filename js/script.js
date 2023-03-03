const tasks = [
  {
    content: "zrobić task manager",
    done: false,
  },
  {
    content: "zrobić pracę domową",
    done: true,
  },
];

const addNewTask = (newTaskContent) => {
  tasks.push({
    content: newTaskContent,
    done: false,
  });

  render();
};

const removeTask = (taskIndex) => {
  tasks.splice(taskIndex, 1);
  render();
};

const toggleTaskDone = (taskIndex) => {
  tasks[taskIndex].done = !tasks[taskIndex].done;
  render();
};

const bindEvents = () => {
  const removeButtons = document.querySelectorAll(".js-remove");

  removeButtons.forEach((removeButton, index) => {
    removeButton.addEventListener("click", () => {
      removeTask(index);
    });
  });

  const toggleDoneButtons = document.querySelectorAll(".js-done");

  toggleDoneButtons.forEach((toggleDoneButton, index) => {
    toggleDoneButton.addEventListener("click", () => {
      toggleTaskDone(index);
    });
  });
};

const render = () => {
  let htmlString = "";

  for (const task of tasks) {
    htmlString += `
      <li class="tasks__item">
      <button class="tasks__button--done js-done">${task.done ? "🗸" : ""}</button>
      <span class="tasks__content"${task.done ? ' style="text-decoration: line-through;"' : ""}>${task.content}</span>
      <button class="tasks__button--remove js-remove">🗑</button>
    </li>
      `;
  }

  document.querySelector(".js-tasks").innerHTML = htmlString;

  bindEvents();
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const newTaskContent = document.querySelector(".js-newTask").value.trim();

  if (newTaskContent === "") {
    return;
  }

  addNewTask(newTaskContent);

  document.querySelector(".js-newTask").value = "";
};

const init = () => {
  render();

  const form = document.querySelector(".js-form");

  form.addEventListener("submit", onFormSubmit);

  document.querySelector(".js-newTask").focus();
};

init();
