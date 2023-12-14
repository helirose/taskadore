<script setup>
import { ref, reactive, computed } from 'vue';
import Task from '../components/Task.vue';
import NewTask from '../components/NewTask.vue';
import Timer from '../components/Timer.vue';

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

function incompleteTask(incompletedTask) {
  incompletedTask.completed = false;
  let index = tasks.findIndex(task => task.id == incompletedTask.id);
  tasks.unshift(tasks.splice(index, 1)[0]);
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
    <div class="full-block first-row">
        <h1>Timer</h1>
        <timer class="timer" />
        <button class="action-btn" @click="showNewTaskToggle()">{{ showTaskText }}</button>
    </div>
    <div class="full-block second-row" v-if="showNewTask">
        <new-task v-bind:showNewTask="showNewTask" @addTask="addTask" />
    </div>
    <span class="empty-cell empty-cell-left"></span>
    <div id="task-actions">
        <form>
            <label for="filterCompleted">Hide completed </label>
            <input name="filterCompleted" v-model="filters" type="checkbox" value="filterCompleted" @change="check($event)" />
        </form>
    </div>
    <span class="empty-cell empty-cell-right"></span>
    <div id="task-list">
        <task v-for="task in tasks" :key="task.id" :title="task.title" :description="task.description" :value="task.value" :completed="task.completed" :filterCompleted="filterCompleted" @delete="deleteTask(task.id)" @complete="completeTask(task)" @incomplete="incompleteTask(task)" />
    </div>
</template>

<style scoped>
  .full-block.first-row div, .full-block.first-row button {
    flex: 0 1 50%;
  }

  .full-block.first-row button {
    align-self: end;
  }

  .full-block.second-row {
    justify-content: space-around;
  }

  #task-actions {
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 5;
    text-align: right;
    padding: 1em;
    background: #667755;
  }

  #task-list {
    grid-row-start: 5;
    grid-row-end: 6;
    grid-column-start: 2;
    grid-column-end: 5;
    display: flex;
    flex-wrap: wrap;
    column-gap: 1em;
    row-gap: 1em;
    justify-content: space-between;
    align-items: stretch;
  }
  .empty-cell-left, .empty-cell-right {
    grid-row-start: 4;
    grid-row-end: 5;
  }
  
</style>