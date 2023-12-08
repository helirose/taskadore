<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    <div>
        <form id="signup-form">
            <label for="email">Email: </label>
            <input name="email" type="email" required>
            <label for="email-confirm">Confirm email: </label>
            <input name="email-confirm" type="email" required>
            <label for="password">Password: </label>
            <input name="password" type="password" required>
            <label for="password-confirm">Confirm password: </label>
            <input name="password-confirm" type="password" minLength="8" required>
        </form>
    </div>
</template>