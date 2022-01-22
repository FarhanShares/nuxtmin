<template>
  <AppSidebar container-class="user-container">
    <div class="user-card">
      <div
        v-for="user in users"
        :key="user.id"
        :class="`user-card__item`"
        @click="showModal"
      >
        <img :src="user.image" class="user-card__item__image" />
      </div>
    </div>

    <AppModal
      :show="modalState"
      :measure="`em`"
      :animation="'zoom'"
      :width="28.5"
      :height="17"
      :duration="301"
      :class-name="`my-dialog`"
      @hide="modalState = false"
    >
      <div class="header">User</div>
      <div class="body">User Info</div>
    </AppModal>
  </AppSidebar>
</template>

<script lang="ts">
import Vue from 'vue'
import AppModal from '~/components/modal/AppModal.vue'
import AppSidebar from '~/components/common/AppSidebar.vue'

export default Vue.extend({
  name: 'UsersPage',

  components: { AppSidebar, AppModal },

  data() {
    return {
      users: [],
      modalState: false,
    }
  },

  async fetch() {
    this.users = await this.$axios
      .get('/api/users.json')
      .then((response) => response.data)
      .catch((e) => console.log('fetch error', e))
  },

  methods: {
    showModal() {
      this.modalState = true
    },
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
  grid-template-columns: repeat(
    var(--grid-cols),
    minmax(var(--auto-grid-min-size), 1fr)
  );
  padding: 0;
  box-sizing: border-box;

  &__item {
    cursor: pointer;

    &__image {
      width: 170px;
      height: 200px;
      border-radius: 0.35rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      transition: all 0.15s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>
