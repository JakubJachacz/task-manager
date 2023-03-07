let tasks = [
  {
    content: "zrobić task manager",
    done: false,
  },
  {
    content: "zrobić pracę domową",
    done: true,
  },
];

let HideDoneTasks = false;

const addNewTask = (newTaskContent) => {
  const newTask = {
    content: newTaskContent,
    done: false,
  };

  tasks = [...tasks, newTask];

  render();
};

const removeTask = (taskIndex) => {
  const newTasks = [...tasks];
  newTasks.splice(taskIndex, 1);
  tasks = newTasks;
  render();
};

{
const toggleTaskDone = (taskIndex) => {
  const newTasks = [...tasks];
  newTasks[taskIndex] = {
    ...newTasks[taskIndex],
    done: !newTasks[taskIndex].done,
  };
  tasks = newTasks;
  render();
};

const markAllTasksDone = () => {
  tasks = tasks.map((task) => ({
    ...task,
    done: true,
  }));
  render();
}

const hideDoneTasks = () => {
  hideDoneTasks = !hideDoneTasks;
  render();
}

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

const renderButtons = () => {
  const buttonsElement = document.querySelector(".js-buttons");

  if (!tasks.length) {
    buttonsElement.innerHTML = "";
    return;
  }


buttonsElement.innerHTML = `
<button class="buttons__button js-hideDoneTasks">
${hideDoneTasks ? "Pokaż " : "Ukryj "} ukończone
</button>
<button class="buttons_button js-markAllDone"
${tasks.every(({ done }) => done) ? " disabled" : ""}>
Ukończ wszystkie
</button>
`;

const bindButtonEvents = () => {
  const markAllDoneButton = document.querySelector(".js-markAllDone");

  if (markAllDoneButton) {
    markAllDoneButton.addEventListener("click", markAllTasksDone);
  }

  const toggleHideDoneTasks = document.querySelector(".js-hideDoneTasks")
};

if (toggleHideDoneTasks) {
  toggleHideDoneTasks.addEventListener("click", toggleHideDoneTasks);
}

const renderTasks = () => {
  render();
  bindButtonEvents();
  toggleDoneButtons();

  renderButtons();
  bindButtonEvents();
};

const init = () => {
  render();

  const form = document.querySelector(".js-form");

  form.addEventListener("submit", onFormSubmit);
};

const setFocus = () => {
  document.querySelector(".js-newTask").focus();
};

init();
}
}