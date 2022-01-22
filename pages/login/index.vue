<template>
  <div>
    Login

    {{ $store.state.counter }}
    <button class="button button--primary" @click="$store.commit('increment')">
      Login
    </button>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',
})
</script>
