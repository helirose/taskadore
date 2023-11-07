<script setup>
import { ref, reactive, computed } from 'vue';
import Task from './components/Task.vue';
import NewTask from './components/NewTask.vue';
import Timer from './components/Timer.vue';

let showTaskText = ref("Add new task");
let showNewTask = false;

let tasks = reactive([{
    id: 1,
    title: "Task 1",
    description: "The first task to do some stuff",
    value: 2,
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "The second task to do some other stuff",
    value: 4,
    completed: false,
  },
  {
    id: 3,
    title: "Task 3",
    description: "The third task to do some even more random other stuff",
    value: 1,
    completed: false,
  },
  {
    id: 4,
    title: "Task 4",
    description: "The fourth task to do some stuff",
    value: 3,
    completed: false,
  },
  {
    id: 5,
    title: "Task 5",
    description: "The fifth task to do some other stuff",
    value: 2,
    completed: false,
  },
  {
    id: 6,
    title: "Task 6",
    description: "The sixth task to do some even more random other stuff",
    value: 1,
    completed: false,
  }
]);

const filters = ref([]);

let filterCompleted = computed(() => {
  return (filters.value.includes("filterCompleted")) ? true : false;
});

function addTask(task) {
  tasks.push({
    id: task.id,
    title: task.title,
    description: task.description,
    value: task.value,
    completed: false,
  });
}

function deleteTask(id) {
  let index = tasks.findIndex(task => task.id == id);
  tasks.splice(index, 1);
}

function completeTask(completedTask) {
  completedTask.completed = true;
  let index = tasks.findIndex(task => task.id == completedTask.id);
  tasks.push(tasks.splice(index, 1)[0]);
}

function showNewTaskToggle() {
    showNewTask = !showNewTask;
    if(showNewTask) {
        showTaskText.value = "Hide form";
        // add padding and lower border
    } else {
        showTaskText.value = "Add new task";
        // remove padding and lower border   
    }
}

function check(event) {
}

</script>

<template>
  <header>
    <span class="logo">Taskadore</span>
    <nav>
        <ul>
          <li>Login</li>
        </ul>
      </nav>
  </header>
  <div id="grid">
    <div id="info-block">
      <h1>Timer</h1>
      <Timer class="timer" />
      <button class="action-btn" @click="showNewTaskToggle()">{{ showTaskText }}</button>
    </div>
    <div id="new-task-block">
      <NewTask v-bind:showNewTask="showNewTask" @addTask="addTask" />
    </div>
    <div id="task-actions">
      <form>
        <label for="filterCompleted">Hide completed </label>
        <input name="filterCompleted" v-model="filters" type="checkbox" value="filterCompleted" @change="check($event)" />
      </form>
    </div>
    <Task v-for="task in tasks" :key="task.id" :title="task.title" :description="task.description" :value="task.value" :completed="task.completed" :filterCompleted="filterCompleted" @delete="deleteTask(task.id)" @complete="completeTask(task)" />
  </div>
</template>

<style>
  header {
    width: 100%;
    padding: 10px;
    background: #0066CC;
    box-shadow: 5px 5px 10px #191b22;
    color: #000000;
    margin-bottom: 1em;
    display: flex;
  }

  header span {
    flex: 0 0 50%;
  }

  nav {
    flex: 1 0 50%;
    text-align: right;
  }

  nav ul, nav ul li {
    margin: 0;
    text-indent: 0;
    list-style-type: none;
  }
  
  #info-block, #new-task-block {
    grid-column-start: 1;
    grid-column-end: 4;
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
    color: #ffffff;
  }

  #info-block {
    justify-content: space-between;
  }

  #info-block h1 {
    flex: 0 0 100%;
  }

  #info-block div {
    flex: 0 0 50%;
  }

  #info-block button {
    align-self: flex-end;
  }

  #new-task-block {
    border-top: 1px solid #191b22;
    border-bottom: 1px solid #191b22;
    justify-content: space-around;
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 4;
  }

  #task-actions {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 4;
    text-align: right;
  }

  .action-btn {
    padding: 0.5em;
    margin: 1em 1em 1em 0;
    border-style: solid;
    border-width: 1px;
    border-color: #9c9c9c;
    border-radius: 2px;
  }
  
</style>
