<template>
  <div class="page-container">
    <aside class="page-container__sidebar">
      <p>sidebar</p>
      <p>sidebar</p>
      <p>sidebar</p>
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
 }
}
</style>
