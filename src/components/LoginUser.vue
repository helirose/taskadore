<script setup>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { ref, watchEffect } from 'vue';

const props = defineProps({
    signupModeInitial: Boolean,
});

const signupMode = ref(props.signupModeInitial);


watchEffect(() => {
  signupMode.value = props.signupModeInitial;
});

var email = '';
var password = '';
var emailConfirm = '';
var passwordConfirm = '';

function loginUser() {

}

function newUser() {

}

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

</script>

<template>
  <form id="signup-form">
      <label for="email">Email: </label>
      <input name="email" type="email" required>
      <label v-if="signupMode" for="email-confirm">Confirm email: </label>
      <input v-if="signupMode" name="email-confirm" type="email">
      <label for="password">Password: </label>
      <input name="password" type="password" minLength="8" required>
      <label v-if="signupMode" for="password-confirm">Confirm password: </label>
      <input v-if="signupMode" name="password-confirm" type="password" minLength="8">
      <button v-if="!signupMode" type="submit">Login</button>
      <button v-if="signupMode" type="submit">Signup</button>
  </form>
</template>

<style scoped>
  form {
    flex: 0 0 100%;
  }
  form label, form input {
    display: inline-block;
  }
  form label {
    width: 30%;
  }
  form input {
    width: 70%;
    margin-bottom: 1em;
  }
</style>