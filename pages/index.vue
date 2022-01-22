<template>
  <div>
    Welcome
    <br>
    <nuxt-link to="/login">Login</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
