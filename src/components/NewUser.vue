<script setep>
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
        <form>
            <label for="email">Email: </label>
            <input name="email" type="email">
            <label for="email-confirm">Confirm email: </label>
            <input name="email-confirm" type="email">
            <label for="password">Password: </label>
            <input name="password" type="password">
            <label for="password-confirm">Confirm password: </label>
            <input name="password-confirm" type="password">
        </form>
    </div>
</template>