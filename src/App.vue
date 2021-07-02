<template>
  <div id="app">
    <h3>投稿する</h3>
    <label for="name">ニックネーム</label>
    <input
      type="text"
      id="name"
      v-model="name"
    >
    <br><br>
    <label for="comment">コメント </label>
    <textarea
      id="comment"
      v-model="comment"
    ></textarea>
    <br><br>
    <button @click="createComment">サーバーに送信</button>
    <h2>掲示板</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      comment: ""
    };
  },
  methods: {
    createComment() {
      axios
        .post(
          'https://firestore.googleapis.com/v1/projects/vuejs-http-18662/databases/(default)/documents/comments',
          {
            fields: {
              name: {
                stringValue: this.name
              },
              comment: {
                stringValue: this.comment
              }
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      this.name = "";
      this.comment = "";
    }
  }
};
</script>

<style scoped>

</style>
