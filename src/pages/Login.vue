<script setup>
import LoginUser from '../components/LoginUser.vue';
import { ref } from 'vue'

let loggedIn = false;
const signupMode = ref(false);
let formChangeText = "Go to signup";
let loginTitleText = "Login";

function change() {
    signupMode.value = !signupMode.value;
    if(signupMode.value == false) {
        formChangeText = "Go to signup";
        loginTitleText = "Login";
    } else {
        formChangeText = "Return to login";
        loginTitleText = "Register";
    }
}

</script>

<template>
    <div v-if="!loggedIn" class="full-block first-row">
        <h1>Login or Register</h1>
        <h2>{{loginTitleText}}</h2>
        <p>Already have an account? Sign in here. If you're new to Taskadore you can make a new account by clicking the 'Go to signup' button.</p>
        <login-user :signup-mode-initial="signupMode" />
        <button @click="change()">{{formChangeText}}</button>
    </div>
    <div v-else class="full-block first-row">
        <h1>My account</h1>
        <div id="account-block">
        </div>
    </div>
</template>

<style scoped>
.full-block.first-row {
  justify-content: space-around;
}
</style>