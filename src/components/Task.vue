<script setup>

defineProps({
  title: String,
  description: String,
  value: toString(Number),
})

</script>

<template>
    <div class="taskCard">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <p>{{ value }}</p>
        <div class="buttons">
            <button class="action-btn" @click="$emit('edit')">Edit</button>
            <button class="action-btn" @click="$emit('delete')">Delete</button>
        </div>
    </div>
</template>

<style scoped>
.taskCard {
    background: #fbfbfb;
    color: #303030;
    text-align: left;
    padding: 1em;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.taskCard h2 {
    font-size: 1.2em;
    border-bottom: 1px solid #d4d4d4;
    font-weight: 600;
    padding: 0.5em 0 1em 0;
    margin: 0;
}

.taskCard p:nth-of-type(1) {
    border-bottom: 1px solid #d4d4d4;
    padding: 1em 0;
    margin: 0;
}

.taskCard p:nth-of-type(2) {
    text-align: right;
    font-size: 1em;
    padding: 1em 0;
    margin: 0;
}

.buttons {
    margin-top: auto;
    margin-bottom: 0;
}



</style>