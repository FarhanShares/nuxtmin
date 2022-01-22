<template>
    <AppSidebar container-class="user-container">

     <div class="user-card">
        <div v-for="user in users" :key="user.id" class="user-card__item">
          <img :src="user.image" class="user-card__item__image" />
        </div>
        <div class="user-card__item"></div>
        <div class="user-card__item"></div>
     </div>
    </AppSidebar>

</template>

<script lang="ts">
import Vue from 'vue'
import AppSidebar from '~/components/common/AppSidebar.vue'

export default Vue.extend({
  name: 'UsersPage',

  components: { AppSidebar },

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

<style lang="scss">
.user-container {
   margin: 0 auto;
}
.user-card {
			--auto-grid-min-size: 0;
      --grid-cols: 4;
			display: grid;
			grid-gap: 4rem;
			grid-template-columns: repeat(var(--grid-cols), minmax(var(--auto-grid-min-size), 1fr));
			padding: 0;
			box-sizing: border-box;

    &__item {
      cursor: pointer;

      &__image {
        width: 170px;
        height: 200px;
        border-radius: 0.35rem;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
        transition: all 0.15s ease-in-out;
        &:hover {
          transform: scale(1.05);
        }
      }
		}
}
</style>
