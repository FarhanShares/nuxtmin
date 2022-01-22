<template>
  <div>
    Users

    {{ users }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UsersPage',

  data() {
    return {
      users: [],
    }
  },

  async fetch() {
    this.users = await this.$axios.get('/api/users.json')
      .then(response => response.data)
      .catch(e => console.log('fetch error', e))
  },
})
</script>
