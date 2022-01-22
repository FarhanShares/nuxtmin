<template>
  <div class="login">
    <form class="login__body">
      <h1 class="login__body__title">SIGN IN TO YOUR ACCOUNT</h1>

      <input
        v-model="form.username"
        type="text"
        class="field field--primary"
        autofocus
      />

      <input
        v-model="form.password"
        type="password"
        class="field field--primary mt-2"
      />

      <div class="flexy-center mt-1" style="color: red; height: 10px">
        {{ error }}
      </div>

      <div class="flexy-center mt-3">
        <button
          type="submit"
          class="button button--primary"
          :disabled="busy"
          @click="onLogin"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',

  data: () => ({
    busy: false,
    error: '',

    form: {
      username: '',
      password: '',
    },
  }),

  methods: {
    onLogin() {
      this.busy = true
      setTimeout(() => {
        this.$store
          .dispatch('login', { ...this.form })
          .then((e) => {
            console.log('on', e)
            this.$router.push({ name: 'users' })
          })
          .catch((e) => {
            console.log('error', e)
            this.error = 'Login Failed! Invalid username or password!'
            setTimeout(() => {
              this.error = ''
            }, 3000)
          })
          .finally(() => (this.busy = false))
      }, 500)
    },
  },
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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

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

  &:focus {
    border: 1px solid blue;
  }

  &--primary {
    border-color: #ccc;
    background-color: rgb(238, 246, 250);
  }
}
</style>
