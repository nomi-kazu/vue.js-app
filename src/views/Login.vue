<template>
  <div>
    <h3>ログイン</h3>
    <label for="email">Email:</label>
    <input
      type="email"
      id="email"
      v-model="email"
    >
    <br><br>
    <label for="password">Password:</label>
    <input
      type="password"
      id="password"
      v-model="password"
    >
    <br><br>
    <button @click="login">送信</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAeT1blzEwYyoamW6dC-N4XO08PKlYb6yo",
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        })
        .then(response => {
          console.log(response);
        });
        this.email = "";
        this.password = "";
    }
  }
};
</script>
