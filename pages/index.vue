<template>
  <div class="homepage">
    <div>
      Welcome
      <span v-if="$store.state.user.name"> {{ $store.state.user.name }}</span
      >!
    </div>
    <br />
    <nuxt-link v-if="!$store.state.user.name" to="/login" class="homepage__link"
      >Login</nuxt-link
    >
    <nuxt-link v-if="$store.state.user.name" to="/users" class="homepage__link"
      >Users</nuxt-link
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',

  middleware: 'auth',
})
</script>
<style lang="scss" scoped>
.homepage {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__link {
    color: blue;
  }
}
</style>
