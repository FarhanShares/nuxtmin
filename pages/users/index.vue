<template>
  <div>
    Users
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UsersPage',

  fetch() {
    return this.$axios.get('/api/users')
      .then(response => response.data)
  },
})
</script>
