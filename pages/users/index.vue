<template>
  <AppSidebar container-class="user-container">
    <div class="user-card">
      <div
        v-for="user in users"
        :key="user.id"
        :class="`user-card__item`"
        @click="showModal(user)"
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
      <div v-if="modalData" class="user-modal">
        <div>
          <img
            :src="modalData.image"
            :alt="modalData.name"
            class="user-modal__image"
          />
        </div>
        <div class="user-modal__info">
          <div class="user-modal__info__data">
            <svg
              class="user-modal__info__data__icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
            <span class="user-modal__info__data__text">{{
              modalData.name
            }}</span>
          </div>

          <div class="user-modal__info__data">
            <svg
              class="user-modal__info__data__icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              ></path>
            </svg>
            <a
              :href="`mailto:${modalData.email}?subject=We're Hiring!&body=Join us now!`"
              class="user-modal__info__data__text user-modal__info__data__text--link"
              >{{ modalData.email }}</a
            >
          </div>

          <div class="user-modal__info__data">
            <svg
              class="user-modal__info__data__icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <span class="user-modal__info__data__text">{{
              modalData.phone
            }}</span>
          </div>

          <div class="user-modal__info__data">
            <svg
              class="user-modal__info__data__icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              ></path>
            </svg>
            <span class="user-modal__info__data__text">{{
              modalData.address.street + ', ' + modalData.address.city
            }}</span>
          </div>

          <div class="user-modal__info__data">
            <svg
              class="user-modal__info__data__icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span class="user-modal__info__data__text">{{
              modalData.website
            }}</span>
          </div>
        </div>
      </div>
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

  middleware: 'auth',

  data() {
    return {
      users: [],
      modalData: null,
      modalState: false,
    }
  },

  async fetch() {
    this.users = await this.$axios
      .get('https://stage-ark.deenibondhon.com/users.json')
      .then((response) => response.data)
      .catch((e) => console.log('fetch error', e))
  },

  methods: {
    showModal(e: any) {
      this.modalData = e
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

.user-modal {
  display: flex;
  gap: 1rem;

  &__image {
    height: 17em;
    width: 170px;
    border-radius: 0.2rem;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px 10px;
    color: #303030;

    &__data {
      display: flex;
      align-items: center;
      gap: 15px;

      &__text {
        font-size: 15px;

        &--link {
          color: blue;
        }
      }

      &__icon {
        height: 25px;
        height: 25px;
      }
    }
  }
}
</style>
