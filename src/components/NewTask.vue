<script setup>
import { ref } from 'vue'

const emit = defineEmits('addTask');
var showNewTask = ref(false);
var showTaskText = ref("Add new task");

const form = {
  title: '',
  description: '',
  value: 0
}

function addTask() {
    emit('addTask', form);

    form.title = '';
    form.description = '';
    form.value = 0;
}

function showNewTaskToggle() {
    showNewTask.value = !showNewTask.value;
    if(showNewTask.value) {
        showTaskText.value = "Hide form";
    } else {
        showTaskText.value = "Add new task";
    }

}
</script>

<template>
    <div>
        <button class="action-btn" @click="showNewTaskToggle()">{{ showTaskText }}</button>
        <transition>
            <form v-if="showNewTask" class="addTask" v-on:submit.prevent="addTask()">
                <span>
                    <label for="title">Title</label>
                    <input id="title" name="title" v-model="form.title" type="text" autocomplete="off" />
                </span>
                <span>
                    <label for="description">Description</label>
                    <input id="description" name="description" v-model="form.description" type="text" autocomplete="off" />
                </span>
                <span>
                    <label for="value">Value</label>
                    <div class="value-control">
                        <button aria-label="increment">&#x25B2;</button>
                        <input id="value" name="value" v-model="form.value" type="number" autocomplete="off" />
                        <button aria-label="decrement">&#x25BC;</button>
                    </div>
                </span>
                <input class="action-btn" type="submit" value="Add new task">
            </form>
        </transition>
    </div>
</template>

<style scoped>

.addTask label {
    display: inline-block;
    padding: 0.5em;
}

/* .fadeIn {
    transition: opacity 1s ease-in;
} */

.v-enter-active, .v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

.addTask {
    background: #fbfbfb;
    border: 2px dashed #d4d4d4;
    color: #303030;
    text-align: left;
    padding: 1em;
    margin: 0;
}

.addTask span {
    width: 100%;
    display: flex;
    margin-bottom: 1em;
    row-gap: 1em;
}

.addTask span * {
    flex: 0 1 50%;
    display: inline-block;
    box-sizing: border-box;
}

.addTask span .value-control button {
    width: 25%;
    font-size: 1em;
    padding: 0.5em;
    margin: 0;
    box-sizing: border-box;
    display: inline-block;
    outline: none;
    border: none;
    box-shadow: none;
}

.addTask span .value-control :nth-child(1) {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    border-left: 1px solid #9c9c9c;
    border-top: 1px solid #9c9c9c;
    border-bottom: 1px solid #9c9c9c;
}

.addTask span .value-control :nth-child(3) {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-right: 1px solid #9c9c9c;
    border-top: 1px solid #9c9c9c;
    border-bottom: 1px solid #9c9c9c;
}

.addTask span .value-control input#value {
    width: 50%;
    font-size: 1em;
    padding: 0.5em;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border-left: none;
    border-right: none;
    border-top: 1px solid #9c9c9c;
    border-bottom: 1px solid #9c9c9c;
}

/* .addTask input, .addTask input:focus {
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    outline: none;
    box-shadow: none;
    border: none;
    width: 100%;
}

.addTask input#title {
    font-size: 1.2em;
    border-bottom: 1px solid #d4d4d4;
    font-weight: 600;
    padding: 0.5em 0 1em 0;
    margin: 0;
}

.addTask input#description {
    border-bottom: 1px solid #d4d4d4;
    padding: 1em 0;
    margin: 0;
    font-size: 1em;
}

.addTask input#value {
    text-align: right;
    font-size: 1em;
    padding: 1em 0;
    margin: 0;
} */

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input::-webkit-outer-spin-button:before, input[type="number"]:before {
    content: "sldkjfskdfhkdsjfhdkf";
    color: #000000;
}

/* Firefox */
input[type="number"], 
input[type="number"]:focus  {
    -moz-appearance: textfield;
}

</style>