<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div
          v-if="!!user.photoURL"
          class="media-left">
          <figure class="image is-48x48">
            <img
              :src="user.photoURL"
              :alt="user.displayName">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ user.displayName }}</p>
          <p class="subtitle is-6">{{ user.email }}</p>
        </div>
        <div class="content">
          uid: {{ user.uid }}
          <br>
          provider: {{ providers }}
          <br>
          Phone:
          <span v-if="!!user.phoneNumber">
            {{ user.phoneNumber }}
          </span>
          <span v-else>
            <nuxt-link
              class="button is-small"
              to="/verify_phone">
              Verify Phone Number
            </nuxt-link>
          </span>
          <br>
          Email Verified:
          <span v-if="user.emailVerified">
            true
          </span>
          <span v-else>
            <SendEmailVerificationButton/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import SendEmailVerificationButton from './SendEmailVerificationButton';

  export default {
    components: {
      SendEmailVerificationButton
    },
    computed: {
      ...mapGetters('user', ['user']),
      providers: function () {
        return this.user.providers.join(', ')
      }
    },
  };
</script>

<style>
</style>
