<template>
  <div class="login">
   <div class="login__body">
      <h1 class="login__body__title">SIGN IN TO YOUR ACCOUNT</h1>

      <input type="text" class="field field--primary" />

      <input type="password" class="field field--primary mt-2" />

      <div class="flexy-center mt-3">
        <button class="button button--primary">
          Sign In
        </button>
      </div>
      <!-- <nuxt-link to="/">Home</nuxt-link> -->
   </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',
})
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__body {
    max-width: 400px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);

    &__title {
      font-size: 1.15rem;
      font-weight: bold;
      line-height: 1.35;
      letter-spacing: 0.15em;
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }
}

.field {
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;

  &--primary {
    border-color: #ccc;
  }
}
</style>
