<script setup>
import { computed, toRef, ref, reactive, watch } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  value: toString(Number),
  completed: Boolean,
  filterCompleted: Boolean,
});

</script>

<template>
    <div class="taskCard" :class="{complete: this.completed, filter: this.completed && this.filterCompleted}">
        <h2><span v-if="this.completed">Completed: </span>{{ title }}</h2>
        <p>{{ description }}</p>
        <div v-if="!this.completed" class="pomodoro">
            <p><strong>{{ value }}</strong> pomodoros</p>
        </div>
        <div class="buttons">
            <ul>
                <li><button v-if="!this.completed" class="action-btn" @click="$emit('complete')">Complete</button></li>
                <li><button v-if="!this.completed" class="action-btn" @click="$emit('edit')">Edit</button></li>
                <li><button v-if="!this.completed" class="action-btn" @click="$emit('delete')">Delete</button></li>
                <li><button v-if="this.completed" class="action-btn" @click="$emit('incomplete')">Mark incomplete</button></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.taskCard {
    background: #fbfbfb;
    border: 1px solid #191b22;
    color: #303030;
    text-align: left;
    padding: 1em;
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
}

@media screen and (min-width: 900px) {
    .taskCard {
        flex: 1 1 48%;
        max-width: 48%;
    }
}

@media screen and (min-width: 1200px) {
    .taskCard {
        flex: 1 1 32%;
        max-width: 32%;
    }
}

.taskCard h2 {
    font-size: 1.2em;
    border-bottom: 1px solid #d4d4d4;
    font-weight: 600;
    padding: 0.5em 0 1em 0;
    margin: 0;
}

.taskCard p:nth-of-type(1) {
    padding: 1em 0;
    margin: 0;
}

.taskCard .pomodoro p {
    font-size: 1em;
    padding: 1em 0;
    margin: 0;
}

.pomodoro {
    border-top: 1px solid #d4d4d4;
    margin-top: auto;
}

.buttons {
    margin-bottom: 0;
}

.buttons ul li {
    margin: 0.5em 0.2em 0.5em 0;
}

.complete {
    opacity: 0.5;
}

.filter {
    display: none;
}




</style>