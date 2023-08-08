<script setup>
import { ref, reactive } from 'vue';
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
  },
  {
    id: 2,
    title: "Task 2",
    description: "The second task to do some other stuff",
    value: 4,
  },
  {
    id: 3,
    title: "Task 3",
    description: "The third task to do some even more random other stuff",
    value: 1,
  },
  {
    id: 4,
    title: "Task 4",
    description: "The fourth task to do some stuff",
    value: 3,
  },
  {
    id: 5,
    title: "Task 5",
    description: "The fifth task to do some other stuff",
    value: 2,
  },
  {
    id: 6,
    title: "Task 6",
    description: "The sixth task to do some even more random other stuff",
    value: 1,
  }
]);

function addTask(task) {
  tasks.push({
    id: task.id,
    title: task.title,
    description: task.description,
    value: task.value
  });
}

function deleteTask(id) {
  let index = tasks.findIndex(task => task.id == id);
  tasks.splice(index, 1);
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
</script>

<template>
  <div id="grid">
    <div id="info-block">
      <h1>Taskadore</h1>
      <Timer class="timer" />
      <button class="action-btn" @click="showNewTaskToggle()">{{ showTaskText }}</button>
    </div>
    <div id="new-task-block">
      <NewTask v-bind:showNewTask="showNewTask" @addTask="addTask" />
    </div>
    <Task v-for="task in tasks" :key="task.id" :title="task.title" :description="task.description" :value="task.value" @delete="deleteTask(task.id)" />
  </div>
</template>

<style>
  #info-block, #new-task-block {
    grid-column-start: 1;
    grid-column-end: 4;
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
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
    border-top: 1px solid #d4d4d4;
    border-bottom: 1px solid #d4d4d4;
    justify-content: space-around;
    grid-row-start: 2;
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
