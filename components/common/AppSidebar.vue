<template>
  <div class="page-container">
    <aside class="page-container__sidebar">
      <nuxt-link to="/" class="page-container__sidebar__link">
        Home
      </nuxt-link>
      <nuxt-link to="/users" class="page-container__sidebar__link">
        Users
      </nuxt-link>
      <nuxt-link to="#" class="page-container__sidebar__link">
        Others
      </nuxt-link>
    </aside>

    <div :class="containerClass">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppSidebar',

  props: {
    containerClass: {
      type: [String, Array, Object],
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.page-container {
 display: flex;
 gap: 10px;
 padding: 20px;
 height: 100%;
 max-width: 1200px;
 margin: 0 auto;
//  border: 1px solid red;

 &__sidebar {
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ccc;
    // padding: 0 1px;

    &__link {
      border-top: 1px solid #303030;
      border-bottom: 1px solid #303030;
      padding: 15px 0;
      margin-bottom: 25px;
      font-size: 19px;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: rgb(44, 30, 236);
      }
    }
 }
}
</style>
