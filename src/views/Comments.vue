<template>
  <div>
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
    <div
      v-for="post in posts"
      :key="post.name"
    >
    <br><br>
      <div>名前：{{ post.fields.name.stringValue }}</div>
      <div>コメント：{{ post.fields.comment.stringValue }}</div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    };
  },
  created() {
    axios
      .get(
        'https://firestore.googleapis.com/v1/projects/vuejs-http-18662/databases/(default)/documents/comments'
      )
      .then(response => {
        this.posts = response.data.documents;
      });
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
      this.name = "";
      this.comment = "";
    }
  }
};
</script>

<style scoped>