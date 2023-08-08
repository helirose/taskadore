<script setup>
import { ref, computed, reactive } from 'vue';

var hours = ref(0);
var minutes = ref(25);
var seconds = ref(0);
var activeTab = 'pomodoro';
var timerInterval;

function startTimer() {
    timerInterval = setInterval(function() {

        if(seconds.value == 0) {
            seconds.value = 59;
            minutes.value--;
        } else {
            seconds.value--;
        }
        
    }, 1000);
}

const displayHours = computed(() => {
    return hours.value.toString().padStart(2, 0);
});
const displayMinutes = computed(() => {
    return minutes.value.toString().padStart(2, 0);
});
const displaySeconds = computed(() => {
    return seconds.value.toString().padStart(2, 0);
});

function setTime(time) {

    if(typeof time === "string") {
        activeTab = time;
    } else {
        activeTab = time.target.value;
    }

    switch(activeTab) {
        case "pomodoro":
            hours.value = 0;
            minutes.value = 25;
            seconds.value = 0;
            break;
        case "short":
            hours.value = 0;
            minutes.value = 5;
            seconds.value = 0;
            break;
        case "long":
            hours.value = 0;
            minutes.value = 15;
            seconds.value = 0;
            break;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    setTime(activeTab);
}

</script>

<template>
    <div>
        <button class="timer-tab" @click="setTime($event)" value="pomodoro">Pomodoro</button>
        <button class="timer-tab" @click="setTime($event)" value="short">Short Break</button>
        <button class="timer-tab" @click="setTime($event)" value="long">Long Break</button>
        <span class="clock">{{ displayHours }}:{{ displayMinutes }}:{{ displaySeconds }}</span>
        <button class="action-btn" @click="startTimer()">Start</button>
        <button class="action-btn" @click="stopTimer()">Stop</button>
        <button class="action-btn" @click="resetTimer()">Reset</button>
    </div>
</template>

<style scoped>
.clock {
    display: block;
    font-size: 3em;
}

.timer-tab {
    padding: 0.5em;
    margin: 1em 1em 1em 0;
    border: none;
}

.timer-action {
    padding: 0.5em;
    margin: 1em 1em 1em 0;
}

</style>