<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number='number' @my-click='incrementNumber'></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input 
        id="title"
        type="title"
        v-model.lazy="eventData.title"
      >
      <p>{{ eventData.title }}</p>

      <label for="maxNumber">最大人数</label>
      <input 
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      >
      <p>{{ eventData.maxNumber }}</p>

      <label for="host">主催者</label>
      <input 
        id="host"
        type="title"
        v-model.trim="eventData.host"
      >
      <pre>{{ eventData.host }}</pre>

      <label for="detail">イベントの内容</label>
      <textarea
        id="detail"
        cols="30"
        rows="10"
        v-model="eventData.detail"
      ></textarea>
      <p style="white-space: pre;">{{ eventData.detail }}</p>
      <input
        type="checkbox"
        id="isPrivate"
        v-model="eventData.isPrivate"
      >
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate}}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';


export default {
  data() {
    return { 
      number: 10,
      currentComponent: 'Home',
      eventData: {
        title: "",
        maxNumber: 0,
        host: '',
        detail: '',
        isPrivate: false
      }
    }
  },
  components: {
    LikeHeader,
    About,
    Home
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
}
</script>
