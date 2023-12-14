<script setup>
import LoginUser from '../components/LoginUser.vue';
import { ref } from 'vue'

let loggedIn = false;
const signupMode = ref(false);
let formChangeText = "Go to signup";

function change() {
    signupMode.value = !signupMode.value;
    if(signupMode.value == false) {
        formChangeText = "Go to signup";
    } else {
        formChangeText = "Return to login";
    }
}

</script>

<template>
    <div v-if="!loggedIn" class="login-container">
        <h1>Login or Register</h1>
        <div id="login-block">
            <h2>Login</h2>
            <p>Already have an account? Sign in here. If you're new to Taskadore you can make a new account by clicking the 'Register' button.</p>
            <login-user :signup-mode-initial="signupMode" />
            <button @click="change()">{{formChangeText}}</button>
        </div>
    </div>
    <div v-else class="login-container">
        <h1>My account</h1>
        <div id="account-block">
        </div>
    </div>
</template>

<style scoped>
    .login-container {
        grid-column-start: 2;
        grid-column-end: 5;
        justify-content: space-around;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    h1 {
        display: block;
        width: 100%;
    }
</style>