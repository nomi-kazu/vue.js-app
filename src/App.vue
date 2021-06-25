<template>
  <div>
    <LikeHeader>
      <template v-slot:title="slotProps">
        <h2>こんにちは</h2>
        <h2>{{ slotProps.user.firstName }}</h2>
      </template>
      <h3>はじめまして</h3>
      <p>よろしく</p>
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
    </LikeHeader>
    <LikeNumber :total-number='number' @my-click='incrementNumber'></LikeNumber>
    <LikeNumber :total-number='number'></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';

export default {
  data() {
    return { 
      number: 10
    }
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
