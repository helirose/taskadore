<script setup>
import Timer from '../components/Timer.vue';
</script>

<template>
    <div class="full-block first-row">
        <h1>Timer</h1>
        <timer class="timer" />
    </div>
    <span class="empty-cell empty-cell-left"></span>
    <span class="full-block second-row"></span>
    <span class="empty-cell empty-cell-right"></span>
    <div class="full-block third-row">
        <h2>What is a Pomodoro timer?</h2>
        <p>stuff</p>
        <h2>What is Taskadore?</h2>
        <p>Taskadore is a task management app which uses a Pomodoro timer as the main focus. It helps break your workload into manageable chunks called tasks</p>
        <h2>How does it work?</h2>
        <p>Add one or more tasks to your work list by pressing the 'add task' button</p>
        <h3>Creating a task</h3>
        <h3>Starting the timer</h3>
    </div>
</template>

<style scoped>
.full-block.second-row {
    display: block;
    height: 1em;
    background: #667755;
}

.empty-cell-left, .empty-cell-right {
    grid-row-start: 3;
    grid-row-end: 4;
}
</style>